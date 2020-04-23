/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { AddonContext, CellContext } from '../generics'

import CellBase from './cell-base'

export const ProductTableCellPlaceholder: React.FC<React.HTMLAttributes<
  HTMLDivElement
>> = () => {
  const { inSplit } = React.useContext(CellContext)
  const { inAddon } = React.useContext(AddonContext)

  return (
    <CellBase
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: inAddon
          ? 'rgba(91, 38, 255, 0.2)'
          : 'rgba(255, 51, 38, 0.2)',
        minHeight: inSplit || inAddon ? 0 : 150
      }}
      mobileOrder={inAddon ? 0 : 2}
    >
      Placeholder {inSplit ? 'column' : inAddon ? 'addon' : 'row'}
    </CellBase>
  )
}
export default ProductTableCellPlaceholder
