import { css } from '@emotion/core'

import { battleshipGrey, black, cerulean, white } from './colors'
import { pxToRem } from './utils'

export const defaultFontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif'

export const heading2 = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(24),
  fontWeight: 600,
  lineHeight: '1.23',
  letterSpacing: 'normal',
  color: black
})

export const heading3 = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(18),
  fontWeight: 600,
  lineHeight: '1.28',
  letterSpacing: '-0.5px',
  color: black
})

export const label = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(17),
  fontWeight: 600,
  lineHeight: '1.33',
  letterSpacing: 'normal',
  color: black
})

export const subheading = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(17),
  fontWeight: 500,
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 1.33,
  letterSpacing: 'normal',
  color: battleshipGrey
})

export const inputFontSize = 17
export const inputLineHeight = 1.33

export const input = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(inputFontSize),
  fontWeight: 'normal',
  lineHeight: inputLineHeight,
  letterSpacing: 'normal',
  color: black
})

export const text = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(16),
  fontWeight: 'normal',
  lineHeight: '1.43',
  letterSpacing: 'normal',
  color: battleshipGrey
})

export const small = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(14),
  fontWeight: 'normal',
  lineHeight: '1.29',
  letterSpacing: 'normal',
  color: battleshipGrey
})

export const buttonText = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(16),
  fontWeight: 600,
  lineHeight: '1.43',
  letterSpacing: 'normal'
})

export const linkText = css({
  fontFamily: defaultFontFamily,
  color: cerulean,
  fontSize: pxToRem(16),
  fontWeight: 600,
  textDecoration: 'underline'
})

export const alertText = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(16),
  lineHeight: 1.38,
  letterSpacing: 'normal',
  color: white
})

export const noWrap = css({
  whiteSpace: 'nowrap'
})
