/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { AddonContext, CellContext } from '../generics'

export interface DataTextSubtextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  subtext: string
}
const ProductTableDataTextSubtext: React.FC<DataTextSubtextProps> = ({
  text,
  subtext
}) => {
  const { inSplit } = React.useContext(CellContext)
  const { inAddon } = React.useContext(AddonContext)

  const isRow = inSplit || inAddon

  return (
    <div>
      <span sx={{ fontSize: isRow ? '' : 'xxxl' }}>{text}</span>
      {' ' + subtext}
    </div>
  )
}

export default ProductTableDataTextSubtext
