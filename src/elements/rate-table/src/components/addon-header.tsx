/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { CellContext } from './row'

const RateTableAddonHeader: React.FC<React.HTMLAttributes<any>> = ({
  children
}) => {
  return (
    <CellContext.Provider
      value={{
        gridColumn: '3 / span 2',
        gridRow: '1 / span 1',
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
