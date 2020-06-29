/** @jsx jsx */

import { forwardRef, useEffect, useRef, useState } from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import { FrozenInput } from '@uswitch/trustyle.frozen-input'
import { pxToRem } from '@uswitch/trustyle.styles'
import { Glyph, Icon } from '@uswitch/trustyle.icon'
import InputMask from 'react-input-mask'
import debounce from 'tiny-debounce'

import * as st from './styles'

export type InputType = 'text' | 'email' | 'tel' | 'password' | 'number'
export type Width = 'half' | 'full'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string | undefined
  freezable?: boolean
  hasError?: boolean
  mask?: string
  name: string
  postprocess?: (x: string) => string
  prefix?: string
  prefixIcon?: Glyph
  suffix?: string
  value?: string | undefined
  width?: Width
}

// On Android, there's a behaviour where the keyboard may sometimes open ON TOP of a focused input.
// This effect fixes the problem by calling scrollIntoView on a window resize event - this event
// is fired when the keyboard opens and pushes up the viewport.
//
// Related: https://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element?noredirect=1&lq=1
const useScrollIntoView = (inputRef: React.RefObject<HTMLInputElement>) => {
  useEffect(() => {
    const handleResize = debounce(() => {
      if (
        inputRef.current === null ||
        inputRef.current !== document.activeElement
      )
        return
      try {
        inputRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      } catch {
        // `block: 'center'` is unsupported in Firefox < 58
        inputRef.current.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }, 50)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      defaultValue,
      freezable,
      hasError = false,
      mask,
      onBlur,
      onChange,
      onFocus,
      postprocess = x => x,
      prefix,
      prefixIcon,
      suffix,
      type,
      width = 'full',
      ...inputProps
    },
    ref
  ) => {
    const inputRef =
      // ref can be passed in, otherwise it's defined in useRef
      (ref as React.MutableRefObject<HTMLInputElement | null>) ||
      useRef<HTMLInputElement | null>(null)
    const [hasFocus, setHasFocus] = useState(false)
    useScrollIntoView(inputRef)
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
      sx: {
        variant: 'elements.input.base',
        padding: (theme: any) => pxToRem(theme.space.base)
      },
      onBlur: blurHandler,
      onChange: changeHandler,
      onFocus: focusHandler,
      type,
      value
    }

  const { theme }: any = useThemeUI()
  const iconColor = theme.colors[theme.input?.affix?.prefix?.iconColor]

  return (
    <FrozenInput 
      text={interiorValue} 
      freezable={freezable} 
      inputRef={inputRef}
    >
        <div
          sx={{
            ...st.wrapper(hasError, hasFocus, width),
            variant: 'elements.input.wrapper'
          }}
        >
          {(prefix || prefixIcon) && (
            <span
              sx={{
                ...st.prefix(hasError, hasFocus),
                variant: 'elements.input.affix.prefix'
              }}
            >
              {prefixIcon ? (
                <Icon glyph={prefixIcon} size={16} color={iconColor} />
              ) : (
                prefix
              )}
            </span>
          )}

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

          {suffix && (
            <span 
              sx={{
                ...st.suffix(hasError, hasFocus),
                variant: 'elements.input.affix.suffix'
              }}
            >
            {suffix}
            </span>
          )}
        </div>
      </FrozenInput>
    )
  }
)
