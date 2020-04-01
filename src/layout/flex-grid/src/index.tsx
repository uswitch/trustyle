/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

function getSpaceValue(key: number | string, index?: number) {
  return (theme: any = {}): any => {
    const spaceValues = ([] as any[])
      .concat(key)
      .map(it => (typeof it === 'number' ? it : theme.space[it] || 0))

    return index ? spaceValues[index] || spaceValues[0] : spaceValues || 0
  }
}

const getGutterSize = (theme: any): any =>
  theme?.sizes?.grid?.gutter || theme?.grid?.sizes?.gutter

const getVerticalGutterSize = (theme: any): string | number =>
  theme?.sizes?.grid?.verticalGutter || theme?.grid?.sizes?.verticalGutter

const getContainerSize = (theme: any): number | number[] =>
  theme?.sizes?.grid?.container?.maxWidth || theme?.grid?.container?.maxWidth

const getArray = (valueOrArray: any): any => [].concat(valueOrArray)

const getValueFromSize = (theme: any, size: string | number): number =>
  typeof size === 'number' ? size : theme.space[size] || 0

const getHalf = (value: number): number => value / 2

// if we originally had a value outside of an array return it that way
// otherwise the underfined values will cause incorrect responsivness
const formatArray = (arr: number[]): number | number[] =>
  arr.length === 1 ? arr[0] : arr

const toPx = (value: number) => `${value}px`

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
        boxSizing: 'border-box',
        px: getGutterSize,
        maxWidth: (theme: any) =>
          formatArray(
            getArray(getContainerSize(theme)).map(
              (maxWidth: number) => maxWidth * (cols && span ? span / cols : 1)
            )
          )
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
        mx: (theme: any): any =>
          formatArray(
            getArray(getGutterSize(theme))
              .map((value: any) => getValueFromSize(theme, value))
              .map(getHalf)
              .map((gutterValue: number) => `${gutterValue * -1}`)
              .map(toPx)
          ),
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
        mr: (theme: any) =>
          formatArray(
            getArray(getGutterSize(theme))
              .map((value: any) => getValueFromSize(theme, value))
              .map(getHalf)
              .map(toPx)
          ),
        mb: getVerticalGutterSize,
        flexGrow: span ? 0 : 1,
        flexShrink: 0,
        flexBasis: `auto`,
        ...(span
          ? {
              width: (theme: any) =>
                formatArray(
                  getArray(cols).map(
                    (colValue: number, index: number): string => {
                      return `calc(${((Array.isArray(span)
                        ? span[index]
                        : span) /
                        colValue) *
                        100}% - ${getSpaceValue(
                        getGutterSize(theme),
                        index
                      )(theme) * 2}px)`
                    }
                  )
                )
            }
          : {}),
        ...(offset
          ? {
              ml: (theme: any) =>
                formatArray(
                  getArray(cols).map(
                    (colValue: number, index: number): string => {
                      return `calc(${((Array.isArray(offset)
                        ? offset[index]
                        : offset) /
                        colValue) *
                        100}% + ${getSpaceValue(
                        getGutterSize(theme),
                        index
                      )(theme)}px)`
                    }
                  )
                )
            }
          : {
              ml: (theme: any) =>
                formatArray(
                  getArray(getGutterSize(theme))
                    .map((value: any) => getValueFromSize(theme, value))
                    .map(getHalf)
                    .map(toPx)
                )
            })
      }}
      {...props}
    >
      {children}
    </div>
  )
}
