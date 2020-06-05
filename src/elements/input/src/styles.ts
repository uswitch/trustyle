import { colors, pxToRem, spacers } from '@uswitch/trustyle.styles'

import { SxStyleProp } from '../../../../types/theme-ui'

const { battleshipGrey, tomato, UswitchNavy, veryLightGrey, white } = colors

export const wrapper = (
  hasError: boolean,
  hasFocus: boolean,
  width: 'half' | 'full'
): SxStyleProp => ({
  boxShadow: (theme: any) =>
    hasError
      ? `inset 0 0 0 1px ${theme.elements?.input?.errorColor ?? tomato}`
      : hasFocus
      ? `inset 0 0 0 1px ${theme.elements?.input?.focusColor ?? UswitchNavy}`
      : 'inset 0 2px 5px 0 rgba(0, 0, 0, 0.1)',
  backgroundColor: white,
  border: `solid 1px`,
  borderColor: (theme: any) =>
    hasError
      ? theme.elements?.input?.errorColor ?? tomato
      : hasFocus
      ? theme.elements?.input?.focusColor ?? UswitchNavy
      : theme.elements?.input?.defaultColor ?? UswitchNavy,
  boxSizing: 'border-box',
  display: 'flex',
  position: 'relative',
  width: width === 'half' ? '50%' : '100%'
})

export const input: SxStyleProp = {
  fontFamily: 'base',
  fontSize: 'base',
  lineHeight: '1.33',
  color: 'text',

  appearance: 'none',
  border: 'none',
  background: 'none',
  boxSizing: 'border-box',
  display: 'flex',
  flex: 1,
  padding: (theme: any) => pxToRem(theme.space.base),
  position: 'relative',
  verticalAlign: 'middle',
  width: '100%',
  '&:focus': {
    outline: 'none'
  },
  '&:disabled': {
    outline: 'none',
    border: 'none',
    color: battleshipGrey,
    background: veryLightGrey
  }
}

const affix = (hasError: boolean, hasFocus: boolean): SxStyleProp => ({
  fontFamily: 'base',
  fontSize: 'base',
  lineHeight: 'base',
  margin: pxToRem(8, 0),
  padding: pxToRem(8, spacers.green),
  textAlign: 'center',
  boxSizing: 'border-box',
  borderColor: (theme: any) =>
    hasError
      ? theme.elements?.input?.errorColor ?? tomato
      : hasFocus
      ? theme.elements?.input?.focusColor ?? UswitchNavy
      : theme.elements?.input?.defaultColor ?? UswitchNavy,
  color: (theme: any) =>
    hasError
      ? theme.elements?.input?.errorColor ?? tomato
      : hasFocus
      ? theme.elements?.input?.focusColor ?? UswitchNavy
      : theme.elements?.input?.defaultColor ?? 'text'
})

export const prefix = (hasError: boolean, hasFocus: boolean): SxStyleProp => ({
  ...affix(hasError, hasFocus),
  borderRightStyle: 'solid',
  borderRightWidth: 1
})

export const suffix = (hasError: boolean, hasFocus: boolean): SxStyleProp => ({
  ...affix(hasError, hasFocus),
  borderLeftStyle: 'solid',
  borderLeftWidth: 1
})
