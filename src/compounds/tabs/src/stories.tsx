/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import { Tab, Tabs } from './'

export default {
  title: 'Compounds|Tabs'
}

export const ExampleWithTwoTabs = () => {
  return (
    <Tabs isScrollable>
      <Tab title={text('Tab 1 title', 'Tab 1')}>
        {text('Tab 1 content', 'I am some content!')}
      </Tab>
      <Tab title={text('Tab 2 title', 'Tab 2')}>
        {text('Tab 2 content', 'Here is some more content')}
      </Tab>
    </Tabs>
  )
}

export const ExampleWithScrollingTabTitles = () => {
  const dummyTab = <Tab title="Dummy Tab">Dummy Tab Content</Tab>

  return (
    <Tabs isScrollable={false}>
      <Tab title={text('Tab 1 title', 'Tab 1')}>
        {text('Tab 1 content', 'I am some content')}
      </Tab>
      <Tab title={text('Tab 2 title', 'Tab 2')}>
        {text('Tab 2 content', 'Here is some more content')}
      </Tab>
      {dummyTab}
      {dummyTab}
      {dummyTab}
    </Tabs>
  )
}
