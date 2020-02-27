/** @jsx jsx */
import React, { Fragment, useState } from 'react'
import { jsx } from 'theme-ui'
import { action } from '@storybook/addon-actions'

import { checkedIcon, uncheckedIcon } from './assets'

import ToggleSwitch from './'

export default {
  title: 'Elements|Toggle Switch'
}

const icons = {
  checked: checkedIcon,
  unchecked: uncheckedIcon
}

export const ExampleWithState = () => {
  const [toggleState, setToggleState] = useState(true)

  const handleOnChange = () => {
    const newState = !toggleState
    setToggleState(newState)
    action('Toggle changed')(newState)
  }

  return (
    <Fragment>
      <ToggleSwitch
        id="toggle-1"
        aria-label="toggle-1"
        checked={toggleState}
        onChange={handleOnChange}
        icons={icons}
      />
      <label sx={{ marginLeft: 10 }} htmlFor="toggle-1">
        {toggleState ? 'On' : 'Off'}
      </label>
    </Fragment>
  )
}

export const ToggleOn = () => {
  return <ToggleSwitch checked />
}

export const ToggleOff = () => {
  return <ToggleSwitch checked={false} />
}
