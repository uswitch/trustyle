import { css } from '@emotion/core'
import { colors, helpers, pxToRem, typography } from '@uswitch/trustyle.styles'
import { JustifyContentProperty } from 'csstype'

import { Variant } from '.'

const focusBorder = {
  borderColor: colors.azure,
  boxShadow: helpers.insetBorder(colors.azure),
  outline: 0,
  '&::-moz-focus-inner': { border: 0 }
}

const primary = css({
  backgroundColor: colors.copper,
  color: colors.white,
  ':focus': focusBorder
})

const secondary = () =>
  css({
    backgroundColor: colors.lightSkyBlue,
    color: colors.cobaltBlue,
    textAlign: 'left',
    ':hover': {backgroundColor: colors.robinsEggBlue},
    ':focus': focusBorder
  })

const outline = () =>
  css({
    backgroundColor: colors.white,
    borderColor: colors.lightGreyBlue,
    ':hover, :focus': focusBorder
  })

const disabledStyle = css({
  cursor: 'not-allowed'
})

export const buttonLink = (
  variant: Variant,
  justifyContent: JustifyContentProperty = 'center'
) =>
  css([
    {
      /* cross-browser styling resets */
      backgroundImage: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'none',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',

      /* text */
      fontFamily: typography.defaultFontFamily,
      fontSize: pxToRem(16),
      fontWeight: 600,

      /* layout */
      boxSizing: 'border-box',
      alignItems: 'center',
      border: '1px solid transparent',
      borderRadius: '4px',
      display: 'flex',
      height: pxToRem(50),
      justifyContent,
      padding: pxToRem(15),
      width: '100%'
    },
    variant === 'primary' && primary,
    variant === 'secondary' && secondary(),
    variant === 'outline' && outline(),
  ])

export const text = css({
  flex: 1
})

export const arrow = css({
  width: 13,
  height: 12,
  alignSelf: 'center'
})
