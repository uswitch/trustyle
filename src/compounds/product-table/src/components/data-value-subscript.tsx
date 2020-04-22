/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { AddonContext, CellContext, numberFormatter } from '../generics'

export interface DataValueSubscriptProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  unit: string
  subscript: string
}
const ProductTableDataValueSubscript: React.FC<DataValueSubscriptProps> = ({
  value,
  unit,
  subscript
}) => {
  const { inSplit } = React.useContext(CellContext)
  const { inAddon } = React.useContext(AddonContext)

  const isRow = inSplit || inAddon

  return (
    <div>
      <span sx={{ fontSize: isRow ? '' : 'xxxl' }}>
        {numberFormatter(value, unit)}
      </span>
      {' ' + subscript}
    </div>
  )
}

export default ProductTableDataValueSubscript
