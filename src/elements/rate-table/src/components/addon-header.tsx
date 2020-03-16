/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { CellContext } from './row'

const RateTableAddonHeader: React.FC<React.HTMLAttributes<any>> = ({
  children
}) => {
  const { gridColumnSpan } = React.useContext(CellContext)

  return (
    <CellContext.Provider
      value={{
        gridColumnStart: gridColumnSpan - 1,
        gridColumnSpan: 2,
        gridRowStart: 2,
        gridRowSpan: 1,
        inAddon: 'header',
        extraRules: {
          marginTop: [0, -6],
          marginBottom: [0, 'sm']
        }
      }}
    >
      {children}
    </CellContext.Provider>
  )
}
export default RateTableAddonHeader
