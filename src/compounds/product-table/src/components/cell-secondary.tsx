/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import CellBase from './cell-base'

export interface CellSecondaryProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  headerImage?: boolean
}

const ProductTableCellSecondary: React.FC<CellSecondaryProps> = ({
  children,
  label,
  headerImage
}) => (
  <CellBase
    sx={{
      height: ['auto', headerImage ? 'auto' : '100%'],
      padding: ['', headerImage ? 0 : 'sm'],
      display: 'grid',
      alignItems: ['center', 'start'],
      gridTemplateColumns: ['repeat(2, 1fr)', '100%'],
      msGridColumns: ['repeat(2, 1fr)', '100%'],
      gridTemplateRows: ['100%', headerImage ? 'auto' : '1fr'],
      msGridRows: ['100%', headerImage ? 'auto' : '1fr'],
      variant: [
        `compounds.product-table.${headerImage &&
          'variants.redesign.'}cellContent.variants.inSplit.main`,
        `compounds.product-table.${headerImage &&
          'variants.redesign.'}cellContent.main`
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
        gridRow: headerImage
          ? ['1 / span 1', '1 / span 1']
          : ['1 / span 1', '2 / span 1'],
        msGridRow: ['1', headerImage ? '1' : '2'],
        msGridRowSpan: '1',
        fontSize: 'xs',
        marginTop: headerImage ? 0 : 'sm',
        variant: [
          `compounds.product-table.${headerImage &&
            'variants.redesign.'}cellContent.variants.inSplit.label`,
          `compounds.product-table.${headerImage &&
            'variants.redesign.'}cellContent.label`
        ]
      }}
    >
      {label}
    </div>
    <div
      sx={{
        gridRow: headerImage ? '2 / span 1' : '1 / span 1',
        msGridRow: headerImage ? '2' : '1',
        msGridRowSpan: '1',
        gridColumn: ['2 / span 1', '1 / span 1'],
        msGridColumn: ['2', '1'],
        msGridColumnSpan: '1',
        fontSize: 'xxl',
        paddingLeft: ['sm', '0px'],
        marginTop: ['sm', '0px'],
        small: {
          fontSize: 'sm'
        },
        lineHeight: 1,
        variant: [
          `compounds.product-table.${headerImage &&
            'variants.redesign.'}cellContent.variants.inSplit.content`,
          `compounds.product-table.${headerImage &&
            'variants.redesign.'}cellContent.content`
        ]
      }}
    >
      {children}
    </div>
  </CellBase>
)

export default ProductTableCellSecondary
