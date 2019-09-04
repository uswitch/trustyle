/** @jsx jsx */

import { useEffect, useRef, useState } from 'react'
import { jsx } from '@emotion/core'
import { FrozenInput } from '@uswitch/trustyle.frozen-input'
import { inputs } from '@uswitch/trustyle.styles'
import * as ReactInputMask from 'react-input-mask'

import * as st from './styles'

const MaskedInput: any = ReactInputMask

export type InputType = 'text' | 'email' | 'tel' | 'password'
export type Width = 'half' | 'full'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string | undefined
  freezable?: boolean
  hasError?: boolean
  mask?: string
  name: string
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
    const handleResize = () => setIsResizing(true)
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
  freezable,
  hasError = false,
  mask,
  prefix,
  suffix,
  type,
  width = 'full',
  ...inputProps
}) => {
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null)
  const [hasFocus, setHasFocus] = useState(false)
  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setHasFocus(false)

    if (inputProps.onBlur) {
      inputProps.onBlur(event)
    }
  }
  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setHasFocus(true)

    if (inputProps.onFocus) {
      inputProps.onFocus(event)
    }
  }

  useScrollIntoView(inputRef, hasFocus)

  const childProps = {
    ...inputProps,
    css: inputs.keyboardInput,
    onBlur,
    onFocus,
    type
  }

  return (
    <FrozenInput
      text={inputProps.value || inputProps.defaultValue || ''}
      freezable={freezable}
    >
      <div css={[inputs.keyboardInputContainer(hasError, hasFocus), st[width]]}>
        {prefix && <span css={st.prefix(hasError, hasFocus)}>{prefix}</span>}

        {mask ? (
          <MaskedInput inputRef={inputRef} mask={mask} {...childProps} />
        ) : (
          <input ref={inputRef} {...childProps} />
        )}

        {suffix && <span css={st.suffix(hasError, hasFocus)}>{suffix}</span>}
      </div>
    </FrozenInput>
  )
}
