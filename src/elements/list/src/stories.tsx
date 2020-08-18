/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import { List, ListItem } from './'

export default {
  title: 'Elements|List'
}

const arr1 = ['First item', 'Second item', 'Third item']
const arr2 = ['Fourth item', 'Fifth item', 'Sixth item']
const pTag = <p>Item with a block element inside</p>

export const Example = () => (
  <div>
    <List title="Checklist" variant="checklist" items={arr1} />
    <List title="Pros" variant="pros" items={arr1} />
    <List listType="numeric" items={[...arr1, ...arr2, pTag]} />

    <List title="bullet" items={arr1} />

    <List listType="bullet">
      <ListItem>First child</ListItem>
      <ListItem>Second child</ListItem>
      <ListItem>Third child</ListItem>
    </List>
  </div>
)

Example.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <Example />
    </AllThemes>
  )
}
