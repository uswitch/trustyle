/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

const getGutterSize = (theme: any): any =>
  theme?.sizes?.grid?.gutter || theme?.grid?.sizes?.gutter

const getVerticalGutterSize = (theme: any): string | number =>
  theme?.sizes?.grid?.verticalGutter || theme?.grid?.sizes?.verticalGutter

const getContainerSize = (theme: any): number | number[] =>
  theme?.sizes?.grid?.container?.maxWidth || theme?.grid?.container?.maxWidth

const alwaysGetArray = (valueOrArray: any): any => [].concat(valueOrArray)

const getValueFromSize = (theme: any, size: string | number): number =>
  typeof size === 'number' ? size : theme.space[size] || 0

const getHalf = (value: number): number => value / 2

// if we originally had a value outside of an array return it that way
// otherwise the underfined values will cause incorrect responsivness
const removeArrayIfSingleItem = (arr: number[]): number | number[] =>
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
          removeArrayIfSingleItem(
            alwaysGetArray(getContainerSize(theme)).map(
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
          removeArrayIfSingleItem(
            alwaysGetArray(getGutterSize(theme))
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
          removeArrayIfSingleItem(
            alwaysGetArray(getGutterSize(theme))
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
                removeArrayIfSingleItem(
                  alwaysGetArray(cols).map(
                    (colValue: number, index: number): string =>
                      `calc(${(alwaysGetArray(span)[index] / colValue) *
                        100}% - ${getValueFromSize(
                        theme,
                        alwaysGetArray(getGutterSize(theme))[index]
                      ) * 2}px)`
                  )
                )
            }
          : {}),
        ...(offset
          ? {
              ml: (theme: any) =>
                removeArrayIfSingleItem(
                  alwaysGetArray(cols).map(
                    (colValue: number, index: number): string =>
                      `calc(${(alwaysGetArray(offset)[index] / colValue) *
                        100}% + ${getValueFromSize(
                        theme,
                        alwaysGetArray(getGutterSize(theme))[index]
                      )}px`
                  )
                )
            }
          : {
              ml: (theme: any) =>
                removeArrayIfSingleItem(
                  alwaysGetArray(getGutterSize(theme))
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
