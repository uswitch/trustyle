import { css } from '@emotion/core'
import {
  colors,
  inputs,
  pxToRem,
  spacers,
  typography
} from '@uswitch/trustyle.styles'

export const icon = css({
  width: '15px',
  position: 'absolute',
  right: pxToRem(16),
  top: 'calc(50% - 15px / 2)'
})

export const root = (hasError: boolean, hasFocus: boolean) =>
  css([
    typography.input,
    {
      width: '100%',
      padding: pxToRem(16, spacers.orange, 16, 16),
      borderRadius: '3px',
      border: `solid 1px ${colors.lightGreyBlue}`,
      backgroundColor: colors.white,
      verticalAlign: 'middle',
      boxSizing: 'border-box',
      appearance: 'none'
    },
    inputs.emphasis(hasError, hasFocus)
  ])

export const container = css({
  position: 'relative'
})
