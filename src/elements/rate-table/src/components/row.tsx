/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { ROWS } from './cell-split'

export const CellContext = React.createContext({
  gridRow: '',
  gridColumn: '',
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
      sx={{ border: '1px solid', borderColor: 'grey-30', padding: 'sm' }}
    >
      <header
        sx={{
          borderBottom: '1px solid',
          borderBottomColor: 'grey-20',
          marginBottom: 'sm',
          paddingBottom: 'sm'
        }}
      >
        {preTitle && (
          <span sx={{ fontSize: 'xs', color: 'grey-80' }}>{preTitle}</span>
        )}
        <h3 sx={{ margin: 0 }}>{rowTitle}</h3>
        {subtitle && (
          <span sx={{ fontSize: 'xs', color: 'grey-80' }}>{subtitle}</span>
        )}
      </header>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${childrenCount}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          gridColumnGap: 'sm', // @todo this won't work in IE11
          gridRowGap: 'xs'
        }}
      >
        {React.Children.map(children, (child, index) => (
          <CellContext.Provider
            value={{
              gridRow: `1 / span ${ROWS}`,
              gridColumn: `${index + 1} / span 1`,
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
            borderTopColor: 'grey-20',
            marginTop: 'sm',
            paddingTop: 'sm'
          }}
        >
          <small sx={{ fontSize: 'xs' }}>{disclaimer}</small>
        </footer>
      )}
    </section>
  )
}

export default RateTableRow
