/** @jsx jsx */

import { useState } from 'react'
import { jsx } from '@emotion/core'
import { colors, inputs } from '@uswitch/trustyle.styles'
import { Icon } from '@uswitch/trustyle.icon'
import { FrozenInput } from '@uswitch/trustyle.frozen-input'

import { container, icon, root } from './styles'

interface Props<V = any> {
  freezable?: boolean
  hasError?: boolean
  label?: string
  onBlur: () => void
  onChange: (value: V) => void
  onFocus: () => void
  name: string
  options: Option[]
  placeholder?: string
  value: V
}

export interface Option {
  value: string
  text: string
}

export const DropDown: React.FC<Props> = ({
  freezable,
  hasError = false,
  label,
  onBlur,
  onChange,
  onFocus,
  name,
  options,
  placeholder,
  value
}) => {
  const [hasFocus, setHasFocus] = useState(false)
  const option = options.find(_ => _.value === value)
  const frozenText = option && option.text
  return (
    <FrozenInput fieldLabel={label} text={frozenText} freezable={freezable}>
      <div css={container}>
        <select
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
}
