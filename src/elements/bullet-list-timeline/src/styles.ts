import { css, SerializedStyles } from '@emotion/core'
import { colors, pxToRem, spacers, typography } from '@uswitch/trustyle.styles'

const iconWidth = 36

export const highlights: SerializedStyles = css({
  padding: pxToRem(0, spacers.green, spacers.blue, spacers.green),
  listStyle: 'none',
  borderBottom: `1px solid ${colors.blueGrey}`
})

export const highlightBulletContent: SerializedStyles = css({
  paddingLeft: pxToRem(spacers.green)
})

export const highlightBulletIconContainer: SerializedStyles = css({
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  padding: pxToRem(spacers.pink, 0),
  backgroundColor: colors.white
})

export const highlightBullet: SerializedStyles = css({
  width: pxToRem(iconWidth),
  height: pxToRem(iconWidth)
})

export const highlight: SerializedStyles = css([
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

export const first: SerializedStyles = css({
  '&:before': {
    border: timelineBorder,
    top: '50%',
    bottom: 0
  }
})
export const middle: SerializedStyles = css({
  '&:before': {
    border: timelineBorder,
    top: 0,
    bottom: 0
  }
})
export const last: SerializedStyles = css({
  '&:before': {
    border: timelineBorder,
    top: 0,
    bottom: '50%'
  }
})
