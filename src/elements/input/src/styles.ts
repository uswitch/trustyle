import { colors, pxToRem } from '@uswitch/trustyle.styles'

import { SxStyleProp } from '../../../../types/theme-ui'

const { tomato, UswitchNavy, white } = colors

export const wrapper = (
  hasError: boolean,
  hasFocus: boolean,
  width: 'half' | 'full'
): SxStyleProp => ({
  boxShadow: (theme: any) =>
    hasError
      ? `inset 0 0 0 1px ${theme.colors[theme.input?.error?.color] ?? tomato}`
      : hasFocus
      ? `inset 0 0 0 1px ${theme.colors[theme.input?.focus?.color] ??
          UswitchNavy}`
      : 'inset 0 2px 5px 0 rgba(0, 0, 0, 0.1)',
  backgroundColor: white,
  border: `solid 1px`,
  borderColor: (theme: any) =>
    hasError
      ? theme.colors[theme.input?.error?.color] ?? tomato
      : hasFocus
      ? theme.colors[theme.input?.focus?.color] ?? UswitchNavy
      : theme.colors[theme.input?.default?.color] ?? UswitchNavy,
  boxSizing: 'border-box',
  display: 'flex',
  position: 'relative',
  width: width === 'half' ? '50%' : '100%'
})

const affix = (hasError: boolean, hasFocus: boolean): SxStyleProp => ({
  alignItems: 'center',
  display: 'flex',
  fontFamily: 'base',
  fontSize: 'base',
  lineHeight: 'base',
  margin: pxToRem(8, 0),
  padding: pxToRem(0, 12),
  textAlign: 'center',
  boxSizing: 'border-box',
  borderColor: (theme: any) =>
    hasError
      ? theme.colors[theme.input?.error?.color] ?? tomato
      : hasFocus
      ? theme.colors[theme.input?.focus?.color] ?? UswitchNavy
      : theme.colors[theme.input?.default?.color] ?? UswitchNavy,
  color: (theme: any) =>
    hasError
      ? theme.colors[theme.input?.error?.color] ?? tomato
      : hasFocus
      ? theme.colors[theme.input?.focus?.color] ?? UswitchNavy
      : theme.colors[theme.input?.default?.color] ?? 'text'
})

export const prefix = (hasError: boolean, hasFocus: boolean): SxStyleProp => ({
  ...affix(hasError, hasFocus)
})

export const suffix = (hasError: boolean, hasFocus: boolean): SxStyleProp => ({
  ...affix(hasError, hasFocus)
})
