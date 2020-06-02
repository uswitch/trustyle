/** @jsx jsx */

import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import { colors } from '@uswitch/trustyle.styles'
import { Icon } from '@uswitch/trustyle.icon'
import { FrozenInput } from '@uswitch/trustyle.frozen-input'

const { blueGrey, tomato, UswitchNavy } = colors

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
      value
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

    return (
      <FrozenInput text={frozenText} freezable={freezable} inputRef={inputRef}>
        <div
          sx={{ position: 'relative', variant: 'elements.drop-down.container' }}
        >
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
              variant: hasError
                ? 'elements.drop-down.select.variants.error'
                : hasFocus
                ? 'elements.drop-down.select.variants.focus'
                : 'elements.drop-down.select.base'
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
            <Icon
              glyph="caret"
              color={
                hasError
                  ? theme.elements?.['drop-down']?.errorColor ?? tomato
                  : hasFocus
                  ? theme.elements?.['drop-down']?.focusColor ?? UswitchNavy
                  : theme.elements?.['drop-down']?.defaultColor ?? blueGrey
              }
              direction="down"
            />
          </span>
        </div>
      </FrozenInput>
    )
  }
)
