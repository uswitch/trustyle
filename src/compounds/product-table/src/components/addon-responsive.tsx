/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { Addon, AddonContext } from '../generics'

type Position = 'header' | 'body' | 'grid' | 'hidden'

export interface AddonProps extends React.HTMLAttributes<any> {
  bodyOrder?: number
  gridOrder?: number
  headerOrder?: number
  positions: Position[]
}

const positionsToDisplay = (positions: Position[], current: Position) =>
  positions.map(position => (position === current ? 'block' : 'none'))

const ProductTableAddonResponsive: Addon<AddonProps> = {
  defaultArguments: {
    positions: ['body', 'header']
  },

  body: ({ children, bodyOrder, positions }) => {
    if (!positions.includes('body')) {
      return null
    }

    return (
      <AddonContext.Provider
        value={{
          inAddon: 'body-responsive',
          order: bodyOrder,
          extraRules: {
            display: positionsToDisplay(positions, 'body'),
            marginBottom: [0, 'sm']
          }
        }}
      >
        {children}
      </AddonContext.Provider>
    )
  },

  grid: ({ children, gridOrder, positions }) => {
    if (positions[0] === 'grid') {
      console.error(
        'Using the grid position on mobile will cause a gap on desktop - use the body position instead'
      )
    }

    if (!positions.includes('grid')) {
      return null
    }

    return (
      <AddonContext.Provider
        value={{
          inAddon: 'grid-responsive',
          order: gridOrder,
          extraRules: {
            display: positionsToDisplay(positions, 'grid'),
            marginBottom: [0, 'sm']
          }
        }}
      >
        {children}
      </AddonContext.Provider>
    )
  },

  header: ({ children, headerOrder, positions }) => {
    if (!positions.includes('header')) {
      return null
    }

    return (
      <AddonContext.Provider
        value={{
          inAddon: 'header-responsive',
          order: headerOrder,
          extraRules: {
            display: positionsToDisplay(positions, 'header')
          }
        }}
      >
        {children}
      </AddonContext.Provider>
    )
  }
}

export default ProductTableAddonResponsive
