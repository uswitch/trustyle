import { css } from '@emotion/core'

import { azure } from '@uswitch/trustyle.styles/lib/colors'
import { text } from '@uswitch/trustyle.styles/lib/typography'
import { pxToRem, spacers } from '@uswitch/trustyle.styles/lib/helpers'

export const highlights = css({
  padding: pxToRem(0, spacers.green),
  listStyle: 'none'
})

export const highlightBulletContent = css({
  paddingLeft: pxToRem(spacers.green)
})

export const highlightBullet = css({
  backgroundColor: azure,
  width: pxToRem(28),
  height: pxToRem(28),
  padding: pxToRem(spacers.pink),
  boxSizing: 'border-box',
  borderRadius: '100%',
  display: 'inline-block',
  marginTop: pxToRem(5)
})

export const highlight = css([
  text,
  {
    paddingBottom: pxToRem(spacers.teal),
    display: 'flex'
  }
])
