import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { number, select } from '@storybook/addon-knobs'

import themeSelector from '../../../utils/theme-selector'

import { Direction, Glyph, Icon } from './'

const glyphChoices: Glyph[] = [
  'arrow',
  'caret',
  'check',
  'close',
  'edit',
  'email',
  'filters',
  'home',
  'letter',
  'minus',
  'phone',
  'plus',
  'sms'
]

const directionChoices: Direction[] = ['up', 'down', 'right', 'left']

storiesOf('Elements|Icon', module).add(
  'With selectable glyph and color',
  () => {
    const theme = themeSelector()

    return (
      <Icon
        glyph={select('glyph', glyphChoices, 'arrow')}
        color={select('color', theme.colors, 'link')}
        direction={select('direction', directionChoices, 'up')}
        size={number('Size', 0)}
      />
    )
  }
)
