/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { breakpoints, Breakpoints } from '@uswitch/trustyle.styles'

const DEFAULT_GUTTER_SIZE = 'xs'

const getSpaceValue = (key: string) => (theme: any = {}) =>  theme.space[key]

const getNegativeSpaceValue = (key: string) => (theme: any = {}) => `-${getSpaceValue(key)(theme)}px`

const getGutterSize = (theme: any) => theme?.grid?.sizes?.gutter || DEFAULT_GUTTER_SIZE

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
  cols?: number,
  direction?: string,
  className?: string
  variant?: string
}

export const Row: React.FC<RowProps> = ({
  children,
  cols = 12,
  direction = 'row',
  className = '',
  ...props
}) => {
  return <div
    className={className}
    sx={{
      variant: `grid.row`,
      mx: getNegativeSpaceValue('xs'),
      mb: DEFAULT_GUTTER_SIZE,
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
  span?: number
}

export const Col: React.FC<ColProps> = ({
  children,
  cols = 12,
  span,
  className = '',
  ...props
}) => {
  return <div
    className={className}
    sx={{
      variant: `grid.col`,
      boxSizing: 'border-box',
      mx: getSpaceValue('xs'),
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: `auto`,
      bg: 'red',
      ...(span ? { width: theme => `calc(${(span / cols) * 100}% - ${getSpaceValue('sm')(theme)}px)` } : {})
    }}
    {...props}
  >
    {children}
  </div>
}