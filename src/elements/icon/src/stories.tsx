import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { number, select } from '@storybook/addon-knobs'

import themeSelector from '../../../utils/theme-selector'

import { Direction, Glyph, Icon } from './'

const glyphChoices: Glyph[] = [
  'arrow',
  'bill',
  'calendar',
  'caret',
  'check',
  'clock',
  'close',
  'conversation',
  'cross',
  'edit',
  'email',
  'filters',
  'four',
  'home',
  'letter',
  'location',
  'minus',
  'mobile',
  'one',
  'person',
  'phone',
  'plus',
  'question',
  'smile',
  'sms',
  'sort',
  'three',
  'tick',
  'tv',
  'two'
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
