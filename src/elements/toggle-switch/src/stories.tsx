/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from '@emotion/core'
import { action } from '@storybook/addon-actions'

import ToggleSwitch from './'

export default {
  title: 'Elements|Toggle Switch'
}

const tick = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 11L9 17L20 6" stroke="#141424" strokeWidth="2" />
  </svg>
)

const cross = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9571 13.3713L19.5 20.9142L20.9142 19.5L13.3713 11.9571L20.9142 4.41421L19.5 3L11.9571 10.5429L4.41422 3L3 4.41421L10.5429 11.9571L3 19.5L4.41421 20.9142L11.9571 13.3713Z"
      fill="#A1A1A7"
    />
  </svg>
)

const icons = {
  checked: tick,
  unchecked: cross
}

export const ExampleWithKnobs = () => {
  const [toggleState, setToggleState] = useState(true)

  const handleOnChange = (e: any) => {
    const newState = !toggleState
    setToggleState(newState)
    action(`Toggle clicked: ${newState}`)(e)
  }

  return (
    <ToggleSwitch
      checked={toggleState}
      onChange={handleOnChange}
      icons={icons}
    />
  )
}

export const ToggleOn = () => {
  return <ToggleSwitch checked />
}

export const ToggleOff = () => {
  return <ToggleSwitch checked={false} />
}
