/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'
import { CellContext } from './row'

export interface CellPrimaryProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  primary?: boolean
}
const RateTableCellPrimary: React.FC<CellPrimaryProps> = ({
  label,
  primary = false,
  children
}) => {
  const { inSplit, inAddon } = React.useContext(CellContext)

  const isRow = inSplit || inAddon

  return (
    <CellBase
      mobileOrder={primary ? 1 : 2}
      sx={{
        flexDirection: isRow ? 'row' : 'column-reverse',
        alignItems: isRow ? 'center' : 'start',
        padding: primary && !isRow ? 'sm' : '',
        variant: primary
          ? 'rateTable.cellContent.main.variants.primary'
          : 'rateTable.cellContent.main.base'
      }}
    >
      <div
        sx={{
          flex: isRow ? 1 : 0,
          fontSize: 'xs',
          marginTop: isRow ? '' : 'sm',
          variant: 'rateTable.cellContent.label'
        }}
      >
        {label}
      </div>
      <div sx={{ flex: 1 }}>{children}</div>
    </CellBase>
  )
}

export default RateTableCellPrimary
