/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { Addon, AddonContext, CellContext } from '../generics'

import { ROWS } from './cell-split'

const ProductTableAddonFooter: Addon = {
  body: ({ children }) => {
    const { gridColumnSpan } = React.useContext(CellContext)

    return (
      <AddonContext.Provider
        value={{
          inAddon: 'footer',
          order: 100,
          extraRules: {
            borderTop: '1px solid',
            paddingTop: 'sm',
            marginTop: 'xs',
            marginBottom: -6,
            variant: 'compounds.product-table.addonFooter.main'
          }
        }}
      >
        <CellContext.Provider
          value={{
            gridRowStart: ROWS + 6,
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

export default ProductTableAddonFooter
