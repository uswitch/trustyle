/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'
import { ROWS } from './cell-split'
import { Addon, AddonArg, CellContext } from './generics'

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  badges?: React.ReactNode[]
  preTitle?: React.ReactNode
  rowTitle?: React.ReactNode
  subtitle?: React.ReactNode
  addons?: AddonArg[]
}

const RateTableRow: React.FC<RowProps> = ({
  badges = [],
  preTitle,
  rowTitle,
  subtitle,
  addons = [],
  children
}) => {
  const nonNullChildren = React.Children.toArray(children).filter(
    c => c
  ) as React.ReactElement[]

  const accentCells = nonNullChildren.filter(child => child.props.accent)

  if (accentCells.length > 2) {
    throw new Error('Primary cell count cannot be above two')
  }

  const cols = nonNullChildren.length

  const addonsFor = (key: keyof Addon): React.ReactNode[] =>
    addons.map(({ addon, component }, i) => {
      if (addon[key]) {
        const AddonPart = addon[key] as React.FC
        return <AddonPart key={i}>{component}</AddonPart>
      }
    })

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
          gridTemplateColumns: ['repeat(2, 1fr)', `repeat(${cols}, 1fr)`],
          '-ms-grid-columns': ['(1fr)[2]', `(1fr)[${cols}]`],
          gridTemplateRows: [
            'auto',
            `repeat(3, auto) repeat(${ROWS}, 1fr) repeat(3, auto)`
          ],
          '-ms-grid-rows': ['auto', `(auto)[3] (1fr)[${ROWS}] (auto)[3]`],
          marginX: -8,
          marginY: -6,
          variant: 'rateTable.row.grid',

          // Flex in mobile IE11 (?!) as auto-layout for grid isn't supported
          '@media all and (max-width: 768px) and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
            display: 'flex',
            flexDirection: 'column'
          }
        }}
        // @ts-ignore
        css={{
          display: '-ms-grid'
        }}
      >
        <CellContext.Provider
          value={{
            gridRowStart: 2,
            gridRowSpan: 1,
            gridColumnStart: 1,
            gridColumnSpan: cols
          }}
        >
          <CellBase
            sx={{
              display: 'block',
              borderBottom: '1px solid',
              paddingBottom: 'sm',
              marginTop: badges.length ? 0 : -6,
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
              gridRowStart: 4,
              gridRowSpan: ROWS,
              gridColumnStart: index + 1,
              gridColumnSpan: 1,
              accentCellCount: accentCells.length,
              accentCellIndex: child.props.accent && accentCells.indexOf(child)
            }}
            key={index}
          >
            {child}
          </CellContext.Provider>
        ))}

        <CellContext.Provider
          value={{
            gridRowStart: 1,
            gridRowSpan: ROWS,
            gridColumnStart: 1,
            gridColumnSpan: cols
          }}
        >
          {addonsFor('body')}
        </CellContext.Provider>
      </div>
    </section>
  )
}

export default RateTableRow
