/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { AddonContext, CellContext, numberFormatter } from '../generics'

export interface DataRangeProps extends React.HTMLAttributes<HTMLDivElement> {
  from: number
  to: number
  unit: string
}
const ProductTableDataRange: React.FC<DataRangeProps> = ({
  from,
  to,
  unit
}) => {
  const { inSplit } = React.useContext(CellContext)
  const { inAddon } = React.useContext(AddonContext)

  const isRow = inSplit || inAddon

  return (
    <div>
      <span sx={{ fontSize: isRow ? '' : 'xxxl' }}>
        {numberFormatter(from, unit)}
      </span>{' '}
      to {numberFormatter(to, unit)}
    </div>
  )
}

export default ProductTableDataRange
