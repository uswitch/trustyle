import { css } from '@emotion/core'
import {
  colors,
  helpers,
  pxToRem,
  spacers,
  typography
} from '@uswitch/trustyle.styles'

export const label = css({
  width: `calc(50% - ${pxToRem(4)})`,
  marginTop: pxToRem(4),
  marginBottom: pxToRem(4),
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

export const input = (type: 'radio' | 'checkbox') =>
  css({
    marginLeft: '-1000px',
    appearance: 'none',
    position: 'absolute',
    '&:checked + span': {
      borderColor: colors.azure,
      boxShadow: helpers.insetBorder(colors.azure),
      color: colors.black,
      '&::before': {
        backgroundImage:
          type === 'radio'
            ? undefined
            : `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="${colors.azure.replace(
                '#',
                '%23'
              )}" viewBox="-1 -2 14 12"><path d="M9.603 1L11 2.507 4.681 9 1 4.898l1.453-1.446L4.74 5.999z" /></svg>')`,
        backgroundColor: type === 'radio' ? colors.azure : colors.white,
        borderColor: colors.azure,
        boxShadow:
          type === 'radio' ? `inset 0 0 0 2px ${colors.white}` : undefined
      }
    },
    '&:focus': {
      outline: 0
    }
  })

export const container = (type: 'radio' | 'checkbox') =>
  css([
    typography.label,
    {
      borderColor: colors.lightGreyBlue,
      borderRadius: '3px',
      borderStyle: 'solid',
      borderWidth: '1px',
      boxSizing: 'border-box',
      color: colors.slateGrey,
      cursor: 'pointer',
      display: 'block',
      fontWeight: 'normal',
      minHeight: '130px',
      position: 'relative',
      width: '100%',
      '&:before': {
        borderColor: colors.lightGreyBlue,
        borderRadius: type === 'radio' ? '50%' : 4,
        borderStyle: 'solid',
        borderWidth: '2px',
        content: '" "',
        display: 'block',
        height: '17px',
        margin: pxToRem(11, 0, 0, 11),
        width: '17px'
      }
    }
  ])

export const content = css({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: pxToRem(spacers.pink),
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '& > *': {
    width: '100%'
  }
})

// Wrapper to prevent flexbox from stretching images with a percentage width
export const childrenWrapper = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& > *': {
    maxWidth: '80%'
  }
})
