/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { CellContext } from './row'

interface CellBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  mobileOrder?: number
}

const RateTableCellBase: React.FC<CellBaseProps> = ({
  mobileOrder = 2,
  children,
  className
}) => {
  const { gridColumn, gridRow, firstInSplit, inSplit } = React.useContext(
    CellContext
  )

  // @todo what type should this actually be?
  const sx: any = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginX: 8, // sm / 2
    paddingY: 6, // xs / 2
    gridColumn: ['initial', gridColumn],
    gridRow: ['initial', gridRow],
    order: [mobileOrder, 'initial']
  }

  if (inSplit) {
    sx['+ .in-split:not(.first-in-split)'] = {
      borderTop: '1px solid',
      borderTopColor: 'grey-20'
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
          // @todo: should cells by flex by default?
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        className={className}
      >
        {children}
      </div>
    </div>
  )
}
export default RateTableCellBase
