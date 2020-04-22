/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { numberFormatter } from '../generics'

export interface DataValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number
  unit: string
  subscript: string
}
// This isn't complete yet
const ProductTableDataValue: React.FC<DataValueProps> = ({
  value,
  unit,
  subscript
}) => {
  return (
    <span>
      {numberFormatter(value, unit)}
      {subscript ? <small>{subscript}</small> : null}
    </span>
  )
}

export default ProductTableDataValue
