/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { AddonContext, CellContext } from '../generics'

import CellBase from './cell-base'

const capitalise = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

const grid = (rowOrCol: 'row' | 'column', start: number, span: number) => {
  const rowOrColCap = capitalise(rowOrCol)
  return {
    [`grid${rowOrColCap}`]: `${start} / span ${span}`,
    [`-ms-grid-${rowOrCol}`]: `${start}`,
    [`-ms-grid-${rowOrCol}-span`]: `${span}`
  }
}

export interface CellPrimaryProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  accent?: boolean
  mobileOrder?: number
}
const ProductTableCellContent: React.FC<CellPrimaryProps> = ({
  label,
  accent = false,
  mobileOrder,
  children
}) => {
  const { inSplit } = React.useContext(CellContext)
  const { inAddon } = React.useContext(AddonContext)

  const isRow = inSplit || inAddon

  const rows =
    inAddon && inAddon !== 'body-responsive' ? 'auto auto' : '1fr 1fr'

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
          ? 'productTable.cellContent.main.variants.accent'
          : 'productTable.cellContent.main.base'
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
          variant: 'productTable.cellContent.label'
        }}
      >
        {label}
      </div>
      <div
        sx={{
          ...grid('column', isRow ? 2 : 1, 1),
          ...grid('row', 1, 1),
          fontSize: isRow ? 'xs' : 'xxxl',
          small: {
            fontSize: 'xs'
          }
        }}
      >
        {children}
      </div>
    </CellBase>
  )
}

export default ProductTableCellContent
