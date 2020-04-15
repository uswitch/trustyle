/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { AddonContext, CellContext, numberFormatter } from '../generics'

export interface DataValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number
  unit: string
}
// This isn't complete yet
const ProductTableDataValue: React.FC<DataValueProps> = ({ value, unit }) => {
  const { inSplit } = React.useContext(CellContext)
  const { inAddon } = React.useContext(AddonContext)

  const isRow = inSplit || inAddon

  const baseStyles = {
    variant: 'productTable.dataValue.base'
  }
  const isRowStyles = {
    fontSize: 'xxxl',
    variant: 'productTable.dataValue.variants.isRow'
  }

  return (
    <span sx={isRow ? baseStyles : isRowStyles}>
      {numberFormatter(value, unit)}
    </span>
  )
}

export default ProductTableDataValue
