/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { CellContext } from './generics'

export interface CellBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  mobileOrder?: number
  extraRules?: object
}

const RateTableCellBase: React.FC<CellBaseProps> = ({
  mobileOrder = 2,
  extraRules: extraRulesProp = {},
  children,
  className
}) => {
  const {
    gridColumnStart,
    gridColumnSpan,
    gridRowStart,
    gridRowSpan,
    accentCellCount,
    accentCellIndex,
    firstInSplit,
    inSplit,
    extraRules: extraRulesContext
  } = React.useContext(CellContext)

  const extraRules = { ...extraRulesContext, ...extraRulesProp }

  const sx: any = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginX: 8, // sm / 2
    paddingY: 6, // xs / 2
    gridColumn: [
      typeof accentCellIndex === 'number' && accentCellCount === 2
        ? `${accentCellIndex + 1} / span 1`
        : '1 / -1',
      `${gridColumnStart} / span ${gridColumnSpan}`
    ],
    '-ms-grid-column': `${gridColumnStart}`,
    '-ms-grid-column-span': `${gridColumnSpan}`,
    gridRow: ['initial', `${gridRowStart} / span ${gridRowSpan}`],
    '-ms-grid-row': ['initial', `${gridRowStart}`],
    '-ms-grid-row-span': ['initial', `${gridRowSpan}`],
    order: [mobileOrder, 'initial'],
    ...extraRules
  }

  if (inSplit) {
    sx['+ .in-split:not(.first-in-split)'] = {
      borderTop: '1px solid',
      variant: 'rateTable.cellBase.variants.inSplit'
    }
  }

  return (
    <div
      sx={sx}
      className={[
        inSplit ? 'in-split' : 'not-in-split',
        firstInSplit ? 'first-in-split' : 'not-first-in-split'
      ].join(' ')}
    >
      <div
        sx={{
          flex: 1,
          height: '100%',
          boxSizing: 'border-box'
        }}
        className={className}
      >
        {children}
      </div>
    </div>
  )
}
export default RateTableCellBase
