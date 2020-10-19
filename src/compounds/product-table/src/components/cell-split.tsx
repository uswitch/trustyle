/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { CellContext } from '../generics'

import ProductTableCellSecondary from './cell-secondary'

// Needs to be the lowest common factor of all the split counts
export const ROWS = 6

const ProductTableCellSplit: React.FC<React.HTMLAttributes<any>> = ({
  children
}) => {
  const { gridColumnStart, gridColumnSpan } = React.useContext(CellContext)

  const nonNullChildren = React.Children.toArray(children).filter(c => c)
  const rowsHeight = ROWS / nonNullChildren.length
  if (nonNullChildren.length === 1) {
    return (
      <React.Fragment>
        {nonNullChildren.map((child, _index) => {
          return (
            React.isValidElement(child) && (
              <ProductTableCellSecondary {...child.props} />
            )
          )
        })}
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        {nonNullChildren.map((child, index) => {
          return (
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
          )
        })}
      </React.Fragment>
    )
  }
}
export default ProductTableCellSplit
