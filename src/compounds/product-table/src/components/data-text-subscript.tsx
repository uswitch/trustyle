/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { AddonContext, CellContext } from '../generics'

export interface DataTextSubscriptProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  subscript: string
}
const ProductTableDataTextSubscript: React.FC<DataTextSubscriptProps> = ({
  text,
  subscript
}) => {
  const { inSplit } = React.useContext(CellContext)
  const { inAddon } = React.useContext(AddonContext)

  const isRow = inSplit || inAddon

  return (
    <div>
      <span sx={{ fontSize: isRow ? '' : 'xxxl' }}>{text}</span>
      {' ' + subscript}
    </div>
  )
}

export default ProductTableDataTextSubscript
