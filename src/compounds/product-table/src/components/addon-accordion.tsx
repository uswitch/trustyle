import * as React from 'react'

import { Addon, AddonContext, CellContext } from '../generics'

import { ROWS } from './cell-split'

export interface AddonAccordionProps extends React.HTMLAttributes<any> {
  schema?: string
}

const ProductTableAddonAccordion: Addon = {
  body: ({ children }) => {
    const { gridColumnSpan } = React.useContext(CellContext)

    return (
      <AddonContext.Provider
        value={{
          inAddon: 'accordion',
          order: 100,
          extraRules: {
            borderTop: '1px solid',
            paddingTop: 'sm',
            marginTop: 'xs',
            marginBottom: -6,
            variant: 'compounds.product-table.accordion.main'
          }
        }}
      >
        <CellContext.Provider
          value={{
            gridRowStart: ROWS + 7,
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

export default ProductTableAddonAccordion
