/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { AddonContext, CellContext } from '../generics'

import CellBase from './cell-base'

const capitalise = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

const grid = (rowOrCol: 'row' | 'column', start: number, span: number) => {
  const rowOrColCap = capitalise(rowOrCol)
  return {
    [`grid${rowOrColCap}`]: `${start} / span ${span}`,
    [`-ms-grid-${rowOrCol}`]: `${start}`,
    [`-ms-grid-${rowOrCol}-span`]: `${span}`
  }
}

export interface CellPrimaryProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  accent?: boolean
  mobileOrder?: number
  customSize?: string
}

export interface ContentRowProps extends CellPrimaryProps {
  inAddon: string | boolean
}

const RowContent: React.FC<ContentRowProps> = ({
  accent,
  children,
  inAddon,
  label,
  mobileOrder,
  customSize
}) => (
  <CellBase
    mobileOrder={mobileOrder || (accent ? 1 : 2)}
    customSize={customSize}
    sx={{
      height: 'auto',
      display: 'grid',
      alignItems: 'center',
      gridGap: 'sm',
      gridTemplateColumns: 'auto auto',
      msGridColumns: 'auto auto',
      gridTemplateRows: '100%',
      msGridRows: '100%',
      variant: `productTable.cellContent.variants.inSplit.${
        accent ? 'accent' : 'main'
      }`
    }}
    // @ts-ignore
    css={{ display: '-ms-grid' }}
  >
    <div
      sx={{
        display: inAddon ? [undefined, 'none'] : undefined,
        ...grid('column', 1, 1),
        ...grid('row', 1, 1),
        fontSize: 'xs',
        marginTop: '',
        variant: 'productTable.cellContent.variants.inSplit.label'
      }}
    >
      {label}
    </div>
    <div
      sx={{
        ...grid('column', 2, 1),
        ...grid('row', 1, 1),
        fontSize: 'sm',
        textAlign: 'right',
        small: {
          fontSize: 'sm'
        },
        variant: 'productTable.cellContent.variants.inSplit.content'
      }}
    >
      {children}
    </div>
  </CellBase>
)

const BlockContent: React.FC<CellPrimaryProps> = ({
  label,
  accent,
  mobileOrder,
  children
}) => (
  <CellBase
    mobileOrder={mobileOrder || (accent ? 1 : 2)}
    sx={{
      height: accent ? '100%' : 'auto',
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: '100%',
      msGridColumns: '100%',
      gridTemplateRows: 'auto auto',
      msGridRows: 'auto auto',
      padding: accent ? 'sm' : '',
      variant: `productTable.cellContent.${accent ? 'accent' : 'main'}`
    }}
    // @ts-ignore
    css={{ display: '-ms-grid' }}
  >
    <div
      sx={{
        ...grid('column', 1, 1),
        ...grid('row', 2, 1),
        fontSize: 'xs',
        marginTop: 'sm',
        variant: 'productTable.cellContent.label'
      }}
    >
      {label}
    </div>
    <div
      sx={{
        ...grid('column', 1, 1),
        ...grid('row', 1, 1),
        fontSize: 'xxxl',
        small: {
          fontSize: 'sm'
        },
        lineHeight: 1,
        variant: 'productTable.cellContent.content'
      }}
    >
      {children}
    </div>
  </CellBase>
)

const ProductTableCellContent: React.FC<CellPrimaryProps> = ({
  children,
  ...props
}) => {
  const { inSplit } = React.useContext(CellContext)
  const { inAddon } = React.useContext(AddonContext)

  if (inSplit || inAddon) {
    return (
      <RowContent inAddon={inAddon} {...props}>
        {children}
      </RowContent>
    )
  }

  return <BlockContent {...props}>{children}</BlockContent>
}

export default ProductTableCellContent
