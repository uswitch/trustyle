/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

const getSpaceValue = (key: string) => (theme: any = {}) => theme.space[key]

const getNegativeSpaceValue = (key: string) => (theme: any = {}) =>
  `-${getSpaceValue(key)(theme)}px`

const getGutterSize = (theme: any) => theme?.grid?.sizes?.gutter

const getVerticalGutterSize = (theme: any) => theme?.grid?.sizes?.verticalGutter

const getContainerSize = (theme: any) => theme?.grid?.container?.maxWidth

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
        maxWidth: (theme: any) =>
          `calc(${getContainerSize(theme) *
            (cols && span ? span / cols : 1)}px - ${getSpaceValue('sm')(
            theme
          )}px)`
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
  wrap?: boolean
}

export const Row: React.FC<RowProps> = ({
  children,
  cols = 12,
  direction = ['column', 'row', 'row'],
  wrap = false,
  ...props
}) => {
  const childrenArray = Array.isArray(children) ? children : [children]
  return (
    <div
      sx={{
        variant: `grid.row`,
        mx: (theme: any) => getNegativeSpaceValue(getGutterSize(theme)),
        display: 'flex',
        flexDirection: direction,
        flexWrap: wrap ? 'wrap' : 'nowrap',
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
        mr: getGutterSize,
        mb: getVerticalGutterSize,
        flexGrow: span ? 0 : 1,
        flexShrink: 0,
        flexBasis: `auto`,
        ...(span
          ? {
              width: (theme: any) =>
                mediaQueryFunction(cols, (colValue: number, index: number) => {
                  return `calc(${((Array.isArray(span) ? span[index] : span) /
                    colValue) *
                    100}% - ${getSpaceValue(getGutterSize(theme))(theme) *
                    2}px)`
                })
            }
          : {}),
        ...(offset
          ? {
              ml: (theme: any) =>
                mediaQueryFunction(
                  cols,
                  (colValue: number, index: number) =>
                    `calc(${((Array.isArray(offset) ? offset[index] : offset) /
                      colValue) *
                      100}% + ${getSpaceValue(getGutterSize(theme))(theme)}px)`
                )
            }
          : { ml: getGutterSize }),
        ...sx
      }}
      {...props}
    >
      {children}
    </div>
  )
}
