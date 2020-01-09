/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { boolean, number, text } from '@storybook/addon-knobs'
import { colors } from '@uswitch/trustyle.styles'
import { ThemeProvider } from 'theme-ui'

import theme from '../../../utils/theme-selector'
import { Icon } from '../../icon/src'

import { List, ListItem } from './'

const Spacer = () => <div css={css({ minHeight: 20 })} />

storiesOf('Elements|List', module)
  .addDecorator(Story => {
    return <ThemeProvider theme={theme()}>{Story()}</ThemeProvider>
  })
  .add('primary variant', () => (
    <div css={css({ padding: number('Padding', 10) })}>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ListItem>
      </List>
    </div>
  ))
