/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import {
  Addon,
  AddonArg,
  CardContext,
  CellContext,
  forceMobile
} from '../generics'

import ProductTableCellBase from './cell-base'
import ProductTableCellCta from './cell-cta'
import ProductTableCellImage from './cell-image'
import { ROWS } from './cell-split'
import RowWrapper from './rowWrapper'
import Header from './header'

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  badges?: React.ReactNode[]
  preTitle?: React.ReactNode
  rowTitle?: React.ReactNode
  subtitle?: React.ReactNode
  addons?: AddonArg[]
  clickableRow?: string
  image?: React.ReactNode
  disabled?: boolean
  card?: boolean
}

const ProductTableRow: React.FC<RowProps> = ({
  badges = [],
  preTitle,
  rowTitle,
  subtitle,
  addons = [],
  children,
  id,
  clickableRow,
  image,
  disabled,
  card = false
}) => {
  const forcedMobile = forceMobile(card)

  const addonsFor = (key: keyof Addon): React.ReactNode[] =>
    addons.map(({ addon, component, options }, i) => {
      options = Object.assign({}, addon.defaultArguments, options)

      // @todo why isn't the check in the responsive addon doing this?
      if (options.positions && !options.positions.includes(key)) {
        return null
      }

      if (addon[key]) {
        const AddonPart = addon[key] as React.FC
        return (
          <AddonPart key={i} {...options}>
            {component}
          </AddonPart>
        )
      }
    })

  // @todo All addons go at the start - is there a better way to do this?
  let nonNullChildren = addonsFor('grid')
    .concat(React.Children.toArray(children))
    .filter(c => c) as React.ReactElement[]

  // When disabled, replace CTA with empty base cell
  if (disabled) {
    nonNullChildren = nonNullChildren.filter(
      child => child.type !== ProductTableCellCta
    )
    // eslint-disable-next-line react/jsx-key
    nonNullChildren = [...nonNullChildren, <ProductTableCellBase />]
  }

  const accentCells = nonNullChildren.filter(child => child.props.accent)

  if (accentCells.length > 2) {
    throw new Error('Primary cell count cannot be above two')
  }

  const cols = nonNullChildren.length

  const hasCellImage = nonNullChildren
    .map((child: any) => child.type)
    .includes(ProductTableCellImage)

  /**
   * Row numbers explained:
   *
   * ROW 1: reserved for addons above header (auto height)
   * ROW 2: used for header
   * ROW 3: reserved for addons below header (auto height)
   * ROW 4-9: used for grid
   * ROW 10-12: reserved for addons below grid (footer addon uses 11)
   */

  return (
    <CardContext.Provider value={{ isCard: card }}>
      <section
        id={id}
        sx={{
          position: 'relative',
          border: '1px solid',
          marginTop: badges.length ? [10, 15] : 0,
          marginBottom: 'md',
          ':last-of-type': {
            marginBottom: 0
          },
          variant: image
            ? 'compounds.product-table.variants.redesign.row.main'
            : 'compounds.product-table.row.main',
          pointerEvents: disabled ? 'none' : null,
          opacity: disabled ? '0.5' : '1'
        }}
      >
        <RowWrapper link={clickableRow} headerImage={image}>
          {!!badges.length && (
            <div
              sx={{
                position: 'absolute',
                top: 0,
                transform: 'translateY(-50%)'
              }}
            >
              {badges.map((badge, i) => (
                <span sx={{ marginRight: 'sm' }} key={i}>
                  {badge}
                </span>
              ))}
            </div>
          )}
          <Header
            badges={badges}
            image={image}
            preTitle={preTitle}
            rowTitle={rowTitle}
            subtitle={subtitle}
            addons={addonsFor('header')}
          />
          <div
            sx={{
              display: 'grid',
              gridTemplateColumns: forcedMobile([
                'repeat(2, 1fr)',
                null,
                `repeat(${image ? cols - 1 : cols}, 1fr)`
              ]),
              msGridColumns: forcedMobile([
                '(1fr)[2]',
                null,
                `(1fr)[${image ? cols - 1 : cols}]`
              ]),
              gridTemplateRows: forcedMobile([
                'auto',
                null,
                `repeat(3, auto) repeat(${ROWS}, 1fr) repeat(3, auto)`
              ]),
              msGridRows: forcedMobile([
                'auto',
                null,
                `(auto)[3] (1fr)[${ROWS}] (auto)[3]`
              ]),
              marginX: -8,
              marginY: -6,
              marginTop: image ? 0 : -6,
              variant: 'compounds.product-table.row.grid',

              // Flex in mobile IE11 (?!) as auto-layout for grid isn't supported
              '@media all and (max-width: 990px) and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
                display: 'flex',
                flexDirection: 'column'
              }
            }}
            // @ts-ignore
            css={{
              display: '-ms-grid'
            }}
          >
            {nonNullChildren.map((child, index) => (
              <CellContext.Provider
                value={{
                  gridRowStart: 4,
                  gridRowSpan: ROWS,
                  gridColumnStart:
                    image && hasCellImage && child.type === ProductTableCellCta
                      ? index
                      : index + 1,
                  gridColumnSpan: 1,
                  accentCellCount: accentCells.length,
                  accentCellIndex:
                    child.props.accent && accentCells.indexOf(child),
                  extraRules: {
                    variant:
                      image &&
                      child.type !== ProductTableCellCta &&
                      `compounds.product-table.variants.redesign.cellContext.${
                        hasCellImage ? 'variants.cellImage' : 'main'
                      }`
                  }
                }}
                key={index}
              >
                {child}
              </CellContext.Provider>
            ))}

            <CellContext.Provider
              value={{
                gridRowStart: 1,
                gridRowSpan: ROWS,
                gridColumnStart: 1,
                gridColumnSpan: cols
              }}
            >
              {addonsFor('body')}
            </CellContext.Provider>
          </div>
        </RowWrapper>
      </section>
    </CardContext.Provider>
  )
}

export default ProductTableRow
