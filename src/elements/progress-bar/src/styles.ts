import { css } from '@emotion/core'
import { colors } from '@uswitch/trustyle.styles'

export const progress = css({
  display: 'block',
  height: '3px',
  width: '100%',

  /* Webkit */
  '&[value]::-webkit-progress-bar': {
    background: colors.veryLightBlue
  },
  '&[value]::-webkit-progress-value': {
    background: colors.azure,
    transition: 'width 1s ease'
  },

  /* Moz */
  background: colors.veryLightBlue,
  border: 'none',
  '&[value]::-moz-progress-bar': {
    background: colors.azure
  },

  /* IE */
  color: colors.azure
})
