/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'

export interface CellCtaProps extends React.HTMLAttributes<HTMLDivElement> {
  primary: React.ReactNode
  secondary?: React.ReactNode
  customSize?: string
}
const ProductTableCellCta: React.FC<CellCtaProps> = ({
  primary,
  secondary,
  customSize
}) => {
  const buttonWrapperStyling = {
    flex: [1, undefined, 'initial'],
    width: '100%',
    display: ['flex', undefined, 'block'],
    variant: 'productTable.cellCta.buttonWrapper'
  }
  return (
    <CellBase
      customSize={customSize}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: ['row', undefined, 'column']
      }}
    >
      <div sx={{ ...buttonWrapperStyling }}>{primary}</div>
      {secondary && <div sx={{ ...buttonWrapperStyling }}>{secondary}</div>}
    </CellBase>
  )
}

export default ProductTableCellCta
