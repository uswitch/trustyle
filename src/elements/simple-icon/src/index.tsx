/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

export type Glyph =
  | 'arrow'
  | 'arrow-circle'
  | 'bill'
  | 'book'
  | 'book-closed'
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

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  glyph: React.ReactNode
  color: string
  size?: number
}

const SimpleIcon: React.FC<Props> = ({ glyph }) => {
  return <div>{glyph}</div>
}

export default SimpleIcon
