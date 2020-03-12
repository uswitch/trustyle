/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

const DEFAULT_GUTTER_SIZE = 'xs'

const getSpaceValue = (key: string) => (theme: any = {}) => theme.space[key]

const getNegativeSpaceValue = (key: string) => (theme: any = {}) =>
  `-${getSpaceValue(key)(theme)}px`

const getGutterSize = (theme: any) =>
  theme?.grid?.sizes?.gutter || DEFAULT_GUTTER_SIZE

const mediaQueryFunction = (data: any, fn: any) => {
  if (Array.isArray(data)) {
    return data.map(fn)
  }
  return fn(data, 0)
}

interface ContainerProps {
  children: any
  className?: string
  variant?: string
  cols?: any
  span?: any
}

export const Container: React.FC<ContainerProps> = ({
  children,
  cols,
  span,
  ...props
}) => {
  return (
    <div
      sx={{
        mx: 'auto',
        px: getGutterSize,
        maxWidth: theme =>
          `calc(${1160 * (cols && span ? span / cols : 1)}px - ${getSpaceValue(
            'sm'
          )(theme)}px)`
      }}
      {...props}
    >
      {children}
    </div>
  )
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
  ...props
}) => {
  const childrenArray = Array.isArray(children) ? children : [children]
  return (
    <div
      sx={{
        variant: `grid.row`,
        mx: getNegativeSpaceValue('xs'),
        display: 'flex',
        flexDirection: direction,
        overflowX: 'hidden'
      }}
      {...props}
    >
      {childrenArray.map((child: any) => React.cloneElement(child, { cols }))}
    </div>
  )
}

interface ColProps {
  children: any
  cols?: number
  className?: string
  span?: any
  sx?: any
  offset?: any
}

export const Col: React.FC<ColProps> = ({
  children,
  cols = 12,
  span,
  offset,
  sx = {},
  ...props
}) => {
  return (
    <div
      sx={{
        variant: `grid.col`,
        boxSizing: 'border-box',
        mr: 'xs',
        mb: DEFAULT_GUTTER_SIZE,
        flexGrow: span ? 0 : 1,
        flexShrink: 0,
        flexBasis: `auto`,
        ...(span
          ? {
              width: theme =>
                mediaQueryFunction(cols, (colValue: number, index: number) => {
                  console.log({ colValue, cols, index })
                  return `calc(${((Array.isArray(span) ? span[index] : span) /
                    colValue) *
                    100}% - ${getSpaceValue('sm')(theme)}px)`
                })
            }
          : {}),
        ...(offset
          ? {
              ml: theme =>
                mediaQueryFunction(
                  cols,
                  (colValue: number, index: number) =>
                    `calc(${((Array.isArray(offset) ? offset[index] : offset) /
                      colValue) *
                      100}% + ${getSpaceValue('sm')(theme) / 2}px)`
                )
            }
          : { ml: 'xs' }),
        ...sx
      }}
      {...props}
    >
      {children}
    </div>
  )
}
