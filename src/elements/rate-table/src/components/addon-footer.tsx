/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { CellContext } from './row'

const RateTableAddonFooter: React.FC<React.HTMLAttributes<any>> = ({
  children
}) => {
  return (
    <CellContext.Provider
      value={{
        gridRow: '-3 / span 1',
        gridColumn: '1 / -1',
        inAddon: 'footer',
        extraRules: {
          borderTop: '1px solid',
          paddingTop: 'sm',
          marginTop: 'xs',
          marginBottom: -6,
          variant: 'rateTable.addonFooter.main'
        }
      }}
    >
      {children}
    </CellContext.Provider>
  )
}
export default RateTableAddonFooter
