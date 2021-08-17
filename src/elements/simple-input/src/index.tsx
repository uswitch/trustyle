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
  uppercase?: boolean
  onKeyDown?: any
}

export const SimpleInput = React.forwardRef(
  (props: Props, ref?: React.Ref<HTMLInputElement>) => {
    const {
      hasError,
      type,
      placeholder,
      onChange,
      name,
      defaultValue,
      prefix,
      suffix,
      inputSize,
      uppercase,
      onKeyDown
    } = props

    const [hasFocus, setHasFocus] = useState(false)
    const [prefixWidth, setPrefixWidth] = useState(0)
    const [suffixWidth, setSuffixWidth] = useState(0)
    const prefixRef: RefObject<HTMLDivElement> = React.createRef()
    const suffixRef: RefObject<HTMLDivElement> = React.createRef()

    const additionalProps = (): object => {
      const defaultProps = [
        'hasError',
        'type',
        'placeholder',
        'onChange',
        'name',
        'defaultValue',
        'prefix',
        'suffix',
        'inputSize',
        'uppercase',
        'onKeyDown'
      ]

      const regex = new RegExp('\\b(' + defaultProps.join('|') + ')\\b', 'g')

      let tempArr: object = {}

      Object.keys(props).forEach(function(key: string) {
        if (!regex.test(key)) {
          tempArr = {
            ...tempArr,
            [key]: props[key as keyof Props]
          }
        }
      })

      return tempArr
    }

    useEffect(() => {
      setPrefixWidth(prefixRef?.current?.offsetWidth || 0)
      setSuffixWidth(suffixRef?.current?.offsetWidth || 0)
    }, [prefixRef, suffixRef])

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
      <div
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
            sx={{ variant: 'elements.simple-input.affix.prefix' }}
          >
            {prefix}
          </span>
        )}
        <input
          sx={{
            variant: 'elements.simple-input.base',
            textAlign:
              inputSize === 'sm' ? ('center' as const) : ('left' as const),
            textTransform: uppercase && ('uppercase' as const)
          }}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          defaultValue={defaultValue}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          onKeyDown={onKeyDown}
          name={name}
          type={type || 'text'}
          {...additionalProps()}
        />
        {suffix && (
          <span
            ref={suffixRef}
            sx={{ variant: 'elements.simple-input.affix.suffix' }}
          >
            {suffix}
          </span>
        )}
      </div>
    )
  }
)
