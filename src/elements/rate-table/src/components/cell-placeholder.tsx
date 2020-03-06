/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'
import { CellContext } from './row'

export const RateTableCellPlaceholder: React.FC<React.HTMLAttributes<
  HTMLDivElement
>> = () => {
  const { inSplit } = React.useContext(CellContext)
  return (
    <CellBase
      sx={{
        backgroundColor: 'rgba(255, 51, 38, 0.2)',
        minHeight: inSplit ? 0 : 150
      }}
    >
      Placeholder {inSplit ? 'column' : 'row'}
    </CellBase>
  )
}
export default RateTableCellPlaceholder
