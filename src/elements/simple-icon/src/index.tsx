/** @jsx jsx */

import React, { useContext } from 'react'
import { jsx, SxStyleProp } from 'theme-ui'
import { pxToRem } from '@uswitch/trustyle.styles'

import { IconContext } from './context'

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

const iconSize = (size: number | undefined): SxStyleProp =>
  size
    ? {
        height: pxToRem(size),
        width: pxToRem(size)
      }
    : {}

const rotate = (direction: Direction): SxStyleProp => {
  switch (direction) {
    case 'right':
      return { transform: 'rotate(0.25turn)' }
    case 'down':
      return { transform: 'rotate(0.5turn)' }
    case 'left':
      return { transform: 'rotate(0.75turn)' }
    default:
      return {}
  }
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
    ...iconSize(size),
    ...rotate(direction)
  }

  return (
    <svg sx={styles}>
      <use xlinkHref={`${context.iconPath}${glyph}.svg#${glyph}`} />
    </svg>
  )
}

export default SimpleIcon
