import { css } from '@emotion/core'

import { blueGrey, white } from '../../styles/colors'
import { text } from '../../styles/typography'
import { pxToRem, spacers } from '../../styles/helpers'

const iconWidth = 36
const mysteryColor = '#bbd1df'  // #bbd1df not in palette

export const highlights = css({
  padding: pxToRem(0, spacers.green, spacers.blue, spacers.green),
  listStyle: 'none',
  borderBottom: `1px solid ${blueGrey}`
})

export const highlightBulletContent = css({
  paddingLeft: pxToRem(spacers.green)
})

export const highlightBulletIconContainer = css({
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  padding: pxToRem(spacers.pink, 0),
  backgroundColor: white
})

export const highlightBullet = css({
  width: pxToRem(iconWidth),
  height: pxToRem(iconWidth)
})

export const highlight = css([
  text,
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

const timelineBorder = `2px solid ${blueGrey}`

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
