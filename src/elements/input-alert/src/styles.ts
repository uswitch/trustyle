import { css } from '@emotion/core'
import { colors, pxToRem, spacers, typography } from '@uswitch/trustyle.styles'

const arrowSize = 8

export const root = css([
  typography.alertText,
  {
    padding: spacers.green,
    marginTop: `calc(${arrowSize}px + ${pxToRem(spacers.green)})`,
    position: 'relative',
    borderRadius: 3,

    '&:before': {
      position: 'absolute',
      content: "''",
      top: -arrowSize,
      width: 0,
      height: 0,
      borderLeft: `${arrowSize}px solid transparent`,
      borderRight: `${arrowSize}px solid transparent`,
      borderBottom: `${arrowSize}px solid black`
    }
  }
])

export const notification = css({
  backgroundColor: colors.battleshipGrey,
  '&:before': {
    borderBottomColor: colors.battleshipGrey
  }
})

export const alert = css({
  backgroundColor: colors.tomato,
  '&:before': {
    borderBottomColor: colors.tomato
  }
})
