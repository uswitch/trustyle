/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

const DEFAULT_GUTTER_SIZE = 'xs'

const getSpaceValue = (key: string) => (theme: any = {}) =>  theme.space[key]

const getNegativeSpaceValue = (key: string) => (theme: any = {}) => `-${getSpaceValue(key)(theme)}px`

const getGutterSize = (theme: any) => theme?.grid?.sizes?.gutter || DEFAULT_GUTTER_SIZE

const mediaQueryFunction = (data: any, fn: any) => {
  if (Array.isArray(data)) {
    return data.map(fn)
  }
  return fn(data)
}

interface ContainerProps {
  children: any
  className?: string
  variant?: string
}


export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  variant = 'lg',
  ...props
}) => {
  return <div
    className={className}
    sx={{
      mx: 'auto',
      px: getGutterSize,
      variant: `grid.container.${variant}`
    }}
    {...props}
  >
    {children}
  </div>
}

interface RowProps {
  children: any
  cols?: any
  direction?: any
  className?: string
  variant?: string
}

export const Row: React.FC<RowProps> = ({
  children,
  cols = 12,
  direction = ['column', 'row', 'row'],
  className = '',
  ...props
}) => {
  return <div
    className={className}
    sx={{
      variant: `grid.row`,
      mx: getNegativeSpaceValue('xs'),
      display: 'flex',
      flexDirection: direction
    }}
    {...props}
  >
    {children.map((child: any) => React.cloneElement(child, { cols }))}
  </div>
}

interface ColProps {
  children: any
  cols?: number
  className?: string
  span?: any,
  sx?: any
}

export const Col: React.FC<ColProps> = ({
  children,
  cols = 12,
  span,
  sx = {},
  ...props
}) => {
  return <div
    sx={{
      variant: `grid.col`,
      boxSizing: 'border-box',
      mx: getSpaceValue('xs'),
      mb: DEFAULT_GUTTER_SIZE,
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: `auto`,
      bg: 'red',
      ...(span ? { 
        width: theme => mediaQueryFunction(
          span, 
          (spanValue: number, index: number) => `calc(${(spanValue / (Array.isArray(cols) ? cols[index] : cols)) * 100}% - ${getSpaceValue('sm')(theme)}px)`
        )
      } : {}),
      ...sx
    }}
    {...props}
  >
    {children}
  </div>
}