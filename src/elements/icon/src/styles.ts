import { pxToRem } from '@uswitch/trustyle.styles'
import { ThemeUIStyleObject } from 'theme-ui'

import { Direction } from '.'

export const icon = { display: 'block' }

export const rotate = (direction: Direction): ThemeUIStyleObject => {
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

export const size = (size: number | undefined): ThemeUIStyleObject =>
  size
    ? {
        height: pxToRem(size),
        width: pxToRem(size)
      }
    : {}
