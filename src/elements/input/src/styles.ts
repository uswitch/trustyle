import { colors, pxToRem } from '@uswitch/trustyle.styles'

import { SxStyleProp } from '../../../../types/theme-ui'

const { tomato, UswitchNavy } = colors

const boxShadow = (theme: any, hasError: boolean, hasFocus: boolean) => {
  if (hasError) {
    return (
      theme.elements.input?.error?.boxShadow ||
      `inset 0 0 0 1px
     ${theme.colors[theme.elements.input?.error?.color] ?? tomato}`
    )
  } else if (hasFocus) {
    return (
      theme.elements.input?.focus?.boxShadow ||
      `inset 0 0 0 1px ${theme.colors[theme.elements.input?.focus?.color] ??
        UswitchNavy}`
    )
  } else {
    return (
      theme.elements.input?.boxShadow || 'inset 0 2px 5px 0 rgba(0, 0, 0, 0.1)'
    )
  }
}

export const wrapper = (
  hasError: boolean,
  hasFocus: boolean,
  width: 'half' | 'full'
): SxStyleProp => ({
  border: 'solid 1px',
  boxShadow: (theme: any) => boxShadow(theme, hasError, hasFocus),
  borderColor: (theme: any) =>
    hasError
      ? theme.colors[theme.elements.input?.error?.color] ?? tomato
      : hasFocus
      ? theme.colors[theme.elements.input?.focus?.color] ?? UswitchNavy
      : theme.colors[theme.elements.input?.default?.color] ?? UswitchNavy,
  width: width === 'half' ? '50%' : '100%'
})

const affix = (hasError: boolean, hasFocus: boolean): SxStyleProp => ({
  margin: pxToRem(8, 0),
  padding: pxToRem(0, 12),
  borderColor: (theme: any) =>
    hasError
      ? theme.colors[theme.elements.input?.error?.color] ?? tomato
      : hasFocus
      ? theme.colors[theme.elements.input?.focus?.color] ?? UswitchNavy
      : theme.colors[theme.elements.input?.default?.color] ?? UswitchNavy,
  color: (theme: any) =>
    hasError
      ? theme.colors[theme.elements.input?.error?.color] ?? tomato
      : hasFocus
      ? theme.colors[theme.elements.input?.focus?.color] ?? UswitchNavy
      : theme.colors[theme.elements.input?.default?.color] ?? 'text'
})

export const prefix = (hasError: boolean, hasFocus: boolean): SxStyleProp => ({
  ...affix(hasError, hasFocus)
})

export const suffix = (hasError: boolean, hasFocus: boolean): SxStyleProp => ({
  ...affix(hasError, hasFocus)
})
