import { css } from '@emotion/core'

import { input, inputFontSize, inputLineHeight } from './typography'
import { azure, lightGreyBlue, tomato, white } from './colors'
import { insetBorder, pxToRem } from './utils'

export const inputInnerShadow = 'inset 0 2px 5px 0 rgba(0, 0, 0, 0.1)'

export const matchCircumstance = (hasError: boolean, hasFocus: boolean) => {
  if (hasError) return tomato
  if (hasFocus) return azure
}

export const emphasis = (hasError: boolean, hasFocus: boolean) => {
  const color = matchCircumstance(hasError, hasFocus)
  if (!color) return null
  return css({
    borderColor: color,
    boxShadow: insetBorder(color)
  })
}

export const keyboardInputContainer = (hasError: boolean, hasFocus: boolean) =>
  css([
    {
      boxShadow: inputInnerShadow,
      display: 'flex',
      position: 'relative',
      backgroundColor: white,
      border: `solid 1px ${lightGreyBlue}`,
      borderRadius: '3px',
      boxSizing: 'border-box'
    },
    emphasis(hasError, hasFocus)
  ])

const inputPadding = 16

export const keyboardInput = css([
  input,
  {
    appearance: 'none',
    border: 'none',
    background: 'none',
    borderRadius: '3px',
    boxSizing: 'border-box',
    display: 'flex',
    flex: 1,
    position: 'relative',
    verticalAlign: 'middle',
    padding: pxToRem(inputPadding),
    height: pxToRem(
      inputLineHeight * inputFontSize + inputPadding + inputPadding
    ),
    width: '100%'
  }
])
