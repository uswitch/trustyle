import { colors, mq } from '@uswitch/trustyle.styles'
import { DynamicStyle } from 'facepaint'

export const progress: DynamicStyle[] = mq({
  display: 'block',
  height: ['3px', '7.4px'],
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
