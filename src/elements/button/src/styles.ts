import { css } from '@emotion/core'
import { colors, pxToRem, typography } from '@uswitch/trustyle.styles'
import { JustifyContentProperty } from 'csstype'

import { Variant } from '.'

const primary = css({
  backgroundColor: colors.copper,
  color: colors.white
})

const secondaryFocus = css({
  backgroundColor: colors.robinsEggBlue
})

const secondary = (disabled: boolean) =>
  css({
    backgroundColor: colors.lightSkyBlue,
    color: colors.cobaltBlue,
    textAlign: 'left',
    ':hover, :focus': disabled ? {} : secondaryFocus
  })

const disabledStyle = css({
  cursor: 'not-allowed'
})

export const button = (
  variant: Variant,
  disabled: boolean,
  justifyContent: JustifyContentProperty = 'center'
) =>
  css([
    typography.buttonText,
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
      justifyContent,
      padding: pxToRem(16),
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
