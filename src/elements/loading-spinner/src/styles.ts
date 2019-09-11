import { css, keyframes } from '@emotion/core'
import { colors, pxToRem, spacers } from '@uswitch/trustyle.styles'

const load = keyframes`
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.173em -0.812em 0 -0.44em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.555em -0.617em 0 -0.44em, -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.645em -0.522em 0 -0.44em, -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.477em;
  }
`
const round = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const rotate = css({
  color: colors.azure,
  fontSize: pxToRem(spacers.orange),
  textIndent: '-9999rem',
  overflow: 'hidden',
  width: pxToRem(spacers.orange),
  height: pxToRem(spacers.orange),
  borderRadius: '50%',
  margin: `${pxToRem(72)} auto`,
  position: 'relative',
  transform: 'translateZ(0)',
  animation: `${load} 1.7s infinite ease, ${round} 1.7s infinite ease`,
})
