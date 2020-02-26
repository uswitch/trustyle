/** @jsx jsx */
import React, { Fragment } from 'react'
import { jsx } from '@emotion/core'
import { text } from '@storybook/addon-knobs'

import ToggleSwitch from './'

export default {
  title: 'Elements|Toggle Switch'
}

export const ExampleWithKnobs = () => {
  const toggleClicked = ({ toggleState }) => {
    console.log('Toggle Clicked', toggleState)
  }

  return (
    <Fragment>
      <ToggleSwitch on onClick={toggleClicked} />
    </Fragment>
  )
}
