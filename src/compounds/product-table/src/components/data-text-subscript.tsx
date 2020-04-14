/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { AddonContext, CellContext } from '../generics'

export interface DataTextSubtextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  subscript: string
}
const ProductTableDataTextSubtext: React.FC<DataTextSubtextProps> = ({
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

export default ProductTableDataTextSubtext
