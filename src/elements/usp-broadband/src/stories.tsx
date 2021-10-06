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
      gap: 8,
      flexDirection: 'row',
      width: 800,
      flexWrap: 'wrap',
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

    <UspBroadband
      label="Super super super super super super super super  super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super long award"
      color="award"
    />

    <UspBroadband
      label="Super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super long deal for black friday"
      color="black-friday"
    />
  </div>
)
