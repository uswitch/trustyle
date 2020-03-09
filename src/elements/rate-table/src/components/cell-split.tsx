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

  const childrenCount = React.Children.count(children)
  const rowsHeight = ROWS / childrenCount
  return (
    <React.Fragment>
      {React.Children.map(children, (child, index) => (
        <CellContext.Provider
          value={{
            gridColumn,
            gridRow: `${1 + index * rowsHeight} / span ${rowsHeight}`,
            firstInSplit: index === 0,
            inSplit: true
          }}
        >
          {child}
        </CellContext.Provider>
      ))}
    </React.Fragment>
  )
}
export default RateTableCellSplit
