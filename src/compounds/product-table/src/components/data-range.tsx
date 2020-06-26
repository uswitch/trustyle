/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

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
      <Styled.h2 as="span" sx={{ color: 'inherit' }}>
        {numberFormatter(from, unit)}
      </Styled.h2>
      <small> to {numberFormatter(to, unit)}</small>
    </div>
  )
}

const PlainProductTableDataRange = (props: DataRangeProps) => {
  const { from, to, unit } = props
  return `${numberFormatter(from, unit)} to ${numberFormatter(to, unit)}`
}

export default ProductTableDataRange
export const Rich = ProductTableDataRange
export const Plain = PlainProductTableDataRange
