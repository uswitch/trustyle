/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  headerImage?: boolean
}

export const ProductTableCellImage: React.FC<Props> = (
  { children },
  headerImage
) => (
  <CellBase
    mobileOrder={!headerImage ? 0 : 2}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      variant: `compounds.product-table.${'variants.redesign.'}cellImage.main`
    }}
  >
    <div
      sx={{
        position: 'relative',
        height: '100%',
        width: '100%',
        minHeight: 75,
        minWidth: 100,
        img: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          maxWidth: '100%',
          maxHeight: '100%',
          margin: 'auto',
          objectFit: 'contain'
        }
      }}
    >
      {children}
    </div>
  </CellBase>
)
export default ProductTableCellImage
