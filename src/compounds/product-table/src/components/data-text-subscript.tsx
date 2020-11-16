/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

export interface DataTextSubscriptProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  subscript: string
  headerImage?: boolean
}
const ProductTableDataTextSubscript: React.FC<DataTextSubscriptProps> = ({
  text,
  subscript,
  headerImage
}) => {
  return (
    <div>
      {headerImage ? (
        <span
          sx={{
            variant:
              'compounds.product-table.variants.redesign.cellContent.content'
          }}
        >
          {text}
        </span>
      ) : (
        text
      )}
      <span sx={{ fontSize: headerImage ? 'sm' : ['xs', 'md'] }}>
        {' ' + subscript}
      </span>
    </div>
  )
}

const PlainProductTableDataTextSubscript = (props: DataTextSubscriptProps) => {
  const { text, subscript } = props
  return `${text} ${subscript}`
}

export default ProductTableDataTextSubscript
export const Rich = ProductTableDataTextSubscript
export const Plain = PlainProductTableDataTextSubscript
