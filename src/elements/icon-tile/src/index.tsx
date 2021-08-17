/** @jsx jsx */

import * as React from 'react'
import { jsx, Themed } from 'theme-ui'

export enum DisplayVariant {
  Horizontal = 'horizontal',
  Vertical = 'vertical'
}

interface Props extends React.HTMLAttributes<any> {
  icon: React.ReactNode
  className?: string
  displayVariant?: DisplayVariant
}

const IconTile: React.FC<Props> = ({
  icon,
  children,
  className,
  displayVariant
}) => {
  return (
    <div
      sx={{
        boxSizing: 'border-box' as const,
        display: 'flex',
        flexDirection:
          displayVariant === DisplayVariant.Vertical
            ? ('column' as const)
            : ['column' as const, 'column' as const, 'row' as const],
        height:
          displayVariant === DisplayVariant.Vertical ? 136 : [136, 136, 95],
        backgroundColor: 'white',
        padding:
          displayVariant === DisplayVariant.Vertical
            ? 'sm'
            : ['sm', 'sm', 'lg'],
        paddingTop: 0,
        textAlign: 'center' as const,
        borderRadius: 8,
        color: 'grey-100',
        textDecoration: 'none',
        variant: 'elements.icon-tile.main',
        ':hover': {
          opacity: 0.9
        },
        alignItems: 'center'
      }}
      className={className}
    >
      <div
        sx={{
          flex: displayVariant === DisplayVariant.Vertical ? 1 : [1, null, 0],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {icon}
      </div>
      <Themed.p
        sx={{
          flex:
            displayVariant === DisplayVariant.Vertical ? null : [null, null, 1],
          fontSize: 'md',
          marginY: 0,
          variant: 'elements.icon-tile.text'
        }}
      >
        {children}
      </Themed.p>
    </div>
  )
}

export default IconTile
