import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { number, select } from '@storybook/addon-knobs'

import { colors } from '../../../styles'

import { Direction, Glyph, Icon } from './'

const glyphChoices: Glyph[] = [
  'arrow',
  'caret',
  'close',
  'edit',
  'email',
  'filters',
  'home',
  'letter',
  'phone',
  'plus',
  'sms'
]

const directionChoices: Direction[] = ['up', 'down', 'right', 'left']

storiesOf('Elements|Icon', module).add(
  'With selectable glyph and color',
  () => (
    <Icon
      glyph={select('glyph', glyphChoices, 'arrow')}
      color={select('color', colors, colors.battleshipGrey)}
      direction={select('direction', directionChoices, 'up')}
      size={number('Size', 0)}
    />
  )
)
