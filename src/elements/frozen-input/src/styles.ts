import { css, SerializedStyles } from '@emotion/core'
import { colors, pxToRem, spacers, typography } from '@uswitch/trustyle.styles'

export const root: SerializedStyles = css([
  typography.small,
  {
    alignItems: 'center',
    backgroundColor: colors.offWhite,
    borderRadius: '3px',
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

export const edit: SerializedStyles = css({
  background: 'none',
  border: 'none',
  borderLeft: `1px solid ${colors.slateGrey}`,
  cursor: 'pointer',
  height: pxToRem(28),
  padding: pxToRem(0, spacers.teal),
  width: editIconWidth,
  ':focus': {
    outline: `2px solid ${colors.azure}`
  },
  '&::-moz-focus-inner': { border: 0 }
})

export const hidden: SerializedStyles = css({
  display: 'none'
})
