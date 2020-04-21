/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { storiesOf } from '@storybook/react'
import ReactJson from 'react-json-view'

import composeTheme from '.'

storiesOf('Utils|Theme composer', module).add('Swatches', () => (
  <ReactJson src={JSON.parse(composeTheme('money'))} />
))
