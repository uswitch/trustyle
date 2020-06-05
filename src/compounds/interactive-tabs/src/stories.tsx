/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { InteractiveTab, InteractiveTabs } from './'

export default {
  title: 'Compounds|InteractiveTabs'
}

export const Example = () => {
  const interactiveTab = (imageUrl: string) => (
    <InteractiveTab
      title={'Take control of your bills'}
      description={
        'Explore energy, broadband, mobile and credit card deals all in one place'
      }
      icon={'check'}
    >
      <img src={imageUrl} alt="kitten" />
    </InteractiveTab>
  )

  return (
    <InteractiveTabs>
      {interactiveTab('https://placekitten.com/200/200?image=1')}
      {interactiveTab('https://placekitten.com/200/200?image=2')}
      {interactiveTab('https://placekitten.com/200/200?image=3')}
    </InteractiveTabs>
  )
}
