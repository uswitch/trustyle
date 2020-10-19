import { css, SerializedStyles } from '@emotion/core'
import { colors, pxToRem, spacers, typography } from '@uswitch/trustyle.styles'

export const root: SerializedStyles = css([
  typography.small,
  {
    alignItems: 'center',
    backgroundColor: colors.offWhite,
    display: 'flex',
    height: pxToRem(64),
    justifyContent: 'space-between'
  }
])

const editIconWidth = pxToRem(spacers.teal * 2 + 21)

export const value: SerializedStyles = css({
  color: colors.black,
  overflow: 'hidden',
  padding: pxToRem(0, spacers.teal),
  textOverflow: 'ellipsis',
  width: `calc(100% - ${editIconWidth})`
})
