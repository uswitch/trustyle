/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'
import { ROWS } from './cell-split'

interface CellContextProps {
  gridRow: string
  gridColumn: string
  primaryCellCount?: number
  primaryCellIndex?: number
  firstInSplit?: boolean
  inSplit?: boolean
  inAddon?: string
  extraRules?: object
}
export const CellContext = React.createContext<CellContextProps>({
  gridRow: '',
  gridColumn: '',
  primaryCellCount: 1,
  firstInSplit: false,
  inSplit: false
})

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  badges?: React.ReactNode[]
  preTitle?: React.ReactNode
  rowTitle?: React.ReactNode
  subtitle?: React.ReactNode
  addons?: React.ReactNode[]
}

const RateTableRow: React.FC<RowProps> = ({
  badges = [],
  preTitle,
  rowTitle,
  subtitle,
  addons,
  children
}) => {
  const nonNullChildren = React.Children.toArray(children).filter(
    c => c
  ) as React.ReactElement[]

  const primaryCells = nonNullChildren.filter(child => child.props.primary)

  if (primaryCells.length > 2) {
    throw new Error('Primary cell count cannot be above two')
  }

  /**
   * ROW 1: reserved for addons above header (auto height)
   * ROW 2: used for header
   * ROW 3: reserved for addons below header (auto height)
   * ROW 4-9: used for grid
   * ROW 10-12: reserved for addons below grid (footer addon uses 11)
   */

  return (
    <section
      sx={{
        position: 'relative',
        border: '1px solid',
        paddingX: ['sm', 'md'],
        paddingY: 'md',
        marginTop: badges.length ? [10, 15] : 0,
        variant: 'rateTable.row.main'
      }}
    >
      {!!badges.length && (
        <div
          sx={{ position: 'absolute', top: 0, transform: 'translateY(-50%)' }}
        >
          {badges.map((badge, i) => (
            <span sx={{ marginRight: 'sm' }} key={i}>
              {badge}
            </span>
          ))}
        </div>
      )}
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: [
            'repeat(2, 1fr)',
            `repeat(${nonNullChildren.length}, 1fr)`
          ],
          gridTemplateRows: [
            'auto',
            `repeat(3, auto) repeat(${ROWS}, 1fr) repeat(3, auto)`
          ],
          marginX: -8,
          marginY: -6,
          variant: 'rateTable.row.grid'
        }}
      >
        <CellContext.Provider
          value={{ gridRow: '2 / span 1', gridColumn: '1 / -1' }}
        >
          <CellBase
            sx={{
              display: 'block',
              borderBottom: '1px solid',
              paddingBottom: 'sm',
              marginTop: (badges.length ? 6 : 0) - 6,
              variant: 'rateTable.row.header'
            }}
            mobileOrder={-100}
          >
            {preTitle && (
              <span sx={{ fontSize: 'xs', variant: 'rateTable.row.pretitle' }}>
                {preTitle}
              </span>
            )}
            {rowTitle && (
              <h3 sx={{ margin: 0, variant: 'rateTable.row.title' }}>
                {rowTitle}
              </h3>
            )}
            {subtitle && (
              <span sx={{ fontSize: 'xs', variant: 'rateTable.row.subtitle' }}>
                {subtitle}
              </span>
            )}
          </CellBase>
        </CellContext.Provider>

        {nonNullChildren.map((child, index) => (
          <CellContext.Provider
            value={{
              gridRow: `4 / span ${ROWS}`,
              gridColumn: `${index + 1} / span 1`,
              primaryCellCount: primaryCells.length,
              primaryCellIndex:
                child.props.primary && primaryCells.indexOf(child)
            }}
            key={index}
          >
            {child}
          </CellContext.Provider>
        ))}

        {addons}
      </div>
    </section>
  )
}

export default RateTableRow
