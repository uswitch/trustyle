/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

export interface DataRangeProps extends React.HTMLAttributes<HTMLDivElement> {
  from: string
  to: string
}
const ProductTableDataRange: React.FC<DataRangeProps> = ({ from, to }) => (
  <div>
    <span sx={{ fontSize: 'xxxl' }}>{from}</span> to {to}
  </div>
)

export default ProductTableDataRange
