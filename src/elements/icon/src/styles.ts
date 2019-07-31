import { css } from '@emotion/core'

import { Direction } from '.'

export const icon = css({
  display: 'block'
})

export const rotate = (direction: Direction) => {
  switch (direction) {
    case 'right':
      return css({ transform: 'rotate(0.25turn)' })
    case 'down':
      return css({ transform: 'rotate(0.5turn)' })
    case 'left':
      return css({ transform: 'rotate(0.75turn)' })
    default:
      return {}
  }
}
