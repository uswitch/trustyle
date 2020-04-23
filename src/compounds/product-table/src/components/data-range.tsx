/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { numberFormatter } from '../generics'

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
  return (
    <div>
      {numberFormatter(from, unit)}
      <small> to {numberFormatter(to, unit)}</small>
    </div>
  )
}

export default ProductTableDataRange
