import { css, SerializedStyles } from '@emotion/core'
import { colors, helpers, pxToRem, typography } from '@uswitch/trustyle.styles'

export const label: SerializedStyles = css({
  display: 'block'
})

export const input: SerializedStyles = css({
  marginLeft: '-9000px',
  appearance: 'none',
  position: 'absolute',
  '&:checked + span': {
    borderColor: colors.azure,
    boxShadow: helpers.insetBorder(colors.azure),
    color: colors.black,
    '&::before': {
      backgroundColor: colors.azure,
      borderColor: colors.azure,
      transition: 'background-color 200ms, border-color 200ms',
      boxShadow: `inset 0 0 0 2px ${colors.white}`
    }
  },
  '&:focus + span': {
    borderColor: colors.azure,
    boxShadow: helpers.insetBorder(colors.azure)
  }
})

export const span: SerializedStyles = css([
  typography.label,
  {
    alignItems: 'center',
    borderColor: colors.lightGreyBlue,
    borderRadius: '3px',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxSizing: 'border-box',
    color: colors.slateGrey,
    cursor: 'pointer',
    display: 'flex',
    fontWeight: 'normal',
    minHeight: '50px',
    padding: pxToRem(14, 12, 16, 0),
    width: '100%',
    '&:before': {
      borderColor: colors.lightGreyBlue,
      borderRadius: '50%',
      borderStyle: 'solid',
      borderWidth: '2px',
      content: '" "',
      display: 'block',
      height: '17px',
      marginLeft: pxToRem(16),
      marginRight: pxToRem(16),
      width: '17px',
      flexGrow: 0,
      flexShrink: 0
    }
  }
])
