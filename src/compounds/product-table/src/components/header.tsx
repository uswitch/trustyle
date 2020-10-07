/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  badges?: React.ReactNode[]
  preTitle?: React.ReactNode
  rowTitle?: React.ReactNode
  subtitle?: React.ReactNode
  addons?: React.ReactNode[]
  image?: React.ReactNode
}

const ProductTableHeader: React.FC<HeaderProps> = ({
  badges = [],
  preTitle,
  rowTitle,
  subtitle,
  addons = [],
  image,
}) => {
  
  return (
    <div sx={{
      overflow: "hidden",
      borderBottom: image ? 'none' : '1px solid',
      paddingBottom: 'sm',
      marginTop: badges.length ? 0 : -6,
      variant: 'compounds.product-table.row.header',
      display: 'flex',
      alignItems: 'center'
    }}>
      {image && (
        <span
        sx={{
          // display: "flex",
        }}
      >
        {image}</span>
      )}
      <CellBase>
        <span
          sx={{
            fontSize: 'xs',
            variant: 'compounds.product-table.row.pretitle'
          }}
        >
          {preTitle}
        </span>
        <h3
          sx={{
            margin: 0,
            variant: 'compounds.product-table.row.title'
          }}
        >
          {rowTitle}
        </h3>
        <span
          sx={{
            fontSize: 'xs',
            variant: 'compounds.product-table.row.subtitle'
          }}
        >
          {subtitle}
        </span>
      </CellBase>
      {addons}
    </div>
    
  )
}

export default ProductTableHeader
