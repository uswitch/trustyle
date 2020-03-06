/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'
import { CellContext } from './row'

export interface CellPrimaryProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  highlighted?: boolean
}
const RateTableCellPrimary: React.FC<CellPrimaryProps> = ({
  label,
  highlighted = false,
  children
}) => {
  const { inSplit } = React.useContext(CellContext)

  // @todo highlighted should be a variant

  return (
    <CellBase
      sx={{
        flexDirection: inSplit ? 'row' : 'column-reverse',
        alignItems: inSplit ? 'center' : 'start',
        backgroundColor: highlighted ? 'grey-05' : '',
        padding: highlighted && !inSplit ? 'sm' : ''
      }}
    >
      <div
        sx={{
          flex: inSplit ? 1 : 0,
          fontSize: 'xs',
          color: 'grey-80',
          marginTop: inSplit ? '' : 'sm'
        }}
      >
        {label}
      </div>
      <div sx={{ flex: 1, fontSize: 'md', fontWeight: 'bold' }}>{children}</div>
    </CellBase>
  )
}

export default RateTableCellPrimary
