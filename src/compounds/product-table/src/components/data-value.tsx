/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { numberFormatter } from '../generics'

export interface DataValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number | string
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
      {typeof value === 'number' && subscript ? (
        <small>{` ${subscript}`}</small>
      ) : null}
    </span>
  )
}

const PlainProductTableDataValue = (props: DataValueProps) => {
  const { value, unit, subscript } = props
  return [
    numberFormatter(value, unit),
    typeof value === 'number' && subscript ? subscript : null
  ]
    .filter((i: any) => !!i)
    .join(' ')
}

export default ProductTableDataValue
export const Rich = ProductTableDataValue
export const Plain = PlainProductTableDataValue
