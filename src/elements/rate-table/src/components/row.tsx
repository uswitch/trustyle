/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'
import { ROWS } from './cell-split'

export const CellContext = React.createContext({
  gridRow: '',
  gridColumn: '',
  firstInSplit: false,
  inSplit: false
})

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  badges?: React.ReactNode[]
  preTitle?: React.ReactNode
  rowTitle: React.ReactNode
  subtitle?: React.ReactNode
  disclaimer?: React.ReactNode
}

const RateTableRow: React.FC<RowProps> = ({
  preTitle,
  rowTitle,
  subtitle,
  disclaimer,
  children
}) => {
  const nonNullChildren = React.Children.toArray(children).filter(c => c)
  const childrenCount = nonNullChildren.length

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
            `auto repeat(${ROWS}, 1fr) ${disclaimer ? 'auto' : ''}`
          ],
          marginX: -8,
          marginY: -6,
          variant: 'rateTable.row.grid'
        }}
      >
        <CellContext.Provider
          value={{
            gridRow: '1 / span 1',
            gridColumn: '1 / -1',
            // @todo default values for these pls
            inSplit: false,
            firstInSplit: false
          }}
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
            <h3 sx={{ margin: 0, variant: 'rateTable.row.title' }}>
              {rowTitle}
            </h3>
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
              gridRow: `2 / span ${ROWS}`,
              gridColumn: `${index + 1} / span 1`,
              firstInSplit: false,
              inSplit: false
            }}
            key={index}
          >
            {child}
          </CellContext.Provider>
        ))}
        {disclaimer && (
          <CellContext.Provider
            value={{
              gridRow: '-2 / span 1',
              gridColumn: '1 / -1',
              inSplit: false,
              firstInSplit: false
            }}
          >
            <CellBase
              sx={{
                display: 'block',
                borderTop: '1px solid',
                paddingTop: 'sm',
                marginBottom: -6,
                variant: 'rateTable.row.footer'
              }}
              mobileOrder={100}
            >
              <small sx={{ fontSize: 'xs' }}>{disclaimer}</small>
            </CellBase>
          </CellContext.Provider>
        )}
      </div>
    </section>
  )
}

export default RateTableRow
