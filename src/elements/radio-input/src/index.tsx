/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

export const RadioInput: React.FC<Props> = ({ label, ...inputProps }) => (
  <label sx={{ display: 'block' }}>
    <input
      sx={{
        marginLeft: '-9000px',
        appearance: 'none',
        position: 'absolute',
        '&:checked + span': {
          '&::before': {
            transition: 'background-color 200ms, border-color 200ms'
          }
        },
        variant: 'input.radio.base'
      }}
      type="radio"
      {...inputProps}
    />
    <span
      sx={{
        alignItems: 'center',
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'flex',
        minHeight: '50px',
        padding: 'base',
        paddingLeft: 0,
        width: '100%',
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
        variant: 'input.radio.label'
      }}
    >
      {label}
    </span>
  </label>
)
