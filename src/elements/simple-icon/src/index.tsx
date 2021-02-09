/** @jsx jsx */

import React, { useContext } from 'react'
import { jsx } from 'theme-ui'

import { IconContext } from './context'
import * as st from './styles'

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
  | 'checkmark'
  | 'clock'
  | 'close'
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
  | 'star-filled'
  | 'star-half-filled'
  | 'star-outlined'
  | 'three'
  | 'thumb-down'
  | 'thumb-up'
  | 'tick'
  | 'tv'
  | 'twitter'
  | 'two'
  | 'warning'
  // temporary icons
  | 'edit-journey'

export type Direction = 'up' | 'down' | 'left' | 'right'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  glyph: Glyph
  color: string
  size?: number
  direction?: Direction
}

const SimpleIcon: React.FC<Props> = ({
  glyph,
  color,
  size,
  direction = 'up'
}) => {
  const context = useContext(IconContext)

  const styles = {
    fill: color,
    stroke: color,
    ...st.iconSize(size),
    ...st.rotate(direction)
  }

  return (
    <svg sx={styles}>
      <use xlinkHref={`${context.iconPath}${glyph}.svg#${glyph}`} />
    </svg>
  )
}

export default SimpleIcon
