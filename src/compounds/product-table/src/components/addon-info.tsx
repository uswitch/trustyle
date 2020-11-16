/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { Addon, AddonContext, CellContext } from '../generics'

import { ROWS } from './cell-split'

const ProductTableAddonInfo: Addon = {
  body: ({ children, split, headerImage }) => {
    const { gridColumnSpan } = React.useContext(CellContext)

    return (
      <AddonContext.Provider
        value={{
          inAddon: 'info',
          order: 99, // should appear above footer on mobile
          extraRules: {
            paddingTop: 'sm',
            marginTop: headerImage ? ['sm', 'md'] : 'xs',
            marginBottom: -6,
            fontSize: 'sm',
            variant: `compounds.product-table.${headerImage &&
              'variants.redesign.'}addonInfo.main`
          }
        }}
      >
        <CellContext.Provider
          value={{
            gridRowStart: ROWS + 5, // should appear above footer on desktop
            gridRowSpan: 1,
            gridColumnStart: 1,
            gridColumnSpan: split ? 2 : gridColumnSpan
          }}
        >
          {children}
        </CellContext.Provider>
      </AddonContext.Provider>
    )
  }
}

export default ProductTableAddonInfo
