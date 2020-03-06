/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { CellContext } from './row'

const RateTableCellBase: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const { gridColumn, gridRow, inSplit } = React.useContext(CellContext)

  // @todo what type should this actually be?
  const sx: any = {
    // @todo: should cells by flex by default?
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gridColumn,
    gridRow
  }

  if (inSplit) {
    sx['+ .in-split'] = { borderTop: '1px solid', borderTopColor: 'grey-20' }
  }

  return (
    <div
      sx={sx}
      className={`${className} ${inSplit ? 'in-split' : 'not-in-split'}`}
      {...props}
    >
      {children}
    </div>
  )
}
export default RateTableCellBase
