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
}

export const SimpleInput = React.forwardRef(
  (props: Props, ref?: React.Ref<HTMLInputElement>) => {
    const { hasError, type, placeholder, name, onChange, defaultValue } = props

    return (
      <input
        sx={{
          variant: hasError
            ? 'elements.simple-input.variants.error'
            : 'elements.simple-input.base'
        }}
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    )
  }
)
