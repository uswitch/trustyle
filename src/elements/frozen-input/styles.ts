import { css } from '@emotion/core'

import { pxToRem, spacers } from '../../styles/helpers'
import { black, offWhite, slateGrey } from '../../styles/colors'
import { small } from '../../styles/typography'

export const root = css([
  small,
  {
    alignItems: 'center',
    backgroundColor: offWhite,
    borderRadius: '3px',
    display: 'flex',
    height: pxToRem(64),
    justifyContent: 'space-between'
  }
])

const editIconWidth = pxToRem(spacers.teal * 2 + 21)

export const value = css({
  color: black,
  overflow: 'hidden',
  padding: pxToRem(0, spacers.teal),
  textOverflow: 'ellipsis',
  width: `calc(100% - ${editIconWidth})`
})

export const edit = css({
  background: 'none',
  border: 'none',
  borderLeft: `1px solid ${slateGrey}`,
  cursor: 'pointer',
  height: pxToRem(28),
  padding: pxToRem(0, spacers.teal),
  width: editIconWidth
})
