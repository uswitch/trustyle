/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { Addon, AddonContext, CellContext } from '../generics'

import { ROWS } from './cell-split'

const RateTableAddonFooter: Addon = {
  body: ({ children }) => {
    const { gridColumnSpan } = React.useContext(CellContext)

    return (
      <AddonContext.Provider
        value={{
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
        <CellContext.Provider
          value={{
            gridRowStart: ROWS + 5,
            gridRowSpan: 1,
            gridColumnStart: 1,
            gridColumnSpan
          }}
        >
          {children}
        </CellContext.Provider>
      </AddonContext.Provider>
    )
  }
}

export default RateTableAddonFooter
