/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { Addon, CellContext } from './generics'

type Position = 'header' | 'body' | 'grid'

export interface AddonProps extends React.HTMLAttributes<any> {
  bodyOrder?: number
  gridOrder?: number
  headerOrder?: number
  positions: Position[]
}

const positionsToDisplay = (positions: Position[], current: Position) =>
  positions.map(position => (position === current ? 'block' : 'none'))

const RateTableAddonResponsive: Addon<AddonProps> = {
  defaultArguments: {
    positions: ['body', 'header']
  },

  body: ({ children, bodyOrder, positions }) => {
    if (!positions.includes('body')) {
      return null;
    }

    return (
      <CellContext.Provider
        value={{
          inAddon: 'header',
          extraRules: {
            display: positionsToDisplay(positions, 'body'),
            marginTop: [0, -6],
            marginBottom: [0, 'sm'],
            // As this is spread into another object, `order` cannot be undefined
            ...(typeof bodyOrder === 'number' ? { order: bodyOrder } : {})
          }
        }}
      >
        {children}
      </CellContext.Provider>
    )
  },

  grid: ({ children, gridOrder, positions }) => {
    if (positions[0] === 'grid') {
      console.error('Using the grid position on mobile will cause a gap on desktop - use the body position instead')
    }

    if (!positions.includes('grid')) {
      return null;
    }

    const { extraRules, ...parentCellContext } = React.useContext(CellContext)

    return (
      <CellContext.Provider
        value={{
          ...parentCellContext,
          inAddon: 'header',
          extraRules: {
            ...extraRules,
            display: positionsToDisplay(positions, 'grid'),
            marginTop: [0, -6],
            marginBottom: [0, 'sm'],
            // As this is spread into another object, `order` cannot be undefined
            ...(typeof gridOrder === 'number' ? { order: gridOrder } : {})
          }
        }}
      >
        {children}
      </CellContext.Provider>
    )
  },

  header: ({ children, headerOrder, positions }) => {
    if (!positions.includes('header')) {
      return null;
    }

    return (
      <CellContext.Provider
        value={{
          inAddon: 'header',
          extraRules: {
            display: positionsToDisplay(positions, 'header'),
            // As this is spread into another object, `order` cannot be undefined
            ...(typeof headerOrder === 'number' ? { order: headerOrder } : {})
          }
        }}
      >
        {children}
      </CellContext.Provider>
    )
  }
}

export default RateTableAddonResponsive
