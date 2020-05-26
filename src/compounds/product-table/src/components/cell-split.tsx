/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { CellContext } from '../generics'

// Needs to be the lowest common factor of all the split counts
export const ROWS = 6

export interface ProductTableCellSplitProps extends React.HTMLAttributes<any> {
  customSize: string
}

const ProductTableCellSplit: React.FC<ProductTableCellSplitProps> = ({
  customSize,
  children
}) => {
  const { gridColumnStart, gridColumnSpan, setSize } = React.useContext(
    CellContext
  )

  if (setSize && customSize) {
    setSize(customSize)
  }

  const nonNullChildren = React.Children.toArray(children).filter(c => c)
  const rowsHeight = ROWS / nonNullChildren.length
  return (
    <React.Fragment>
      {nonNullChildren.map((child, index) => (
        <CellContext.Provider
          value={{
            gridColumnStart,
            gridColumnSpan,
            gridRowStart: 4 + index * rowsHeight,
            gridRowSpan: rowsHeight,
            firstInSplit: index === 0,
            inSplit: true
          }}
          key={index}
        >
          {child}
        </CellContext.Provider>
      ))}
    </React.Fragment>
  )
}
export default ProductTableCellSplit
