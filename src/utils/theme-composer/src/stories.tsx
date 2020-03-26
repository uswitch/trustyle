/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { storiesOf } from '@storybook/react'

import composeTheme from '.'

storiesOf('Utils|Theme composer', module).add('Swatches', () => (
  <div>{composeTheme('money')}</div>
))
