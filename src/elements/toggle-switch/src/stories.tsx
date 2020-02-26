/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from '@emotion/core'
import { action } from '@storybook/addon-actions'

import ToggleSwitch from './'

export default {
  title: 'Elements|Toggle Switch'
}

export const ExampleWithKnobs = () => {
  const [toggleState, setToggleState] = useState(true)

  const handleOnChange = (e: any) => {
    action(`Toggle clicked: ${toggleState}`)(e)
    setToggleState(!toggleState)
  }

  return <ToggleSwitch checked={toggleState} onChange={handleOnChange} />
}

export const ToggleOn = () => {
  return <ToggleSwitch checked />
}

export const ToggleOff = () => {
  return <ToggleSwitch checked={false} />
}
