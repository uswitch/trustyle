/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

export interface Props {
  hasError?: boolean | undefined
  type: string
  placeholder?: string
  name: string
  onChange?: any
  defaultValue?: string
  prefix?: string
}

export const SimpleInput = React.forwardRef(
  (props: Props, ref?: React.Ref<HTMLInputElement>) => {
    const {
      hasError,
      type,
      placeholder,
      name,
      onChange,
      defaultValue,
      prefix
    } = props

    return (
      <div
        sx={{
          variant: hasError
            ? 'elements.simple-input.variants.error'
            : 'elements.simple-input.wrapper'
        }}
      >
        {prefix && (
          <span sx={{ variant: 'elements.simple-input.affix.prefix' }}>
            {prefix}
          </span>
        )}
        <input
          sx={{
            variant: 'elements.simple-input.base'
          }}
          name={name}
          type={type}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      </div>
    )
  }
)
