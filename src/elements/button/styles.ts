import { css } from '@emotion/core'

import {
  cobaltBlue,
  copper,
  lightSkyBlue,
  robinsEggBlue,
  white
} from '../../styles/colors'
import { buttonText } from '../../styles/typography'
import { pxToRem, spacers } from '../../styles/helpers'

import { Variant } from '.'

const primary = css({
  backgroundColor: copper,
  color: white,
  textAlign: 'center'
})

const secondaryFocus = css({
  backgroundColor: robinsEggBlue
})

const secondary = (disabled: boolean) =>
  css({
    backgroundColor: lightSkyBlue,
    color: cobaltBlue,
    textAlign: 'left',
    ':hover, :focus': disabled ? {} : secondaryFocus
  })

const disabledStyle = css({
  cursor: 'not-allowed'
})

export const button = (variant: Variant, disabled: boolean) =>
  css([
    buttonText,
    {
      /* cross-browser styling resets */
      backgroundImage: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'none',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',

      /* layout */
      border: 0,
      borderRadius: '4px',
      display: 'flex',
      padding: pxToRem(16, 16, 16, spacers.teal),
      width: '100%'
    },
    variant === 'primary' && primary,
    variant === 'secondary' && secondary(disabled),
    disabled && disabledStyle
  ])

export const text = css({
  flex: 1
})

export const arrow = css({
  width: 13,
  height: 12,
  alignSelf: 'center'
})
