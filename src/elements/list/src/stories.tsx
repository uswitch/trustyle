/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import { List, ListItem } from './'
import { BBDealsExample } from '../../hero/src/stories'

export default {
  title: 'Elements|List'
}

export const Example = () => (
  <div>
    <List title="Checklist" variant="checklist">
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
    <List title="Pros" variant="pros">
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>

    <List listType="numeric">
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
      <ListItem>Fourth item</ListItem>
      <ListItem>Fifth item</ListItem>
      <ListItem>Sixth item</ListItem>
      <ListItem>Seventh item</ListItem>
      <ListItem>Eighth item</ListItem>
      <ListItem>Ninth item</ListItem>
      <ListItem>Tenth item</ListItem>
      <ListItem>
        <p>Item with a block element inside</p>
      </ListItem>
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
