/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { CellContext } from './row'
import { ROWS } from './cell-split'

const RateTableAddonFooter: React.FC<React.HTMLAttributes<any>> = ({
  children
}) => {
  const { gridColumnSpan } = React.useContext(CellContext)

  return (
    <CellContext.Provider
      value={{
        gridRowStart: ROWS + 5,
        gridRowSpan: 1,
        gridColumnStart: 1,
        gridColumnSpan,
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
