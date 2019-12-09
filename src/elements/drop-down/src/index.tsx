/** @jsx jsx */

import { useState, forwardRef } from 'react'
import { jsx } from '@emotion/core'
import { colors, inputs } from '@uswitch/trustyle.styles'
import { Icon } from '@uswitch/trustyle.icon'
import { FrozenInput } from '@uswitch/trustyle.frozen-input'

import { container, icon, root } from './styles'

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

export const DropDown = forwardRef(({
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
}: Props, ref: React.Ref<HTMLSelectElement>) => {
  const [hasFocus, setHasFocus] = useState(false)
  const option = options.find(_ => _.value === value)
  const frozenText = option && option.text
  return (
    <FrozenInput text={frozenText} freezable={freezable}>
      <div css={container}>
        <select
          ref={ref}
          onFocus={() => {
            setHasFocus(true)
            onFocus()
          }}
          onBlur={() => {
            setHasFocus(false)
            onBlur()
          }}
          onChange={e => onChange(e.currentTarget.value)}
          css={root(hasError, hasFocus)}
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
        <span css={icon}>
          <Icon
            glyph="caret"
            color={
              inputs.matchCircumstance(hasError, hasFocus) || colors.blueGrey
            }
            direction="down"
          />
        </span>
      </div>
    </FrozenInput>
  )
})
