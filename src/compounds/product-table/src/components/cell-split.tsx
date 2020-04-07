/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { CellContext } from '../generics'

// Needs to be the lowest common factor of all the split counts
export const ROWS = 6

export interface CellSplitProps extends React.HTMLAttributes<any> {
  // customRows allows us to override the default row span of split components
  customRows?: number[]
}

const ProductTableCellSplit: React.FC<CellSplitProps> = ({
  customRows = [],
  children
}) => {
  const { gridColumnStart, gridColumnSpan } = React.useContext(CellContext)

  const nonNullChildren = React.Children.toArray(children).filter(c => c)
  const rowsHeight = ROWS / nonNullChildren.length

  // Ensure customRows is valid before using
  const customRowsAvailable =
    customRows.length === nonNullChildren.length &&
    customRows.reduce((acc, curr) => acc + curr) === ROWS

  return (
    <React.Fragment>
      {
        nonNullChildren.reduce<{
          children: React.ReactElement[]
          rowStart: number
        }>(
          ({ children, rowStart }, child, index) => {
            const span = customRowsAvailable ? customRows[index] : rowsHeight
            return {
              children: children.concat(
                <CellContext.Provider
                  value={{
                    gridColumnStart,
                    gridColumnSpan,
                    gridRowStart: rowStart,
                    gridRowSpan: span,
                    firstInSplit: index === 0,
                    inSplit: true
                  }}
                  key={index}
                >
                  {child}
                </CellContext.Provider>
              ),
              rowStart: rowStart + span
            }
          },
          {
            children: [],
            rowStart: 4
          }
        ).children
      }
    </React.Fragment>
  )
}
export default ProductTableCellSplit
