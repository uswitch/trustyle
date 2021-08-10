/** @jsx jsx */
import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'

import CellBase from './cell-base'
import { WireFrame, WireFrameCell } from './wireframe-cell'

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  badges?: React.ReactNode[]
  preTitle?: React.ReactNode
  rowTitle?: React.ReactNode
  subtitle?: React.ReactNode
  addons?: React.ReactNode[]
  image?: React.ReactNode
  card?: React.ReactNode
  isWireFrame?: boolean
}

const ProductTableHeader: React.FC<HeaderProps> = ({
  badges = [],
  preTitle,
  rowTitle,
  subtitle,
  addons = [],
  image,
  card = false,
  isWireFrame = false
}) => {
  const {
    theme: {
      compounds: {
        'product-table': { padding: { paddingBottom = ['0', 'sm'] } = {} } = {}
      }
    }
  }: any = useThemeUI()

  const pb = paddingBottom || '0'

  const wireFrameStyles = {
    image: {
      width: ['45%', '15%'],
      marginRight: 'xxs',
      height: '70px',
      borderRadius: '3px'
    },
    title: {
      width: ['93%', '55%'],
      height: '14px'
    }
  }

  return (
    <div
      sx={{
        pb: image ? '' : 'xs'
      }}
    >
      <div
        sx={{
          borderBottom: image ? '0' : '1px solid',
          paddingBottom: image ? pb : 'sm',
          marginTop: badges.length ? 0 : -6,
          display: 'flex',
          alignItems: card ? 'baseline' : 'center',
          flexDirection: card ? 'column' : 'row',
          minHeight: card ? ['0', '0', '160px'] : '0',
          variant:
            badges.length && !card
              ? 'compounds.product-table.badge-wrapper'
              : badges.length && card
              ? 'compounds.product-table.badge-wrapper.card'
              : null
        }}
      >
        {isWireFrame && <WireFrameCell styles={wireFrameStyles.image} />}
        {!isWireFrame && image && image}
        {isWireFrame && <WireFrame type="header" />}
        {!isWireFrame && rowTitle && (
          <CellBase
            sx={{
              marginX: -8,
              marginY: -6
            }}
          >
            {preTitle && (
              <span
                sx={{
                  fontSize: 'xs',
                  variant: 'compounds.product-table.row.pretitle'
                }}
              >
                {preTitle}
              </span>
            )}
            <h3
              sx={{
                margin: 0,
                variant: `compounds.product-table.${image &&
                  'variants.redesign.'}row.title`,
                pl: card && '0 !important'
              }}
            >
              {rowTitle}
            </h3>
            {subtitle && (
              <span
                sx={{
                  fontSize: 'xs',
                  variant: 'compounds.product-table.row.subtitle'
                }}
              >
                {subtitle}
              </span>
            )}
          </CellBase>
        )}
        {addons}
      </div>
    </div>
  )
}

export default ProductTableHeader
