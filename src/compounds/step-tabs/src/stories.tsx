/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { select, text } from '@storybook/addon-knobs'

import { StepTab, StepTabs } from './'

export default {
  title: 'Compounds|Step Tabs'
}

export const ExampleWithTwoTabs = () => {
  const iconGlyph = select('Icon', ['check', 'close', 'plus'], 'check')

  return (
    <StepTabs>
      <StepTab
        title={text('Tab 1 title', 'Tab 1')}
        description={text('Tab 1 description', 'Tab 1 description')}
        icon={iconGlyph}
      >
        {text('Tab 1 content', 'Here is some content')}
      </StepTab>
      <StepTab
        title={text('Tab 2 title', 'Tab 2')}
        description={text('Tab 1 description', 'Tab 1 description')}
        icon={iconGlyph}
      >
        {text('Tab 2 content', 'Here is some more content')}
      </StepTab>
    </StepTabs>
  )
}

export const ExampleWithImageAndParagraphContent = () => {
  const iconGlyph = select('Icon', ['check', 'close', 'plus'], 'check')

  const image = select(
    'image',
    ['phone-orange-bg', 'phone-pink-bg'],
    'phone-orange-bg'
  )

  const iconImg = (
    <img
      sx={{ width: '90%' }}
      src={require(`../../../../static/step-tabs/${image}.png`)}
    />
  )

  const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et feugiat lectus, sit amet imperdiet nisl. Donec blandit eleifend ante sit amet commodo. Fusce tristique lacus id luctus gravida. Morbi lobortis eget erat a congue. Cras finibus ligula et ex sollicitudin feugiat. Curabitur non imperdiet massa. Proin pellentesque tortor eget libero dictum, ac maximus nisi finibus. In elementum faucibus vehicula. Nunc non ipsum tortor. Donec at orci lacus.'

  const dummyTabOne = (
    <StepTab
      title="Dummy Tab One"
      icon={'check'}
      description={'Dummy step tab with image'}
    >
      {iconImg}
    </StepTab>
  )

  const dummyTabTwo = (
    <StepTab
      title="Dummy Tab"
      icon={'check'}
      description={'Dummy step tab with paragraph'}
    >
      {loremIpsum}
    </StepTab>
  )

  return (
    <StepTabs>
      <StepTab
        title={text('Tab 1 title', 'Tab 1')}
        description={text('Tab 1 description', 'Tab 1 description')}
        icon={iconGlyph}
      >
        {text('Tab 1 content', 'Here is some content')}
      </StepTab>
      {dummyTabOne}
      {dummyTabTwo}
    </StepTabs>
  )
}
