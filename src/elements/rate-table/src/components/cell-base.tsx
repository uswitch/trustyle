/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { CellContext } from './row'

const RateTableCellBase: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  const { gridColumn, gridRow } = React.useContext(CellContext)

  return (
    <div
      sx={{
        // @todo: should cells by flex by default?
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gridColumn,
        gridRow
      }}
      {...props}
    >
      {children}
    </div>
  )
}
export default RateTableCellBase
