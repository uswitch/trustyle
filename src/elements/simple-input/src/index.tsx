/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'

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
    const { theme }: any = useThemeUI()

    const error = theme.colors[theme.elements.input?.error?.color]
    const normal = theme.colors[theme.elements.input?.default?.color]
    const focus = theme.colors[theme.elements.input?.focus?.color]

    return (
      <input
        sx={{
          variant: 'elements.input.base',
          padding: '16px',
          border: 'solid 1px',
          borderRadius: theme.elements.input.wrapper.borderRadius,
          borderColor: hasError ? error : normal,
          boxShadow: hasError
            ? `inset 0 0 0 1px ${error}`
            : theme.elements.input.formInput.boxShadow,
          backgroundColor: theme.elements.input.wrapper.backgroundColor,
          ':focus': {
            boxShadow: `inset 0 0 0 1px ${focus}`,
            borderColor: focus
          }
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
