import { css, SerializedStyles } from '@emotion/core'

import { input, inputFontSize, inputLineHeight } from './typography'
import {
  azure,
  battleshipGrey,
  lightGreyBlue,
  tomato,
  veryLightGrey,
  white
} from './colors'
import { insetBorder, pxToRem } from './utils'

export const inputInnerShadow = 'inset 0 2px 5px 0 rgba(0, 0, 0, 0.1)'

export const matchCircumstance = (hasError: boolean, hasFocus: boolean) => {
  if (hasError) return tomato
  if (hasFocus) return azure
}

export const emphasis = (
  hasError: boolean,
  hasFocus: boolean
): SerializedStyles | null => {
  const color = matchCircumstance(hasError, hasFocus)
  if (!color) return null
  return css({
    borderColor: color,
    boxShadow: insetBorder(color)
  })
}

export const keyboardInputContainer = (
  hasError: boolean,
  hasFocus: boolean
): SerializedStyles =>
  css([
    {
      boxShadow: inputInnerShadow,
      backgroundColor: white,
      border: `solid 1px ${lightGreyBlue}`,
      borderRadius: '3px',
      boxSizing: 'border-box',
      display: 'flex',
      position: 'relative'
    },
    emphasis(hasError, hasFocus)
  ])

const inputPadding = 16

export const keyboardInput: SerializedStyles = css([
  input,
  {
    appearance: 'none',
    border: 'none',
    background: 'none',
    borderRadius: '3px',
    boxSizing: 'border-box',
    display: 'flex',
    flex: 1,
    height: pxToRem(
      inputLineHeight * inputFontSize + inputPadding + inputPadding
    ),
    padding: pxToRem(inputPadding),
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
])
