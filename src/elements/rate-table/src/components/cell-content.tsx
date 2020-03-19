/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'
import { AddonContext, CellContext } from './generics'

export interface CellPrimaryProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  accent?: boolean
  mobileOrder?: number
}
const RateTableCellPrimary: React.FC<CellPrimaryProps> = ({
  label,
  accent = false,
  mobileOrder,
  children
}) => {
  const { inSplit } = React.useContext(CellContext)
  const { inAddon } = React.useContext(AddonContext)

  const isRow = inSplit || inAddon

  const rows = inAddon ? 'auto auto' : '1fr 1fr'

  return (
    <CellBase
      mobileOrder={mobileOrder || (accent ? 1 : 2)}
      sx={{
        height: 'auto',
        display: 'grid',
        gridTemplateColumns: isRow ? rows : '100%',
        '-ms-grid-columns': isRow ? rows : '100%',
        gridTemplateRows: isRow ? '100%' : 'auto auto',
        '-ms-grid-rows': isRow ? '100%' : 'auto auto',
        padding: accent && !isRow ? 'sm' : '',
        variant: accent
          ? 'rateTable.cellContent.main.variants.accent'
          : 'rateTable.cellContent.main.base'
      }}
      // @ts-ignore
      css={{ display: '-ms-grid' }}
    >
      <div
        sx={{
          display: inAddon ? [undefined, 'none'] : undefined,
          gridColumn: '1 / span 1',
          '-ms-grid-column': '1',
          '-ms-grid-column-span': '1',
          gridRow: isRow ? '1 / span 1' : '2 / span 1',
          '-ms-grid-row': isRow ? '1' : '2',
          '-ms-grid-row-span': '1',
          fontSize: 'xs',
          marginTop: isRow ? '' : 'sm',
          variant: 'rateTable.cellContent.label'
        }}
      >
        {label}
      </div>
      <div
        sx={{
          gridColumn: isRow ? '2 / span 1' : '1 / span 1',
          '-ms-grid-column': isRow ? '2' : '1',
          '-ms-grid-column-span': '1',
          gridRow: '1 / span 1',
          '-ms-grid-row': '1',
          '-ms-grid-row-span': '1'
        }}
      >
        {children}
      </div>
    </CellBase>
  )
}

export default RateTableCellPrimary
