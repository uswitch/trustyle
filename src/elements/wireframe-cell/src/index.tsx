/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { wireFrameCellCss } from './wireframe-animation'

interface WireFrameCellProps extends React.HTMLAttributes<HTMLDivElement> {
  styles?: any
}

const WireFrameCell: React.FC<WireFrameCellProps> = ({ styles }) => (
  <span
    css={wireFrameCellCss}
    sx={{
      display: 'block',
      backgroundColor: 'grey-20',
      ...styles
    }}
  >
    <span
      className={'load'}
      sx={{
        width: '100%',
        height: '100%',
        display: 'block'
      }}
    ></span>
  </span>
)

export default WireFrameCell
