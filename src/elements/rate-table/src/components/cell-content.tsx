/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'
import { AddonContext, CellContext } from './generics'

const grid = (rowOrCol: 'row' | 'column', start: number, span: number) => {
  const rowOrColCap = rowOrCol[0].toUpperCase() + rowOrCol.slice(1)
  return {
    [`grid${rowOrColCap}`]: `${start} / span ${span}`,
    [`grid-${rowOrCol}`]: `${start}`,
    [`grid-${rowOrCol}-span`]: `${span}`
  }
}

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
          ...grid('column', 1, 1),
          ...grid('row', isRow ? 1 : 2, 1),
          fontSize: 'xs',
          marginTop: isRow ? '' : 'sm',
          variant: 'rateTable.cellContent.label'
        }}
      >
        {label}
      </div>
      <div
        sx={{
          ...grid('column', isRow ? 2 : 1, 1),
          ...grid('row', 1, 1)
        }}
      >
        {children}
      </div>
    </CellBase>
  )
}

export default RateTableCellPrimary
