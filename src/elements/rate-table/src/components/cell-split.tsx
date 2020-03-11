/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { CellContext } from './row'

// Needs to be the lowest common factor of all the split counts
export const ROWS = 6

const RateTableCellSplit: React.FC<React.HTMLAttributes<any>> = ({
  children
}) => {
  const { gridColumn } = React.useContext(CellContext)

  const nonNullChildren = React.Children.toArray(children).filter(c => c)
  const rowsHeight = ROWS / nonNullChildren.length
  return (
    <React.Fragment>
      {nonNullChildren.map((child, index) => (
        <CellContext.Provider
          value={{
            gridColumn,
            gridRow: `${4 + index * rowsHeight} / span ${rowsHeight}`,
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
export default RateTableCellSplit
