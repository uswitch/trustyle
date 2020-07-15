/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { Addon, AddonArg, CellContext } from '../generics'

import CellBase from './cell-base'
import { ROWS } from './cell-split'

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  badges?: React.ReactNode[]
  preTitle?: React.ReactNode
  rowTitle?: React.ReactNode
  subtitle?: React.ReactNode
  addons?: AddonArg[]
}

const ProductTableRow: React.FC<RowProps> = ({
  badges = [],
  preTitle,
  rowTitle,
  subtitle,
  addons = [],
  children,
  id
}) => {
  const addonsFor = (key: keyof Addon): React.ReactNode[] =>
    addons.map(({ addon, component, options }, i) => {
      options = Object.assign({}, addon.defaultArguments, options)

      // @todo why isn't the check in the responsive addon doing this?
      if (options.positions && !options.positions.includes(key)) {
        return null
      }

      if (addon[key]) {
        const AddonPart = addon[key] as React.FC
        return (
          <AddonPart key={i} {...options}>
            {component}
          </AddonPart>
        )
      }
    })

  // @todo All addons go at the start - is there a better way to do this?
  const nonNullChildren = addonsFor('grid')
    .concat(React.Children.toArray(children))
    .filter(c => c) as React.ReactElement[]

  const accentCells = nonNullChildren.filter(child => child.props.accent)

  if (accentCells.length > 2) {
    throw new Error('Primary cell count cannot be above two')
  }

  const cols = nonNullChildren.length

  /**
   * Row numbers explained:
   *
   * ROW 1: reserved for addons above header (auto height)
   * ROW 2: used for header
   * ROW 3: reserved for addons below header (auto height)
   * ROW 4-9: used for grid
   * ROW 10-12: reserved for addons below grid (footer addon uses 11)
   */

  return (
    <section
      id={id}
      sx={{
        position: 'relative',
        border: '1px solid',
        paddingX: ['sm', 'md'],
        paddingY: 'md',
        marginTop: badges.length ? [10, 15] : 0,
        marginBottom: 'md',
        ':last-of-type': {
          marginBottom: 0
        },
        variant: 'compounds.product-table.row.main'
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
            undefined,
            `repeat(${cols}, 1fr)`
          ],
          msGridColumns: ['(1fr)[2]', undefined, `(1fr)[${cols}]`],
          gridTemplateRows: [
            'auto',
            undefined,
            `repeat(3, auto) repeat(${ROWS}, 1fr) repeat(3, auto)`
          ],
          msGridRows: ['auto', undefined, `(auto)[3] (1fr)[${ROWS}] (auto)[3]`],
          marginX: -8,
          marginY: -6,
          variant: 'compounds.product-table.row.grid',

          // Flex in mobile IE11 (?!) as auto-layout for grid isn't supported
          '@media all and (max-width: 990px) and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
            display: 'flex',
            flexDirection: 'column'
          }
        }}
        // @ts-ignore
        css={{
          display: '-ms-grid'
        }}
      >
        {rowTitle && (
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
                borderBottom: '1px solid',
                paddingBottom: 'sm',
                marginTop: badges.length ? 0 : -6,
                variant: 'compounds.product-table.row.header'
              }}
              mobileOrder={-100}
            >
              <CellContext.Provider value={{ inFlexbox: true }}>
                <div
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginX: -8,
                    marginY: -6
                  }}
                >
                  <CellBase extraRules={{ marginRight: 'auto' }}>
                    {preTitle && (
                      <span
                        sx={{
                          fontSize: 'xs',
                          variant: 'compounds.product-table.row.pretitle'
                        }}
                      >
                        {preTitle}
                      </span>
                    )}
                    <h3
                      sx={{
                        margin: 0,
                        variant: 'compounds.product-table.row.title'
                      }}
                    >
                      {rowTitle}
                    </h3>
                    {subtitle && (
                      <span
                        sx={{
                          fontSize: 'xs',
                          variant: 'compounds.product-table.row.subtitle'
                        }}
                      >
                        {subtitle}
                      </span>
                    )}
                  </CellBase>
                  {addonsFor('header')}
                </div>
              </CellContext.Provider>
            </CellBase>
          </CellContext.Provider>
        )}

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

export default ProductTableRow
