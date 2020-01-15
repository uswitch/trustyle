import { css, SerializedStyles } from '@emotion/core'
import { pxToRem } from '@uswitch/trustyle.styles'

import { Direction } from '.'

export const icon: SerializedStyles = css({
  display: 'block'
})

export const rotate = (direction: Direction): SerializedStyles => {
  switch (direction) {
    case 'right':
      return css({ transform: 'rotate(0.25turn)' })
    case 'down':
      return css({ transform: 'rotate(0.5turn)' })
    case 'left':
      return css({ transform: 'rotate(0.75turn)' })
    default:
      return css({})
  }
}

export const size = (size: number | undefined): SerializedStyles =>
  size
    ? css({
        height: pxToRem(size),
        width: pxToRem(size)
      })
    : css({})
