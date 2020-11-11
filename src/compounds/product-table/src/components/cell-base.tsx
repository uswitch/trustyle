/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import {
  AddonContext,
  CardContext,
  CellContext,
  forceMobile
} from '../generics'

export interface CellBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  mobileOrder?: number
  extraRules?: object
}

const ProductTableCellBase: React.FC<CellBaseProps> = ({
  mobileOrder = 2,
  extraRules: extraRulesProp = {},
  children,
  className
}) => {
  const {
    gridColumnStart,
    gridColumnSpan,
    gridRowStart,
    gridRowSpan,
    accentCellCount,
    accentCellIndex,
    firstInSplit,
    inFlexbox,
    inSplit,
    extraRules: extraRulesCellContext
  } = React.useContext(CellContext)

  const { isCard } = React.useContext(CardContext)

  const forcedMobile = forceMobile(isCard)

  const { order, extraRules: extraRulesAddonContext } = React.useContext(
    AddonContext
  )

  const extraRules = {
    ...extraRulesCellContext,
    ...extraRulesAddonContext,
    ...extraRulesProp
  }

  const sx: any = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginX: 8, // sm / 2
    paddingY: 6, // xs / 2
    order: order ?? forcedMobile([mobileOrder, undefined, 'initial']),
    ...extraRules
  }

  if (!inFlexbox) {
    Object.assign(sx, {
      gridColumn: forcedMobile([
        typeof accentCellIndex === 'number' && accentCellCount === 2
          ? `${accentCellIndex + 1} / span 1`
          : '1 / -1',
        undefined,
        `${gridColumnStart} / span ${gridColumnSpan}`
      ]),
      msGridColumn: `${gridColumnStart}`,
      msGridColumnSpan: `${gridColumnSpan}`,
      gridRow: forcedMobile([
        'initial',
        undefined,
        `${gridRowStart} / span ${gridRowSpan}`
      ]),
      msGridRow: forcedMobile(['initial', undefined, `${gridRowStart}`]),
      msGridRowSpan: forcedMobile(['initial', undefined, `${gridRowSpan}`])
    })
  }

  if (inSplit) {
    sx['+ .in-split:not(.first-in-split)'] = {
      borderTop: '1px solid',
      variant: 'compounds.product-table.cellBase.variants.inSplit'
    }
  }

  return (
    <div
      sx={sx}
      className={[
        inSplit ? 'in-split' : 'not-in-split',
        firstInSplit ? 'first-in-split' : 'not-first-in-split'
      ].join(' ')}
    >
      <div
        sx={{
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 'auto',
          height: '100%',
          boxSizing: 'border-box'
        }}
        className={className}
      >
        {children}
      </div>
    </div>
  )
}
export default ProductTableCellBase
