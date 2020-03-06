/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'

export interface CellCtaProps extends React.HTMLAttributes<HTMLDivElement> {
  button: React.ReactNode
  link?: React.ReactNode
}
const RateTableCellCta: React.FC<CellCtaProps> = ({ button, link }) => {
  return (
    <CellBase sx={{ flexDirection: 'column' }}>
      {button}
      <div sx={{ marginTop: 'xs' }}>{link}</div>
    </CellBase>
  )
}

export default RateTableCellCta
