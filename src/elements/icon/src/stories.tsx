import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { number, select } from '@storybook/addon-knobs'

import themeSelector from '../../../utils/theme-selector'

import { Direction, Glyph, Icon } from './'

const glyphChoices: Glyph[] = [
  'arrow',
  'arrow-circle',
  'bill',
  'book',
  'book-closed',
  'bookmark',
  'bookmark-filled',
  'calendar',
  'car',
  'caret',
  'check',
  'clock',
  'close',
  'checkmark',
  'conversation',
  'cross',
  'edit',
  'email',
  'error',
  'facebook',
  'filled-arrow',
  'filters',
  'four',
  'gas-electricity',
  'home',
  'info',
  'information',
  'letter',
  'location',
  'magnifier',
  'minus',
  'money-filter',
  'mobile',
  'one',
  'person',
  'phone',
  'phone-simple',
  'plus',
  'question',
  'smile',
  'sms',
  'sort',
  'three',
  'tick',
  'tv',
  'twitter',
  'two',
  'thumb-down',
  'thumb-up',
  'edit-journey',
  'star-outlined',
  'star-filled',
  'star-half-filled',
  'warning'
]

const directionChoices: Direction[] = ['up', 'down', 'right', 'left']

storiesOf('Elements/Icon', module).add(
  'With selectable glyph and color',
  () => {
    const theme = themeSelector()

    return (
      theme && (
        <Icon
          glyph={select('glyph', glyphChoices, 'arrow')}
          color={select('color', theme.colors, 'link')}
          direction={select('direction', directionChoices, 'up')}
          size={number('Size', 0)}
        />
      )
    )
  }
)
