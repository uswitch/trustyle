import { css, keyframes } from '@emotion/core'
import { colors, pxToRem, spacers } from '@uswitch/trustyle.styles'

const spin = keyframes({
  to: {
    transform: 'rotate(360deg)'
  }
})

export const rotate = css({
  animation: `${spin} 1s linear infinite`,
  border: `3px solid ${colors.veryLightBlue}`,
  borderTopColor: colors.azure,
  borderRadius: '50%',
  width: pxToRem(spacers.orange),
  height: pxToRem(spacers.orange)
})
