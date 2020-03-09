/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'

export interface CellCtaProps extends React.HTMLAttributes<HTMLDivElement> {
  button: React.ReactNode
  linkButton?: React.ReactNode
}
const RateTableCellCta: React.FC<CellCtaProps> = ({ button, linkButton }) => {
  const buttonWrapperStyling = {
    flex: [1, 'initial'],
    width: '100%',
    display: ['flex', 'block'],
    variant: 'rateTable.cellCta.buttonWrapper'
  }
  return (
    <CellBase sx={{ flexDirection: ['row', 'column'] }}>
      <div sx={{ ...buttonWrapperStyling }}>{button}</div>
      <div sx={{ ...buttonWrapperStyling, marginTop: [0, 'xs'] }}>
        {linkButton}
      </div>
    </CellBase>
  )
}

export default RateTableCellCta
