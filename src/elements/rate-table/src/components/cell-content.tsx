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
  const { inSplit } = React.useContext(CellContext)

  return (
    <CellBase
      mobileOrder={primary ? 1 : 2}
      sx={{
        flexDirection: inSplit ? 'row' : 'column-reverse',
        alignItems: inSplit ? 'center' : 'start',
        padding: primary && !inSplit ? 'sm' : '',
        variant: primary
          ? 'rateTable.cellContent.main.variants.primary'
          : 'rateTable.cellContent.main.base'
      }}
    >
      <div
        sx={{
          flex: inSplit ? 1 : 0,
          fontSize: 'xs',
          marginTop: inSplit ? '' : 'sm',
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
