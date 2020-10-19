/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'

export interface CellCtaProps extends React.HTMLAttributes<HTMLDivElement> {
  primary: React.ReactNode
  secondary?: React.ReactNode
  headerImage?: boolean
}
const ProductTableCellCta: React.FC<CellCtaProps> = ({
  primary,
  secondary,
  headerImage
}) => {
  const buttonWrapperStyling = {
    flex: [1, undefined, 'initial'],
    width: ['auto', '100%'],
    display: ['flex', undefined, 'block'],
    variant: headerImage
      ? 'compounds.product-table.variants.redesign.cellCta.buttonWrapper'
      : 'compounds.product-table.cellCta.buttonWrapper'
  }
  return (
    <CellBase
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: ['column', 'row', 'column']
      }}
    >
      <div sx={{ ...buttonWrapperStyling }}>{primary}</div>
      {secondary && <div sx={{ ...buttonWrapperStyling }}>{secondary}</div>}
    </CellBase>
  )
}

export default ProductTableCellCta
