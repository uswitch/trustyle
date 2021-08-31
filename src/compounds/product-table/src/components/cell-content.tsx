/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import WireFrameCell from '@uswitch/trustyle.wireframe-cell'

import {
  AddonContext,
  CardContext,
  CellContext,
  forceMobile
} from '../generics'

import CellBase from './cell-base'

const capitalise = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

const grid = (rowOrCol: 'row' | 'column', start: number, span: number) => {
  const rowOrColCap = capitalise(rowOrCol)
  return {
    [`grid${rowOrColCap}`]: `${start} / span ${span}`,
    [`msGrid${rowOrColCap}`]: `${start}`,
    [`msGrid${rowOrColCap}Span`]: `${span}`
  }
}

export interface CellPrimaryProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  accent?: boolean
  mobileOrder?: number
  headerImage?: boolean
  isCard?: boolean
  isWireFrame?: boolean
  wireFrameStyles?: object
}

export interface ContentRowProps extends CellPrimaryProps {
  inAddon: string | boolean
  isCard?: boolean
}

const RowContent: React.FC<ContentRowProps> = ({
  accent,
  children,
  inAddon,
  label,
  mobileOrder,
  isCard,
  isWireFrame = false
}) => {
  const wireFrameStyles = {
    label: {
      width: '45%',
      height: '10px'
    },
    description: {
      width: '95%',
      height: '17px'
    }
  }

  return (
    <CellBase
      mobileOrder={mobileOrder || (accent ? 1 : 2)}
      sx={{
        height: 'auto',
        display: 'grid',
        alignItems: 'center',
        gridGap: 'sm',
        gridTemplateColumns: 'auto auto',
        msGridColumns: 'auto auto',
        gridTemplateRows: '100%',
        msGridRows: '100%',
        variant: `compounds.product-table.cellContent.variants.inSplit.${
          accent ? 'accent' : 'main'
        }`
      }}
      // @ts-ignore
      css={{ display: '-ms-grid' }}
    >
      <div
        sx={{
          display: inAddon
            ? forceMobile(isCard)([undefined, 'none'])
            : undefined,
          ...grid('column', 1, 1),
          ...grid('row', 1, 1),
          fontSize: 'xs',
          marginTop: '',
          variant: 'compounds.product-table.cellContent.variants.inSplit.label'
        }}
      >
        {isWireFrame && <WireFrameCell styles={wireFrameStyles.label} />}
        {!isWireFrame && label}
      </div>
      <div
        sx={{
          ...grid('column', 2, 1),
          ...grid('row', 1, 1),
          fontSize: 'sm',
          textAlign: 'right' as const,
          small: {
            fontSize: 'sm'
          },
          variant:
            'compounds.product-table.cellContent.variants.inSplit.content'
        }}
      >
        {isWireFrame && <WireFrameCell styles={wireFrameStyles.description} />}
        {!isWireFrame && children}
      </div>
    </CellBase>
  )
}

const BlockContent: React.FC<CellPrimaryProps> = ({
  label,
  accent,
  mobileOrder,
  children,
  headerImage,
  isCard,
  isWireFrame = false
}) => {
  const wireFrameStyles = {
    label: {
      width: '45%',
      height: '10px'
    },
    description: {
      width: '65%',
      height: '17px'
    }
  }

  return (
    <CellBase
      mobileOrder={mobileOrder || (accent ? 1 : 2)}
      sx={{
        height: accent ? '100%' : 'auto',
        display: 'grid',
        alignItems: 'start',
        gridTemplateColumns: '100%',
        msGridColumns: '100%',
        gridTemplateRows: '1fr',
        msGridRows: '1fr',
        padding: accent ? 'sm' : '',
        variant: headerImage
          ? `compounds.product-table.variants.redesign.cellContent.${
              accent ? 'accent' : 'main'
            }`
          : `compounds.product-table.cellContent.${accent ? 'accent' : 'main'}`
      }}
      // @ts-ignore
      css={{ display: '-ms-grid' }}
    >
      <div
        sx={{
          ...grid('column', 1, 1),
          gridRow: headerImage
            ? forceMobile(isCard)(['1 / span 1', '1 / span 1'])
            : forceMobile(isCard)(['1 / span 2', '2 / span 1']),
          msGridRow: forceMobile(isCard)(['1', '2']),
          msGridRowSpan: forceMobile(isCard)(['2', '1']),
          alignSelf: forceMobile(isCard)(['baseline', 'auto']),
          fontSize: 'xs',
          marginTop: headerImage ? 0 : forceMobile(isCard)(['xl', 'sm']),
          variant: `compounds.product-table.${headerImage &&
            'variants.redesign.'}cellContent.label`
        }}
      >
        {isWireFrame && <WireFrameCell styles={wireFrameStyles.label} />}
        {!isWireFrame && label}
      </div>
      <div
        sx={{
          ...grid('column', 1, 1),
          ...grid('row', headerImage ? 2 : 1, 1),
          fontSize: isCard ? 'sm' : 'xxl',
          textAlign: isCard ? ('center' as const) : ('left' as const),
          small: {
            fontSize: 'sm'
          },
          lineHeight: 1,
          variant: `compounds.product-table.${headerImage &&
            'variants.redesign.'}cellContent.content`
        }}
      >
        {isWireFrame && <WireFrameCell styles={wireFrameStyles.description} />}
        {!isWireFrame && children}
      </div>
    </CellBase>
  )
}

const ProductTableCellContent: React.FC<CellPrimaryProps> = ({
  children,
  isWireFrame,
  ...props
}) => {
  const { inSplit } = React.useContext(CellContext)
  const { inAddon } = React.useContext(AddonContext)
  const { isCard } = React.useContext(CardContext)

  if (inSplit || inAddon) {
    return (
      <RowContent
        inAddon={inAddon}
        isCard={isCard}
        isWireFrame={isWireFrame}
        {...props}
      >
        {children}
      </RowContent>
    )
  }

  return (
    <BlockContent isCard={isCard} isWireFrame={isWireFrame} {...props}>
      {children}
    </BlockContent>
  )
}

export default ProductTableCellContent
