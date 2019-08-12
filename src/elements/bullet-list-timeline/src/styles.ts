import { css } from '@emotion/core'
import { colors, pxToRem, spacers, typography } from '@uswitch/trustyle.styles'

const iconWidth = 36

export const highlights = css({
  padding: pxToRem(0, spacers.green, spacers.blue, spacers.green),
  listStyle: 'none',
  borderBottom: `1px solid ${colors.blueGrey}`
})

export const highlightBulletContent = css({
  paddingLeft: pxToRem(spacers.green)
})

export const highlightBulletIconContainer = css({
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  padding: pxToRem(spacers.pink, 0),
  backgroundColor: colors.white
})

export const highlightBullet = css({
  width: pxToRem(iconWidth),
  height: pxToRem(iconWidth)
})

export const highlight = css([
  typography.text,
  {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: pxToRem(spacers.teal),
    position: 'relative',
    '&:before': {
      display: 'block',
      content: "''",
      position: 'absolute',
      'z-index': '-10',
      left: pxToRem(iconWidth / 2 - 1)
    }
  }
])

const timelineBorder = `2px solid ${colors.blueGrey}`

export const first = css({
  '&:before': {
    border: timelineBorder,
    top: '50%',
    bottom: 0
  }
})
export const middle = css({
  '&:before': {
    border: timelineBorder,
    top: 0,
    bottom: 0
  }
})
export const last = css({
  '&:before': {
    border: timelineBorder,
    top: 0,
    bottom: '50%'
  }
})
