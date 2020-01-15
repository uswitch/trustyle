import { css, SerializedStyles } from '@emotion/core'
import {
  colors,
  inputs,
  pxToRem,
  spacers,
  typography
} from '@uswitch/trustyle.styles'

export const half: SerializedStyles = css({
  width: '50%'
})

export const full: SerializedStyles = css({
  width: '100%'
})

const affix: SerializedStyles = css([
  typography.input,
  {
    margin: pxToRem(8, 0),
    padding: pxToRem(8, spacers.green),
    textAlign: 'center',
    boxSizing: 'border-box'
  }
])

export const prefix = (
  hasError: boolean,
  hasFocus: boolean
): SerializedStyles =>
  css([
    affix,
    {
      color:
        inputs.matchCircumstance(hasError, hasFocus) || colors.lightGreyBlue,
      borderRight: `solid 1px ${inputs.matchCircumstance(hasError, hasFocus) ||
        colors.lightGrey}`
    }
  ])

export const suffix = (
  hasError: boolean,
  hasFocus: boolean
): SerializedStyles =>
  css([
    affix,
    {
      color:
        inputs.matchCircumstance(hasError, hasFocus) || colors.lightGreyBlue,
      borderLeft: `solid 1px ${inputs.matchCircumstance(hasError, hasFocus) ||
        colors.lightGrey}`
    }
  ])
