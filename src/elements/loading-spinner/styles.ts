import { css, keyframes } from '@emotion/core'

import { azure, veryLightBlue } from '../../styles/colors'
import { pxToRem, spacers } from '../../styles/helpers'

const spin = keyframes({
  to: {
    transform: 'rotate(360deg)'
  }
})

export const rotate = css({
  animation: `${spin} 1s linear infinite`,
  border: `3px solid ${veryLightBlue}`,
  borderTopColor: azure,
  borderRadius: '50%',
  width: pxToRem(spacers.orange),
  height: pxToRem(spacers.orange)
})
