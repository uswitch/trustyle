/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/react'

import { Arrow } from './arrow'
import { ArrowCircle } from './arrow-circle'
import { Banking } from './banking'
import { Bill } from './bill'
import { Book } from './book'
import { BookClosed } from './book-closed'
import { Bookmark } from './bookmark'
import { BookmarkFilled } from './bookmark-filled'
import { Bullet } from './bullet'
import { Calendar } from './calendar'
import { Caret } from './caret'
import { Car } from './car'
import { CaretFinal } from './caretFinal'
import { CarInsurance } from './car-insurance'
import { Check } from './check'
import { Clock } from './clock'
import { Close } from './close'
import { CheckCircle } from './check-circle'
import { Checkmark } from './checkmark'
import { Conversation } from './conversation'
import { CreditCard } from './credit-card'
import { CreditCardOutline } from './credit-card-outline'
import { Cross } from './cross'
import { CurrentAccount } from './current-account'
import { Edit } from './edit'
import { EditJourney } from './edit-journey'
import { Email } from './email'
import { EmailFilled } from './email-filled'
import { Error as ErrorIcon } from './error'
import { Facebook2 } from './facebook2'
import { FilledArrow } from './filled-arrow'
import { Filters } from './filters'
import { Four } from './four'
import { GasElectricity } from './gas-electricity'
import { HamburgerSimple } from './hamburger-simple'
import { HeartOutline } from './heart-outline'
import { Home } from './home'
import { House } from './house'
import { Info } from './info'
import { Information } from './information'
import { Investments } from './investments'
import { Letter } from './letter'
import { LinkedIn } from './linkedIn'
import { Loans } from './loans'
import { Location } from './location'
import { Magnifier } from './magnifier'
import { Minus } from './minus'
import { Mobile } from './mobile'
import { MoneyFilter } from './money-filter'
import { Mortgages } from './mortgages'
import { MortgagesOutline } from './mortgages-outline'
import { One } from './one'
import { OtherOutline } from './other-outline'
import { Person } from './person'
import { PersonCircle } from './person-circle'
import { Phone } from './phone'
import { PiggyBank } from './piggy-bank'
import { PiggyBankOutline } from './piggy-bank-outline'
import { Plus } from './plus'
import { PoundCircle } from './pound-circle'
import { ReceiptOutline } from './receipt-outline'
import { Twitter } from './twitter'
import { Question } from './question'
import { QuestionFilled } from './question-filled'
import { Smile } from './smile'
import { Sms } from './sms'
import { Sort } from './sort'
import { SortThin } from './sort-thin'
import { Three } from './three'
import { Tick } from './tick'
import { TravelMoney } from './travel-money'
import { Tv } from './tv'
import { Two } from './two'
import { ThumbUp } from './thumb-up'
import { ThumbDown } from './thumb-down'
import { StarFilled } from './star-filled'
import { StarOutlined } from './star-outlined'
import { StarHalfFilled } from './star-half-filled'
import { Van } from './van'
import { Warning } from './warning'
import { Facebook } from './facebook'
import { PhoneSimple } from './phone-simple'
import { PeopleBold } from './people-bold'
import { PersonBold } from './person-bold'
import { Pencil } from './pencil'

export type Glyph =
  | 'arrow'
  | 'arrow-circle'
  | 'banking'
  | 'bill'
  | 'book'
  | 'book-closed'
  | 'bookmark'
  | 'bookmark-filled'
  | 'bullet'
  | 'calendar'
  | 'car'
  | 'caret'
  | 'caretFinal'
  | 'car-insurance'
  | 'check'
  | 'clock'
  | 'close'
  | 'check-circle'
  | 'checkmark'
  | 'conversation'
  | 'credit-card'
  | 'credit-card-outline'
  | 'cross'
  | 'current-account'
  | 'edit'
  | 'email'
  | 'email-filled'
  | 'error'
  | 'facebook'
  | 'facebook2'
  | 'filled-arrow'
  | 'filters'
  | 'four'
  | 'gas-electricity'
  | 'hamburger-simple'
  | 'heart-outline'
  | 'home'
  | 'house'
  | 'info'
  | 'information'
  | 'investments'
  | 'letter'
  | 'linkedIn'
  | 'loans'
  | 'location'
  | 'magnifier'
  | 'minus'
  | 'mobile'
  | 'money-filter'
  | 'mortgages'
  | 'mortgages-outline'
  | 'one'
  | 'other-outline'
  | 'pencil'
  | 'person'
  | 'person-bold'
  | 'person-circle'
  | 'people-bold'
  | 'phone'
  | 'phone-simple'
  | 'piggy-bank'
  | 'piggy-bank-outline'
  | 'plus'
  | 'pound-circle'
  | 'receipt-outline'
  | 'question'
  | 'question-filled'
  | 'smile'
  | 'sms'
  | 'sort'
  | 'sort-thin'
  | 'three'
  | 'tick'
  | 'travel-money'
  | 'tv'
  | 'two'
  | 'thumb-up'
  | 'thumb-down'
  | 'twitter'
  | 'star-outlined'
  | 'star-filled'
  | 'star-half-filled'
  | 'van'
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
    case 'banking':
      return <Banking color={color} size={size} />
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
    case 'bullet':
      return <Bullet color={color} size={size} />
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
    case 'car-insurance':
      return <CarInsurance color={color} size={size} />
    case 'check':
      return <Check color={color} size={size} />
    case 'check-circle':
      return <CheckCircle color={color} size={size} />
    case 'clock':
      return <Clock color={color} size={size} />
    case 'close':
      return <Close color={color} size={size} />
    case 'checkmark':
      return <Checkmark color={color} size={size} />
    case 'conversation':
      return <Conversation color={color} size={size} />
    case 'credit-card':
      return <CreditCard color={color} size={size} />
    case 'credit-card-outline':
      return <CreditCardOutline color={color} size={size} />
    case 'cross':
      return <Cross color={color} size={size} />
    case 'current-account':
      return <CurrentAccount color={color} size={size} />
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
    case 'facebook2':
      return <Facebook2 color={color} size={size} />
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
    case 'heart-outline':
      return <HeartOutline color={color} size={size} />
    case 'home':
      return <Home color={color} size={size} />
    case 'house':
      return <House color={color} size={size} />
    case 'info':
      return <Info color={color} size={size} />
    case 'information':
      return <Information color={color} size={size} />
    case 'investments':
      return <Investments color={color} size={size} />
    case 'letter':
      return <Letter color={color} size={size} />
    case 'linkedIn':
      return <LinkedIn color={color} size={size} />
    case 'location':
      return <Location color={color} size={size} />
    case 'loans':
      return <Loans color={color} size={size} />
    case 'magnifier':
      return <Magnifier color={color} size={size} />
    case 'minus':
      return <Minus color={color} size={size} />
    case 'mobile':
      return <Mobile color={color} size={size} />
    case 'money-filter':
      return <MoneyFilter color={color} size={size} />
    case 'mortgages':
      return <Mortgages color={color} size={size} />
    case 'mortgages-outline':
      return <MortgagesOutline color={color} size={size} />
    case 'one':
      return <One color={color} size={size} />
    case 'other-outline':
      return <OtherOutline color={color} size={size} />
    case 'pencil':
      return <Pencil color={color} size={size} />
    case 'person':
      return <Person color={color} size={size} />
    case 'person-bold':
      return <PersonBold color={color} size={size} />
    case 'person-circle':
      return <PersonCircle color={color} size={size} />
    case 'people-bold':
      return <PeopleBold color={color} size={size} />
    case 'phone':
      return <Phone color={color} size={size} />
    case 'phone-simple':
      return <PhoneSimple color={color} size={size} />
    case 'piggy-bank':
      return <PiggyBank color={color} size={size} />
    case 'piggy-bank-outline':
      return <PiggyBankOutline color={color} size={size} />
    case 'plus':
      return <Plus color={color} size={size} />
    case 'pound-circle':
      return <PoundCircle color={color} size={size} />
    case 'receipt-outline':
      return <ReceiptOutline color={color} size={size} />
    case 'question':
      return <Question color={color} size={size} />
    case 'question-filled':
      return <QuestionFilled color={color} size={size} />
    case 'smile':
      return <Smile color={color} size={size} />
    case 'sms':
      return <Sms color={color} size={size} />
    case 'sort':
      return <Sort color={color} size={size} />
    case 'sort-thin':
      return <SortThin color={color} size={size} />
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
    case 'travel-money':
      return <TravelMoney color={color} size={size} />
    case 'twitter':
      return <Twitter color={color} size={size} />
    case 'star-filled':
      return <StarFilled color={color} size={size} />
    case 'star-outlined':
      return <StarOutlined color={color} size={size} />
    case 'star-half-filled':
      return <StarHalfFilled color={color} size={size} />
    case 'van':
      return <Van color={color} size={size} />
    case 'warning':
      return <Warning color={color} size={size} />

    // Temporary icons
    case 'edit-journey':
      return <EditJourney color={color} size={size} />

    default:
      return assertNever('glyph', glyph)
  }
}
