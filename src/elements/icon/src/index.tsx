/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import { Arrow } from './arrow'
import { Caret } from './caret'
import { Close } from './close'
import { Edit } from './edit'
import { Email } from './email'
import { Filters } from './filters'
import { Letter } from './letter'
import { Phone } from './phone'
import { Plus } from './plus'
import { Sms } from './sms'

export type Glyph =
  | 'arrow'
  | 'caret'
  | 'close'
  | 'edit'
  | 'email'
  | 'filters'
  | 'letter'
  | 'phone'
  | 'plus'
  | 'sms'

export type Direction = 'up' | 'down' | 'left' | 'right'

interface Props {
  color: string
  direction?: Direction
  glyph: Glyph
  size?: number
}

const assertNever = (name: string, value: never): never => {
  throw new Error(`Unexpected ${name} '${value}'`)
}

export const Icon: React.FC<Props> = ({
  color,
  direction = 'up',
  glyph,
  size
}) => {
  switch (glyph) {
    case 'arrow':
      return <Arrow color={color} direction={direction} size={size} />
    case 'caret':
      return <Caret color={color} direction={direction} size={size} />
    case 'close':
      return <Close color={color} size={size} />
    case 'edit':
      return <Edit color={color} size={size} />
    case 'email':
      return <Email color={color} size={size} />
    case 'filters':
      return <Filters color={color} size={size} />
    case 'letter':
      return <Letter color={color} size={size} />
    case 'phone':
      return <Phone color={color} size={size} />
    case 'plus':
      return <Plus color={color} size={size} />
    case 'sms':
      return <Sms color={color} size={size} />
    default:
      return assertNever('glyph', glyph)
  }
}
