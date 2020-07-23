/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'

export interface CellSecondaryProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label: string
}

const ProductTableCellSecondary: React.FC<CellSecondaryProps> = ({
  children,
  label
}) => (
  <CellBase
    sx={{
      height: 'auto',
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: ['auto auto', '100%'],
      msGridColumns: ['auto auto', '100%'],
      gridTemplateRows: ['100%', 'auto auto'],
      msGridRows: ['100%', 'auto auto'],
      variant: [
        'compounds.product-table.cellContent.variants.inSplit.main',
        'compounds.product-table.cellContent.main'
      ]
    }}
    // @ts-ignore
    css={{ display: '-ms-grid' }}
  >
    <div
      sx={{
        gridColumn: '1 / span 1',
        msGridColumn: '1',
        msGridColumnSpan: '1',
        gridRow: ['1 / span 1', '2 / span 1'],
        msGridRow: ['1', '2'],
        msGridRowSpan: '1',
        fontSize: 'xs',
        marginTop: 'sm',
        variant: [
          'compounds.product-table.cellContent.variants.inSplit.label',
          'compounds.product-table.cellContent.label'
        ]
      }}
    >
      {label}
    </div>
    <div
      sx={{
        gridRow: '1 / span 1',
        msGridRow: '1',
        msGridRowSpan: '1',
        gridColumn: ['2 / span 1', '1 / span 1'],
        msGridColumn: ['2', '1'],
        msGridColumnSpan: '1',
        fontSize: 'xxl',
        marginTop: ['sm', ''],
        small: {
          fontSize: 'sm'
        },
        lineHeight: 1,
        variant: [
          'compounds.product-table.cellContent.variants.inSplit.content',
          'compounds.product-table.cellContent.content'
        ]
      }}
    >
      {children}
    </div>
  </CellBase>
)

export default ProductTableCellSecondary
