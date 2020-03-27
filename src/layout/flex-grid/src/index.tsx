/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

const getSpaceValue = (key: string) => (theme: any = {}): number =>
  theme.space[key]

const getNegativeSpaceValue = (key: string) => (theme: any = {}): string =>
  `-${getSpaceValue(key)(theme)}px`

const getGutterSize = (theme: any): string => theme?.grid?.sizes?.gutter

const getVerticalGutterSize = (theme: any): string | number =>
  theme?.grid?.sizes?.verticalGutter

const getContainerSize = (theme: any): number =>
  theme?.grid?.container?.maxWidth

const mediaQueryFunction = (
  data: number | number[],
  fn: (colValue: number, index: number) => string
): string | string[] => {
  if (Array.isArray(data)) {
    return data.map(fn)
  }
  return fn(data, 0)
}

interface ContainerProps {
  cols?: number
  span?: number
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
  cols?: number | number[]
  direction?: any
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
        mx: (theme: any): any => getNegativeSpaceValue(getGutterSize(theme)),
        display: 'flex',
        flexDirection: direction,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        overflowX: 'hidden',
        overflowY: 'visible'
      }}
      {...props}
    >
      {childrenArray.map((child: React.ReactNode) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { cols })
          : child
      )}
    </div>
  )
}

interface ColProps {
  cols?: number | number[]
  span?: number | number[]
  offset?: number | number[]
}

export const Col: React.FC<ColProps> = ({
  children,
  cols = 12,
  span,
  offset,
  ...props
}) => {
  if (Array.isArray(span) && !Array.isArray(cols)) {
    const colsNumber = cols
    cols = []
    for (let i = 0; i < span.length; i++) {
      cols.push(colsNumber)
    }
  }

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
                mediaQueryFunction(cols, (colValue, index) => {
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
                mediaQueryFunction(cols, (colValue, index) => {
                  return `calc(${((Array.isArray(offset)
                    ? offset[index]
                    : offset) /
                    colValue) *
                    100}% + ${getSpaceValue(getGutterSize(theme))(theme)}px)`
                })
            }
          : { ml: getGutterSize })
      }}
      {...props}
    >
      {children}
    </div>
  )
}
