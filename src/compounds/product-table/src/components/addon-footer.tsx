/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { Addon, AddonContext, CellContext } from '../generics'

import { ROWS } from './cell-split'

const ProductTableAddonFooter: Addon = {
  body: ({ children, split }) => {
    const { gridColumnSpan } = React.useContext(CellContext)

    return (
      <AddonContext.Provider
        value={{
          inAddon: 'footer',
          order: 100,
          extraRules: {
            borderTop: split ? 'none' : '1px solid',
            paddingTop: 'sm',
            marginTop: 'xs',
            marginBottom: -6,
            variant: 'compounds.product-table.addonFooter.main'
          }
        }}
      >
        <CellContext.Provider
          value={{
            gridRowStart: ROWS + (split ? 5 : 6),
            gridRowSpan: 1,
            gridColumnStart: split ? 3 : 1,
            gridColumnSpan: split ? 2 : gridColumnSpan
          }}
        >
          {children}
        </CellContext.Provider>
      </AddonContext.Provider>
    )
  }
}

export default ProductTableAddonFooter
