/** @jsx jsx */

import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'
import { FrozenInput } from '@uswitch/trustyle.frozen-input'
import get from '@uswitch/trustyle-utils.get'

export interface DataProps {
  [key: string]: boolean | number | string | null
}
interface Props<V = any> {
  dataProps?: DataProps
  disabled?: boolean
  freezable?: boolean
  hasError?: boolean
  onBlur: () => void
  onChange: (value: V) => void
  onFocus?: () => void
  name: string
  options: Option[]
  placeholder?: string
  value: V
  overlay?: React.ReactNode
}

const prependDataProps = (dataProps: DataProps) =>
  Object.keys(dataProps).reduce(
    (props, key) => ({
      ...props,
      [`data-${key}`]: dataProps[key]
    }),
    {}
  )

export interface Option {
  value: string
  text: string
}

export type DropDownElement = Pick<
  HTMLSelectElement,
  'focus' | 'scrollIntoView'
>

export const DropDown = forwardRef(
  (
    {
      dataProps = {},
      disabled,
      freezable,
      hasError = false,
      onBlur = () => {},
      onChange,
      onFocus = () => {},
      name,
      options,
      placeholder,
      value,
      overlay
    }: Props,
    ref: React.Ref<DropDownElement>
  ) => {
    const { theme }: any = useThemeUI()
    const [hasFocus, setHasFocus] = useState(false)
    const option = options.find(_ => _.value === value)
    const frozenText = option && option.text
    const inputRef: React.MutableRefObject<HTMLSelectElement | null> = useRef(
      null
    )

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current && inputRef.current.focus(),
      scrollIntoView: (...args) =>
        inputRef.current && inputRef.current.scrollIntoView(...args)
    }))

    const variant = hasError
      ? 'elements.drop-down.select.variants.error'
      : hasFocus
      ? 'elements.drop-down.select.variants.focus'
      : 'elements.drop-down.select.base'

    const iconColor =
      get(theme, `${variant}.iconColor`) ||
      get(theme, 'elements.drop-down.select.base.iconColor') ||
      get(theme, `${variant}.borderColor`) ||
      get(theme, 'elements.drop-down.select.base.borderColor')

    return (
      <FrozenInput text={frozenText} freezable={freezable} inputRef={inputRef}>
        <div
          sx={{ position: 'relative', variant: 'elements.drop-down.container' }}
        >
          {overlay && (
            <div
              sx={{
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                paddingX: 16,
                borderRadius: 3,
                variant
              }}
            >
              {overlay}
            </div>
          )}
          <select
            ref={inputRef}
            onFocus={() => {
              setHasFocus(true)
              onFocus()
            }}
            onBlur={() => {
              setHasFocus(false)
              onBlur()
            }}
            onChange={e => onChange(e.currentTarget.value)}
            sx={{
              opacity: overlay ? 0 : undefined,
              fontFamily: 'base',
              fontSize: 'base',
              lineHeight: '1.33',
              appearance: 'none',
              backgroundColor: 'white',
              borderRadius: 3,
              boxSizing: 'border-box',
              padding: 16,
              paddingRight: 48,
              verticalAlign: 'middle',
              width: '100%',
              '&::-ms-expand': {
                display: 'none'
              },
              variant
            }}
            id={name}
            name={name}
            value={!value ? '' : value}
            disabled={disabled}
            {...prependDataProps(dataProps)}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map(({ value, text }) => (
              <option key={text} value={value}>
                {text}
              </option>
            ))}
          </select>
          {!overlay && (
            <span
              sx={{
                height: 15,
                width: 15,
                pointerEvents: 'none',
                position: 'absolute',
                right: 16,
                top: 'calc(50% - 15px / 2)',
                variant: 'elements.drop-down.icon'
              }}
            >
              <Icon glyph="caret" color={iconColor} direction="down" />
            </span>
          )}
        </div>
      </FrozenInput>
    )
  }
)
