/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'
import { ROWS } from './cell-split'

interface CellContextProps {
  gridRow: string
  gridColumn: string
  firstInSplit?: boolean
  inSplit?: boolean
  inAddon?: string
  extraRules?: object
}
export const CellContext = React.createContext<CellContextProps>({
  gridRow: '',
  gridColumn: '',
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
  preTitle,
  rowTitle,
  subtitle,
  addons,
  children
}) => {
  const nonNullChildren = React.Children.toArray(children).filter(c => c)
  const childrenCount = nonNullChildren.length

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
        border: '1px solid',
        paddingX: ['sm', 'md'],
        paddingY: 'md',
        variant: 'rateTable.row.main'
      }}
    >
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: ['auto', `repeat(${childrenCount}, 1fr)`],
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
              marginTop: -6,
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
              gridColumn: `${index + 1} / span 1`
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
