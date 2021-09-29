/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { Story } from '@storybook/react'

import { UspBroadband, UspBroadbandProps } from './'

export default {
  title: 'Elements/UspBroadband'
}

export const Template: Story<UspBroadbandProps> = () => (
  <div>
    <UspBroadband label="example text" color="award" />
  </div>
)
