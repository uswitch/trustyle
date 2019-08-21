/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import { Arrow } from './arrow'
import { Caret } from './caret'
import { Phone } from './phone'
import { Close } from './close'
import { Edit } from './edit'

export type Glyph = 'arrow' | 'caret' | 'phone' | 'close' | 'edit'
export type Direction = 'up' | 'down' | 'left' | 'right'

interface Props {
  color: string
  direction?: Direction
  glyph: Glyph
  size?: number
}

export const Icon: React.FC<Props> = ({ color, direction = 'up', glyph, size }) => {
  if (glyph === 'arrow') {
    return <Arrow color={color} direction={direction} size={size} />
  }
  if (glyph === 'caret') {
    return <Caret color={color} direction={direction} size={size} />
  }
  if (glyph === 'phone') {
    return <Phone color={color} size={size} />
  }
  if (glyph === 'close') {
    return <Close color={color} size={size} />
  }
  if (glyph === 'edit') {
    return <Edit color={color} size={size} />
  }
  return null
}
