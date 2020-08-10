/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import { Arrow } from './arrow'
import { Bill } from './bill'
import { Calendar } from './calendar'
import { Caret } from './caret'
import { Check } from './check'
import { Clock } from './clock'
import { Close } from './close'
import { Conversation } from './conversation'
import { Cross } from './cross'
import { Edit } from './edit'
import { EditJourney } from './edit-journey'
import { Email } from './email'
import { Error as ErrorIcon } from './error'
import { FilledArrow } from './filled-arrow'
import { Filters } from './filters'
import { Four } from './four'
import { GasElectricity } from './gas-electricity'
import { Home } from './home'
import { Letter } from './letter'
import { Location } from './location'
import { Minus } from './minus'
import { Mobile } from './mobile'
import { MoneyFilter } from './money-filter'
import { One } from './one'
import { Person } from './person'
import { Phone } from './phone'
import { Plus } from './plus'
import { Question } from './question'
import { Smile } from './smile'
import { Sms } from './sms'
import { Sort } from './sort'
import { Three } from './three'
import { Tick } from './tick'
import { Tv } from './tv'
import { Two } from './two'
import { ThumbUp } from './thumb-up'
import { ThumbDown } from './thumb-down'

export type Glyph =
  | 'arrow'
  | 'bill'
  | 'calendar'
  | 'caret'
  | 'check'
  | 'clock'
  | 'close'
  | 'conversation'
  | 'cross'
  | 'edit'
  | 'email'
  | 'error'
  | 'filled-arrow'
  | 'filters'
  | 'four'
  | 'gas-electricity'
  | 'home'
  | 'letter'
  | 'location'
  | 'minus'
  | 'mobile'
  | 'money-filter'
  | 'one'
  | 'person'
  | 'phone'
  | 'plus'
  | 'question'
  | 'smile'
  | 'sms'
  | 'sort'
  | 'three'
  | 'tick'
  | 'tv'
  | 'two'
  | 'thumb-up'
  | 'thumb-down'

  // temporary icons
  | 'edit-journey'

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
    case 'bill':
      return <Bill color={color} size={size} />
    case 'calendar':
      return <Calendar color={color} size={size} />
    case 'caret':
      return <Caret color={color} direction={direction} size={size} />
    case 'check':
      return <Check color={color} size={size} />
    case 'clock':
      return <Clock color={color} size={size} />
    case 'close':
      return <Close color={color} size={size} />
    case 'conversation':
      return <Conversation color={color} size={size} />
    case 'cross':
      return <Cross color={color} size={size} />
    case 'edit':
      return <Edit color={color} size={size} />
    case 'email':
      return <Email color={color} size={size} />
    case 'error':
      return <ErrorIcon color={color} size={size} />
    case 'filled-arrow':
      return <FilledArrow color={color} size={size} />
    case 'filters':
      return <Filters color={color} size={size} />
    case 'four':
      return <Four color={color} size={size} />
    case 'gas-electricity':
      return <GasElectricity color={color} size={size} />
    case 'home':
      return <Home color={color} size={size} />
    case 'letter':
      return <Letter color={color} size={size} />
    case 'location':
      return <Location color={color} size={size} />
    case 'minus':
      return <Minus color={color} size={size} />
    case 'mobile':
      return <Mobile color={color} size={size} />
    case 'money-filter':
      return <MoneyFilter color={color} size={size} />
    case 'one':
      return <One color={color} size={size} />
    case 'person':
      return <Person color={color} size={size} />
    case 'phone':
      return <Phone color={color} size={size} />
    case 'plus':
      return <Plus color={color} size={size} />
    case 'question':
      return <Question color={color} size={size} />
    case 'smile':
      return <Smile color={color} size={size} />
    case 'sms':
      return <Sms color={color} size={size} />
    case 'sort':
      return <Sort color={color} size={size} />
    case 'three':
      return <Three color={color} size={size} />
    case 'tick':
      return <Tick color={color} size={size} />
    case 'tv':
      return <Tv color={color} size={size} />
    case 'two':
      return <Two color={color} size={size} />
    case 'thumb-up':
      return <ThumbUp color={color} size={size} />
    case 'thumb-down':
      return <ThumbDown color={color} size={size} />
    // Temporary icons
    case 'edit-journey':
      return <EditJourney color={color} size={size} />

    default:
      return assertNever('glyph', glyph)
  }
}
