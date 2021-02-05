/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { number, select } from '@storybook/addon-knobs'

import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'
import themeSelector from '../../../utils/theme-selector'

import { IconContext } from './context'

import SimpleIcon, { Direction, Glyph } from './'

export default {
  title: 'Elements/Simple Icon'
}

const glyphChoices: Glyph[] = [
  'arrow',
  'arrow-circle',
  'bill',
  'book',
  'book-closed',
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

export const ExampleWithKnobs = () => {
  const theme = themeSelector()
  return (
    <IconContext.Provider value={{ iconPath: '/' }}>
      <SimpleIcon
        glyph={select('glyph', glyphChoices, 'arrow')}
        color={select('color', theme.colors, 'link')}
        size={number('Size', 0)}
        direction={select('direction', directionChoices, 'up')}
      />
    </IconContext.Provider>
  )
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  const permutations = permutationsGenerator({
    variant: ['primary', 'secondary']
  })

  return (
    <IconContext.Provider value={{ iconPath: '/' }}>
      <AllThemes>
        {permutations.map((p, i) => (
          <SimpleIcon glyph={'book-closed'} color="red" key={i} />
        ))}
      </AllThemes>
    </IconContext.Provider>
  )
}
