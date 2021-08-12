/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { CardContext, forceMobile } from '../generics'

import CellBase from './cell-base'

export interface CellCtaProps extends React.HTMLAttributes<HTMLDivElement> {
  primary: React.ReactNode
  secondary?: React.ReactNode
  headerImage?: boolean
  isWireFrame?: boolean
}
const ProductTableCellCta: React.FC<CellCtaProps> = ({
  primary,
  secondary,
  headerImage,
  isWireFrame = false
}) => {
  const { isCard } = React.useContext(CardContext)
  const forcedMobile = forceMobile(isCard)
  const buttonWrapperStyling = {
    flex: forcedMobile([1, null, 'initial']),
    width: forcedMobile(['auto', '100%']),
    display: forcedMobile(['flex', null, 'block']),
    variant: headerImage
      ? 'compounds.product-table.variants.redesign.cellCta.buttonWrapper'
      : 'compounds.product-table.cellCta.buttonWrapper'
  }
  return (
    <CellBase
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: forcedMobile(['column', 'row', 'column']),
        opacity: isWireFrame ? 0.4 : 1,
        variant: 'compounds.product-table.cta'
      }}
    >
      <div sx={{ ...buttonWrapperStyling }}>{primary}</div>
      {secondary && <div sx={{ ...buttonWrapperStyling }}>{secondary}</div>}
    </CellBase>
  )
}

export default ProductTableCellCta
