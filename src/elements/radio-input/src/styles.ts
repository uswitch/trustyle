import { css } from '@emotion/core'
import { colors, helpers, pxToRem, typography } from '@uswitch/trustyle.styles'

export const label = css({
  marginTop: pxToRem(4),
  marginBottom: pxToRem(4)
})

export const half = css({
  width: `calc(50% - ${pxToRem(4)})`,
  '&:nth-of-type(1), &:nth-of-type(2)': {
    marginTop: 0
  },
  '&:nth-last-of-type(1), &:nth-last-of-type(2)': {
    marginBottom: 0
  },
  '&:nth-of-type(odd)': {
    marginRight: pxToRem(4)
  },
  '&:nth-of-type(even)': {
    marginLeft: pxToRem(4)
  }
})

export const full = css({
  width: '100%',
  '&:nth-of-type(1)': {
    marginTop: 0
  },
  '&:nth-last-of-type(1)': {
    marginBottom: 0
  }
})

export const input = css({
  marginLeft: '-1000px',
  appearance: 'none',
  position: 'absolute',
  '&:checked + span': {
    borderColor: colors.azure,
    boxShadow: helpers.insetBorder(colors.azure),
    color: colors.black,
    '&::before': {
      backgroundColor: colors.azure,
      borderColor: colors.azure,
      transition: 'background-color 200ms, border-color 200ms'
    }
  },
  '&:focus + span': {
    borderColor: colors.azure,
    boxShadow: helpers.insetBorder(colors.azure)
  }
})

export const span = css([
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
    width: '100%',
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="-1 -2 14 12"><path d="M9.603 1L11 2.507 4.681 9 1 4.898l1.453-1.446L4.74 5.999z" /></svg>')`,
      borderColor: colors.lightGreyBlue,
      borderRadius: '50%',
      borderStyle: 'solid',
      borderWidth: '2px',
      content: '" "',
      display: 'block',
      height: '17px',
      marginLeft: pxToRem(16),
      marginRight: pxToRem(16),
      width: '17px'
    }
  }
])
