/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import { Arrow } from './arrow'
import { ArrowCircle } from './arrow-circle'
import { Bill } from './bill'
import { Book } from './book'
import { BookClosed } from './book-closed'
import { Bookmark } from './bookmark'
import { BookmarkFilled } from './bookmark-filled'
import { Calendar } from './calendar'
import { Caret } from './caret'
import { Car } from './car'
import { CaretFinal } from './caretFinal'
import { Check } from './check'
import { Clock } from './clock'
import { Close } from './close'
import { Checkmark } from './checkmark'
import { Conversation } from './conversation'
import { Cross } from './cross'
import { Edit } from './edit'
import { EditJourney } from './edit-journey'
import { Email } from './email'
import { EmailFilled } from './email-filled'
import { Error as ErrorIcon } from './error'
import { FilledArrow } from './filled-arrow'
import { Filters } from './filters'
import { Four } from './four'
import { GasElectricity } from './gas-electricity'
import { HamburgerSimple } from './hamburger-simple'
import { Home } from './home'
import { Info } from './info'
import { Information } from './information'
import { Letter } from './letter'
import { LinkedIn } from './linkedIn'
import { Location } from './location'
import { Magnifier } from './magnifier'
import { Minus } from './minus'
import { Mobile } from './mobile'
import { MoneyFilter } from './money-filter'
import { One } from './one'
import { Person } from './person'
import { Phone } from './phone'
import { Plus } from './plus'
import { Twitter } from './twitter'
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
import { StarFilled } from './star-filled'
import { StarOutlined } from './star-outlined'
import { StarHalfFilled } from './star-half-filled'
import { Warning } from './warning'
import { Facebook } from './facebook'
import { PhoneSimple } from './phone-simple'

export type Glyph =
  | 'arrow'
  | 'arrow-circle'
  | 'bill'
  | 'book'
  | 'book-closed'
  | 'bookmark'
  | 'bookmark-filled'
  | 'calendar'
  | 'car'
  | 'caret'
  | 'caretFinal'
  | 'check'
  | 'clock'
  | 'close'
  | 'checkmark'
  | 'conversation'
  | 'cross'
  | 'edit'
  | 'email'
  | 'email-filled'
  | 'error'
  | 'facebook'
  | 'filled-arrow'
  | 'filters'
  | 'four'
  | 'gas-electricity'
  | 'hamburger-simple'
  | 'home'
  | 'info'
  | 'information'
  | 'letter'
  | 'linkedIn'
  | 'location'
  | 'magnifier'
  | 'minus'
  | 'mobile'
  | 'money-filter'
  | 'one'
  | 'person'
  | 'phone'
  | 'phone-simple'
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
  | 'twitter'
  | 'star-outlined'
  | 'star-filled'
  | 'star-half-filled'
  | 'warning'

  // temporary icons
  | 'edit-journey'

export type Direction = 'up' | 'down' | 'left' | 'right'

interface Props extends React.SVGProps<SVGSVGElement> {
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
  size,
  ...props
}) => {
  switch (glyph) {
    case 'arrow':
      return <Arrow color={color} direction={direction} size={size} />
    case 'arrow-circle':
      return <ArrowCircle color={color} size={size} />
    case 'bill':
      return <Bill color={color} size={size} />
    case 'book':
      return <Book color={color} size={size} />
    case 'book-closed':
      return <BookClosed color={color} size={size} />
    case 'bookmark':
      return <Bookmark color={color} size={size} />
    case 'bookmark-filled':
      return <BookmarkFilled color={color} size={size} />

    case 'calendar':
      return <Calendar color={color} size={size} />
    case 'car':
      return <Car color={color} size={size} />
    case 'caret':
      return (
        <Caret color={color} direction={direction} size={size} {...props} />
      )
    case 'caretFinal':
      return <CaretFinal color={color} direction={direction} size={size} />
    case 'check':
      return <Check color={color} size={size} />
    case 'clock':
      return <Clock color={color} size={size} />
    case 'close':
      return <Close color={color} size={size} />
    case 'checkmark':
      return <Checkmark color={color} size={size} />
    case 'conversation':
      return <Conversation color={color} size={size} />
    case 'cross':
      return <Cross color={color} size={size} />
    case 'edit':
      return <Edit color={color} size={size} />
    case 'email':
      return <Email color={color} size={size} />
    case 'email-filled':
      return <EmailFilled color={color} size={size} />
    case 'error':
      return <ErrorIcon color={color} size={size} />
    case 'facebook':
      return <Facebook color={color} size={size} />
    case 'filled-arrow':
      return <FilledArrow color={color} size={size} />
    case 'filters':
      return <Filters color={color} size={size} />
    case 'four':
      return <Four color={color} size={size} />
    case 'gas-electricity':
      return <GasElectricity color={color} size={size} />
    case 'hamburger-simple':
      return <HamburgerSimple color={color} size={size} />
    case 'home':
      return <Home color={color} size={size} />
    case 'info':
      return <Info color={color} size={size} />
    case 'information':
      return <Information color={color} size={size} />
    case 'letter':
      return <Letter color={color} size={size} />
    case 'linkedIn':
      return <LinkedIn color={color} size={size} />
    case 'location':
      return <Location color={color} size={size} />
    case 'magnifier':
      return <Magnifier color={color} size={size} />
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
    case 'phone-simple':
      return <PhoneSimple color={color} size={size} />
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
    case 'twitter':
      return <Twitter color={color} size={size} />
    case 'star-filled':
      return <StarFilled color={color} size={size} />
    case 'star-outlined':
      return <StarOutlined color={color} size={size} />
    case 'star-half-filled':
      return <StarHalfFilled color={color} size={size} />
    case 'warning':
      return <Warning color={color} size={size} />

    // Temporary icons
    case 'edit-journey':
      return <EditJourney color={color} size={size} />

    default:
      return assertNever('glyph', glyph)
  }
}
