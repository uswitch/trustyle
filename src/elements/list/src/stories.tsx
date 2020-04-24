/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import { List, ListItem } from './'

export default {
  title: 'Elements|List'
}

export const Example = () => (
  <div>
    <List listType="numeric">
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>

    <List listType="bullet">
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>

    <List listType="bullet">
      <ListItem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ListItem>
      <ListItem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ListItem>
      <ListItem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ListItem>
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
