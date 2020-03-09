/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

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
  const childrenCount = React.Children.count(children)
  return (
    <section
      sx={{
        border: '1px solid',
        paddingX: ['sm', 'md'],
        paddingY: 'md',
        variant: 'rateTable.row.main'
      }}
    >
      <header
        sx={{
          borderBottom: '1px solid',
          marginBottom: 'sm',
          paddingBottom: 'sm',
          variant: 'rateTable.row.header'
        }}
      >
        {preTitle && (
          <span sx={{ fontSize: 'xs', variant: 'rateTable.row.pretitle' }}>
            {preTitle}
          </span>
        )}
        <h3 sx={{ margin: 0, variant: 'rateTable.row.title' }}>{rowTitle}</h3>
        {subtitle && (
          <span sx={{ fontSize: 'xs', variant: 'rateTable.row.subtitle' }}>
            {subtitle}
          </span>
        )}
      </header>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: ['auto', `repeat(${childrenCount}, 1fr)`],
          gridTemplateRows: ['auto', `repeat(${ROWS}, 1fr)`],
          marginX: -8,
          marginY: -6,
          variant: 'rateTable.row.grid'
        }}
      >
        {React.Children.map(children, (child, index) => (
          <CellContext.Provider
            value={{
              gridRow: `1 / span ${ROWS}`,
              gridColumn: `${index + 1} / span 1`,
              firstInSplit: false,
              inSplit: false
            }}
          >
            {child}
          </CellContext.Provider>
        ))}
      </div>
      {disclaimer && (
        <footer
          sx={{
            borderTop: '1px solid',
            marginTop: 'sm',
            paddingTop: 'sm',
            variant: 'rateTable.row.footer'
          }}
        >
          <small sx={{ fontSize: 'xs' }}>{disclaimer}</small>
        </footer>
      )}
    </section>
  )
}

export default RateTableRow
