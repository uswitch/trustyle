/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'

export const RateTableCellImage: React.FC = ({ children }) => (
  <CellBase mobileOrder={0} sx={{ variant: 'rateTable.cellImage.main' }}>
    {children}
  </CellBase>
)
export default RateTableCellImage
