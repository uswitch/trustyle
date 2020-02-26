/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

interface Props {
  checked: boolean
  onChange?: (e: React.SyntheticEvent) => void
}

const ToggleSwitch: React.FC<Props> = ({ checked, onChange }) => {
  const outerStyling = {
    checked: {
      backgroundColor: 'black',
      variant: 'toggleSwitch.outer.variant.checked'
    },
    unchecked: {
      backgroundColor: 'grey', // default value, override in theme
      variant: 'toggleSwitch.outer.variant.unchecked'
    }
  }

  const innerStyling = {
    checked: {
      transform: 'translateX(40px)',
      variant: 'toggleSwitch.inner.variant.checked'
    },
    unchecked: {
      variant: 'toggleSwitch.inner.variant.unchecked'
    }
  }

  return (
    <div>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <div
        sx={{
          width: 80,
          height: 40,
          padding: 4,
          borderRadius: '50vw',
          transition: 'background-color 400ms',
          ...outerStyling[checked ? 'checked' : 'unchecked']
        }}
        role="presentation"
        onClick={onChange}
      >
        <div
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50vw',
            backgroundColor: 'white',
            transition: 'transform 400ms',
            ...innerStyling[checked ? 'checked' : 'unchecked']
          }}
        ></div>
      </div>
    </div>
  )
}

export default ToggleSwitch
