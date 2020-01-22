/** @jsx jsx */

import { useEffect, useRef, useState } from 'react'
import { jsx } from '@emotion/core'
import { FrozenInput } from '@uswitch/trustyle.frozen-input'
import { inputs } from '@uswitch/trustyle.styles'
import InputMask from 'react-input-mask'
import debounce from 'lodash.debounce'

import * as st from './styles'

export type InputType = 'text' | 'email' | 'tel' | 'password'
export type Width = 'half' | 'full'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string | undefined
  freezable?: boolean
  hasError?: boolean
  mask?: string
  name: string
  postprocess?: (x: string) => string
  prefix?: string
  suffix?: string
  type: InputType
  value?: string | undefined
  width?: Width
}

// On Android, there is a behaviour where the keyboard may sometimes open ON TOP of a focused input.
// This effect fixes the problem by calling scrollIntoView on a window resize event - this event
// is fired when the keyboard opens and pushes up the viewport.
//
// Related: https://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element?noredirect=1&lq=1
const useScrollIntoView = (
  inputRef: React.RefObject<HTMLInputElement>,
  hasFocus: boolean
) => {
  const [isResizing, setIsResizing] = useState(false)

  useEffect(() => {
    const handleResize = debounce(() => setIsResizing(true), 50)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (hasFocus && isResizing) {
      const inputEl = inputRef.current
      inputEl &&
        inputEl.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
    }

    isResizing && setIsResizing(false)
  }, [hasFocus, isResizing])
}

export const Input: React.FC<Props> = ({
  defaultValue,
  freezable,
  hasError = false,
  mask,
  onBlur,
  onChange,
  onFocus,
  postprocess = x => x,
  prefix,
  suffix,
  type,
  width = 'full',
  ...inputProps
}) => {
  const inputRef: React.MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(
    null
  )
  const [hasFocus, setHasFocus] = useState(false)
  useScrollIntoView(inputRef, hasFocus)
  const [interiorValue, setInteriorValue] = useState(
    inputProps.value || defaultValue || ''
  )

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setHasFocus(false)
    if (onBlur) onBlur(event)
  }

  const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setHasFocus(true)
    if (onFocus) onFocus(event)
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    const postprocessed = postprocess(value)
    setInteriorValue(value)
    if (onChange)
      onChange({
        ...event,
        currentTarget: { ...event.currentTarget, value: postprocessed }
      })
  }

  const value =
    inputProps.value !== undefined &&
    postprocess(interiorValue) !== inputProps.value
      ? inputProps.value
      : interiorValue

  const childProps = {
    ...inputProps,
    css: inputs.keyboardInput,
    onBlur: blurHandler,
    onChange: changeHandler,
    onFocus: focusHandler,
    type,
    value
  }

  return (
    <FrozenInput text={interiorValue} freezable={freezable} inputRef={inputRef}>
      <div css={[inputs.keyboardInputContainer(hasError, hasFocus), st[width]]}>
        {prefix && <span css={st.prefix(hasError, hasFocus)}>{prefix}</span>}

        {mask ? (
          <InputMask
            // react-input-mask only supports a callback-style ref
            inputRef={ref => (inputRef.current = ref)}
            mask={mask}
            {...childProps}
          />
        ) : (
          <input ref={inputRef} {...childProps} />
        )}

        {suffix && <span css={st.suffix(hasError, hasFocus)}>{suffix}</span>}
      </div>
    </FrozenInput>
  )
}
