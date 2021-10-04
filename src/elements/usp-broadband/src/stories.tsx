/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { Story } from '@storybook/react'

import { uspColors } from './helper'

import { UspBroadband, UspBroadbandProps } from './'

export default {
  title: 'Elements/UspBroadband'
}

export const Template: Story<UspBroadbandProps> = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      width: 800,
      flexWrap: 'wrap',
      height: 300,
      alignItems: 'space-around',
      justifyContent: 'space-between'
    }}
  >
    {Object.keys(uspColors).map(key => (
      <UspBroadband
        key={key}
        label={`USP Color - ${key}`}
        color={key}
        styling={{ marginRight: 8 }}
      />
    ))}
  </div>
)
