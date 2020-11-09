/** @jsx jsx */

import React, { RefObject, useEffect, useState } from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import get from '@uswitch/trustyle-utils.get'

type InputSize = 'sm' | 'base' | undefined

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean | undefined
  type: string
  placeholder?: string
  name: string
  onChange?: any
  defaultValue?: string
  prefix?: string
  suffix?: string
  inputSize?: InputSize
}

export const SimpleInput = React.forwardRef(
  (props: Props, ref?: React.Ref<HTMLInputElement>) => {
    const {
      hasError,
      placeholder,
      onChange,
      defaultValue,
      prefix,
      suffix,
      inputSize
    } = props

    const [hasFocus, setHasFocus] = useState(false)
    const [prefixWidth, setPrefixWidth] = useState(0)
    const [suffixWidth, setSuffixWidth] = useState(0)
    const prefixRef: RefObject<HTMLDivElement> = React.createRef()
    const suffixRef: RefObject<HTMLDivElement> = React.createRef()

    useEffect(() => {
      setPrefixWidth(prefixRef?.current?.offsetWidth || 0)
      setSuffixWidth(suffixRef?.current?.offsetWidth || 0)
    }, [suffixRef])

    const setWidth = (inputSize: InputSize) => {
      const { theme }: any = useThemeUI()

      const widthLookup: { [key: string]: any } = {
        sm: get(theme, 'elements.simple-input.inputWidth.small'),
        base: '100%'
      }

      return inputSize
        ? widthLookup[inputSize] + prefixWidth + suffixWidth
        : widthLookup.base
    }

    return (
      <span
        sx={{
          width: setWidth(inputSize),
          variant:
            hasError && !hasFocus
              ? 'elements.simple-input.variants.error'
              : hasFocus
              ? 'elements.simple-input.variants.focus'
              : 'elements.simple-input.wrapper'
        }}
      >
        {prefix && (
          <span
            ref={prefixRef}
            sx={{
              variant: 'elements.simple-input.affix.prefix'
            }}
          >
            {prefix}
          </span>
        )}
        <input
          sx={{
            variant: 'elements.simple-input.base'
          }}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          defaultValue={defaultValue}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          {...props}
        />
        {suffix && (
          <span
            ref={suffixRef}
            className="suffix"
            sx={{
              variant: 'elements.simple-input.affix.suffix',
              float: 'right'
            }}
          >
            {suffix}
          </span>
        )}
      </span>
    )
  }
)
