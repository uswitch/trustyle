/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
// import { text } from '@storybook/addon-knobs'

import SideNav from '../src'

storiesOf('Compounds|Side Nav', module).add('Side Nav', () => {
  // const someText = text('Some text', 'example')
  return <SideNav  />
})
