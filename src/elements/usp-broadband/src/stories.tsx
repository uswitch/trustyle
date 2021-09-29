/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import UspBroadband from './'

export default {
  title: 'Elements/UspBroadband'
}

export const ExampleWithKnobs = () => {
  return <UspBroadband label="example text" color="award" />
}

export const AutomatedTests = () => {
  return <UspBroadband label="Some text" color="award" />
}
