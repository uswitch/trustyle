import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { number, select } from '@storybook/addon-knobs'

import themeSelector from '../../../utils/theme-selector'

import { Direction, Glyph, Icon } from './'

const glyphChoices: Glyph[] = [
  'arrow',
  'arrow-circle',
  'banking',
  'bill',
  'book',
  'book-closed',
  'bookmark',
  'bookmark-filled',
  'bullet',
  'calendar',
  'car',
  'caret',
  'car-insurance',
  'check',
  'check-circle',
  'clock',
  'close',
  'checkmark',
  'conversation',
  'credit-card',
  'credit-card-outline',
  'cross',
  'current-account',
  'edit',
  'email',
  'error',
  'facebook',
  'filled-arrow',
  'filters',
  'four',
  'gas-electricity',
  'home',
  'house',
  'info',
  'information',
  'letter',
  'location',
  'magnifier',
  'minus',
  'money-filter',
  'mobile',
  'mortgages',
  'mortgages-outline',
  'one',
  'pencil',
  'person',
  'person-bold',
  'person-circle',
  'people-bold',
  'phone',
  'phone-simple',
  'piggy-bank',
  'piggy-bank-outline',
  'plus',
  'pound-circle',
  'receipt-outline',
  'question',
  'question-filled',
  'smile',
  'sms',
  'sort',
  'sort-thin',
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
  'van',
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
