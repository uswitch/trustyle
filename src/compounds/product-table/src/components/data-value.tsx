/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

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
      <Styled.h2 as="span" sx={{ color: 'inherit' }}>
        {numberFormatter(value, unit)}
      </Styled.h2>
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
