/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'
import { CellContext } from './row'

export const RateTableCellPlaceholder: React.FC<React.HTMLAttributes<
  HTMLDivElement
>> = () => {
  const { inSplit, inAddon } = React.useContext(CellContext)
  return (
    <CellBase
      sx={{
        backgroundColor: inAddon
          ? 'rgba(91, 38, 255, 0.2)'
          : 'rgba(255, 51, 38, 0.2)',
        minHeight: inSplit || inAddon ? 0 : 150
      }}
      mobileOrder={inAddon ? 1 : 2}
    >
      Placeholder {inSplit ? 'column' : inAddon ? 'addon' : 'row'}
    </CellBase>
  )
}
export default RateTableCellPlaceholder
