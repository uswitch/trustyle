/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'

export interface CellCtaProps extends React.HTMLAttributes<HTMLDivElement> {
  button: React.ReactNode
  linkButton?: React.ReactNode
}
const ProductTableCellCta: React.FC<CellCtaProps> = ({
  button,
  linkButton
}) => {
  const buttonWrapperStyling = {
    flex: [1, 'initial'],
    width: '100%',
    display: ['flex', 'block'],
    variant: 'productTable.cellCta.buttonWrapper'
  }
  return (
    <CellBase
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: ['row', 'column']
      }}
    >
      <div sx={{ ...buttonWrapperStyling }}>{button}</div>
      <div sx={{ ...buttonWrapperStyling }}>{linkButton}</div>
    </CellBase>
  )
}

export default ProductTableCellCta
