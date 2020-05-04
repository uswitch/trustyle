/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'

export const ProductTableCellImage: React.FC = ({ children }) => (
  <CellBase
    mobileOrder={0}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      img: {
        maxHeight: 'icon.xxl',
        height: '100%',
        maxWidth: '100%',
        width: 'auto',
        objectFit: 'contain'
      },
      variant: 'productTable.cellImage.main'
    }}
  >
    {children}
  </CellBase>
)
export default ProductTableCellImage
