/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { CardContext, forceMobile } from '../generics'

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
}) => {
  const { isCard } = React.useContext(CardContext)
  const forcedMobile = forceMobile(isCard)
  return (
    <CellBase
      sx={{
        height: forcedMobile(['auto', null, headerImage ? 'auto' : '100%']),
        padding: forcedMobile(['', null, headerImage ? 0 : 'sm']),
        display: 'grid',
        alignItems: forcedMobile(['center', null, 'start']),
        gridTemplateColumns: forcedMobile(['repeat(2, 1fr)', null, '100%']),
        msGridColumns: forcedMobile(['repeat(2, 1fr)', null, '100%']),
        gridTemplateRows: forcedMobile([
          '100%',
          null,
          headerImage ? 'auto' : '1fr'
        ]),
        msGridRows: forcedMobile(['100%', null, headerImage ? 'auto' : '1fr']),
        variant: `compounds.product-table.${headerImage &&
          'variants.redesign.'}cellContent.variants.inSplit.main`
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
            ? forcedMobile(['1 / span 1', null, '1 / span 1'])
            : forcedMobile(['1 / span 1', null, '2 / span 1']),
          msGridRow: forcedMobile(['1', null, headerImage ? '1' : '2']),
          msGridRowSpan: '1',
          fontSize: 'xs',
          marginTop: headerImage ? 0 : 'sm',
          variant: `compounds.product-table.${headerImage &&
            'variants.redesign.'}cellContent.variants.inSplit.label`
        }}
      >
        {label}
      </div>
      <div
        sx={{
          gridRow: headerImage
            ? forcedMobile(['1 / span 1', null, '2 / span 1'])
            : '1 / span 1',
          msGridRow: headerImage ? '2' : '1',
          msGridRowSpan: '1',
          gridColumn: forcedMobile(['2 / span 1', null, '1 / span 1']),
          msGridColumn: forcedMobile(['2', null, '1']),
          msGridColumnSpan: '1',
          fontSize: 'xxl',
          paddingLeft: forcedMobile(['sm', null, '0px']),
          marginTop: headerImage ? '0px' : forcedMobile(['sm', null, '0px']),
          small: {
            fontSize: 'sm'
          },
          lineHeight: 1,
          variant: `compounds.product-table.${headerImage &&
            'variants.redesign.'}cellContent.variants.inSplit.content`
        }}
      >
        {children}
      </div>
    </CellBase>
  )
}

export default ProductTableCellSecondary
