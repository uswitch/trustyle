import { colors, pxToRem, spacers } from '@uswitch/trustyle.styles'
import { SxStyleProp } from 'theme-ui'

const { blueGrey, tomato, UswitchNavy } = colors

export const container: SxStyleProp = {
  position: 'relative'
}

export const select = (hasError: boolean, hasFocus: boolean): SxStyleProp => ({
  fontFamily: 'base',
  fontSize: 'base',
  lineHeight: '1.33',
  color: 'text',
  appearance: 'none',
  backgroundColor: colors.white,
  boxShadow: (theme: any) =>
    hasError
      ? `inset 0 0 0 1px ${theme.elements?.['drop-down']?.errorColor ?? tomato}`
      : hasFocus
      ? `inset 0 0 0 1px ${theme.elements?.['drop-down']?.focusColor ??
          UswitchNavy}`
      : null,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: (theme: any) =>
    hasError
      ? theme.elements?.['drop-down']?.errorColor ?? tomato
      : hasFocus
      ? theme.elements?.['drop-down']?.focusColor ?? UswitchNavy
      : theme.elements?.['drop-down']?.defaultColor ?? blueGrey,
  borderRadius: '3px',
  boxSizing: 'border-box',
  outline: 'none', // remove Chrome mobile default focus
  padding: pxToRem(16, spacers.orange, 16, 16),
  verticalAlign: 'middle',
  width: '100%',
  '&:-moz-focusring': {
    color: 'transparent',
    textShadow: `0 0 0 ${colors.black}`
  },
  '&::-ms-expand': {
    display: 'none'
  }
})

export const icon: SxStyleProp = {
  height: '15px',
  width: '15px',
  pointerEvents: 'none',
  position: 'absolute',
  right: pxToRem(16),
  top: 'calc(50% - 15px / 2)'
}
