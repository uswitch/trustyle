/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { CardContext, forceMobile, numberFormatter } from '../generics'

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
  const { isCard } = React.useContext(CardContext)
  const forcedMobile = forceMobile(isCard)
  const boldNumber = isCard ? { fontWeight: '600', whiteSpace: 'nowrap' } : {}
  const removeBold = isCard ? { fontWeight: '400' } : {}
  return (
    <span sx={boldNumber}>
      {numberFormatter(value, unit)}
      {typeof value === 'number' && subscript ? (
        <span
          sx={{
            fontSize: (theme: any) =>
              forcedMobile(
                theme.compounds['product-table'].cellContent?.subscript
                  ?.fontSize || ['xs', 'md']
              ),
            ...removeBold
          }}
        >{`${subscript}`}</span>
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
