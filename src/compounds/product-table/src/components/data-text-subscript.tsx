/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

export interface DataTextSubscriptProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  subscript: string
}
const ProductTableDataTextSubscript: React.FC<DataTextSubscriptProps> = ({
  text,
  subscript
}) => {
  return (
    <div>
      {text}
      <small>{' ' + subscript}</small>
    </div>
  )
}

export default ProductTableDataTextSubscript
