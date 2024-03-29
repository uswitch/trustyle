/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'

export const ProductTableHeaderImage: React.FC = ({ children }) => (
  <CellBase
    mobileOrder={0}
    sx={{
      display: ['none', 'flex'],
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: -8,
      variant: 'compounds.product-table.headerImage'
    }}
  >
    <div
      sx={{
        position: 'relative' as const,
        height: '100%',
        width: '100%',
        marginBottom: -6,
        img: {
          maxHeight: 67,
          maxWidth: [121, 174],
          margin: 'auto',
          objectFit: 'contain' as const
        }
      }}
    >
      {children}
    </div>
  </CellBase>
)
export default ProductTableHeaderImage
