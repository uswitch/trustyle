import { pxToRem } from '@uswitch/trustyle.styles'
import { SxStyleProp } from 'theme-ui'

import { Direction } from '.'

export const icon = { display: 'block' }

export const rotate = (direction: Direction): SxStyleProp => {
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

export const size = (size: number | undefined): SxStyleProp =>
  size
    ? {
        height: pxToRem(size),
        width: pxToRem(size)
      }
    : {}
