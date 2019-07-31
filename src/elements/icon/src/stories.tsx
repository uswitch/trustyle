import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { colors } from '@uswitch/trustyle.styles'

import { Direction, Glyph, Icon } from './'

const glyphChoices = [
  'arrow' as Glyph,
  'caret' as Glyph,
  'close' as Glyph,
  'edit' as Glyph,
  'phone' as Glyph
]

const directionChoices = [
  'up' as Direction,
  'down' as Direction,
  'right' as Direction,
  'left' as Direction
]

storiesOf('Elements|Icon', module).add(
  'With selectable glyph and color',
  () => (
    <Icon
      glyph={select('glyph', glyphChoices, 'arrow' as Glyph)}
      color={select('color', colors, colors.battleshipGrey)}
      direction={select('direction', directionChoices, 'up' as Direction)}
    />
  )
)
