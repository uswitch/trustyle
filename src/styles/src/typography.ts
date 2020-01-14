import { css, SerializedStyles } from '@emotion/core'

import { battleshipGrey, black, cerulean, white } from './colors'
import { pxToRem } from './utils'

export const defaultFontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif'

export const heading2: SerializedStyles = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(24),
  fontWeight: 600,
  lineHeight: '1.23',
  letterSpacing: 'normal',
  color: black
})

export const heading3: SerializedStyles = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(18),
  fontWeight: 600,
  lineHeight: '1.28',
  letterSpacing: '-0.5px',
  color: black
})

export const label: SerializedStyles = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(16),
  fontWeight: 600,
  lineHeight: '1.33',
  letterSpacing: 'normal',
  color: black
})

export const subheading: SerializedStyles = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(17),
  fontWeight: 500,
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 1.33,
  letterSpacing: 'normal',
  color: battleshipGrey
})

export const inputFontSize = 16
export const inputLineHeight = 1.33

export const input: SerializedStyles = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(inputFontSize),
  fontWeight: 'normal',
  lineHeight: inputLineHeight,
  letterSpacing: 'normal',
  color: black
})

export const text: SerializedStyles = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(16),
  fontWeight: 'normal',
  lineHeight: '1.43',
  letterSpacing: 'normal',
  color: battleshipGrey
})

export const small: SerializedStyles = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(14),
  fontWeight: 'normal',
  lineHeight: '1.29',
  letterSpacing: 'normal',
  color: battleshipGrey
})

export const linkText: SerializedStyles = css({
  fontFamily: defaultFontFamily,
  color: cerulean,
  fontSize: pxToRem(16),
  fontWeight: 600,
  textDecoration: 'underline'
})

export const alertText: SerializedStyles = css({
  fontFamily: defaultFontFamily,
  fontSize: pxToRem(16),
  lineHeight: 1.38,
  letterSpacing: 'normal',
  color: white
})

export const noWrap: SerializedStyles = css({
  whiteSpace: 'nowrap'
})
