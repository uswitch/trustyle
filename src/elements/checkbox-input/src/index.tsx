/** @jsx jsx */

import React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  slim?: boolean
}

export const CheckboxInput: React.FC<Props> = ({
  label,
  slim = false,
  ...inputProps
}) => {
  const variant = slim ? 'slim' : 'normal'

  return (
    <label sx={{ display: 'block' }}>
      <input
        sx={{
          marginLeft: '-9000px',
          appearance: 'none' as const,
          position: 'absolute' as const,
          '&:checked + span': {
            '&::before': {
              transition: 'background-color 200ms, border-color 200ms'
            }
          },
          variant: `elements.input.checkbox.variants.${variant}`
        }}
        type="checkbox"
        {...inputProps}
      />
      <span
        sx={{
          alignItems: 'center',
          boxSizing: 'border-box' as const,
          cursor: 'pointer',
          display: 'flex',
          padding: 'base',
          paddingLeft: 0,
          width: '100%',
          userSelect: 'none' as const,
          '&::before': {
            borderRadius: '50%',
            borderStyle: 'solid',
            borderWidth: '2px',
            content: '" "',
            display: 'block',
            height: '17px',
            marginLeft: 'base',
            marginRight: 'base',
            width: '17px',
            flexGrow: 0,
            flexShrink: 0
          },
          variant: 'elements.input.checkbox.label'
        }}
      >
        {label}
      </span>
    </label>
  )
}
