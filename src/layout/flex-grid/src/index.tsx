/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

function getSpaceValue(
  key: string | string[] | number | number[]
): (theme: object) => number[]

function getSpaceValue(
  key: string | string[] | number | number[],
  index?: number
): (theme: object) => number

function getSpaceValue(key: any, index?: any) {
  return (theme: any = {}): any => {
    const spaceValues = ([] as any[])
      .concat(key)
      .map(it => (typeof it === 'number' ? it : theme.space[it] || 0))

    return index ? spaceValues[index] || spaceValues[0] : spaceValues || 0
  }
}

function getNegativeSpaceValue(
  key: string | string[] | number | number[]
): (theme: object) => string[]

function getNegativeSpaceValue(
  key: string | string[] | number | number[],
  index?: number
): (theme: object) => string

function getNegativeSpaceValue(key: any, index?: any) {
  return (theme: any = {}): any => {
    const spaceValues = ([] as number[])
      .concat(getSpaceValue(key)(theme))
      .map(it => `-${it}px`)

    return index ? spaceValues[index] || spaceValues[0] : spaceValues || 0
  }
}

const getGutterSize = (theme: any): string | string[] | number | number[] =>
  theme?.sizes?.grid?.gutter || theme?.grid?.sizes?.gutter

const getVerticalGutterSize = (theme: any): string | number =>
  theme?.sizes?.grid?.verticalGutter || theme?.grid?.sizes?.verticalGutter

const getContainerSize = (theme: any): number | number[] =>
  theme?.sizes?.grid?.container?.maxWidth || theme?.grid?.container?.maxWidth

const mediaQueryFunction = (
  data: number | number[],
  fn: (colValue: number, index: number) => string
): string | string[] => {
  if (Array.isArray(data)) {
    return data.map(fn)
  }
  return fn(data, 0)
}

// Not extending React.HTMLAttributes as used again in FromJsonProps
interface ContainerProps {
  cols?: number
  span?: number
}

export const Container: React.FC<ContainerProps &
  React.HTMLAttributes<any>> = ({ children, cols, span, ...props }) => {
  return (
    <div
      sx={{
        mx: 'auto',
        px: getGutterSize,
        maxWidth: (theme: any) =>
          ([] as number[])
            .concat(getContainerSize(theme))
            .map(maxWidth => maxWidth * (cols && span ? span / cols : 1))
      }}
      {...props}
    >
      {children}
    </div>
  )
}

// Not extending React.HTMLAttributes as used again in FromJsonProps
interface RowProps {
  cols?: number | number[]
  direction?: any
  wrap?: boolean
}

export const Row: React.FC<RowProps & React.HTMLAttributes<any>> = ({
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
          getNegativeSpaceValue(getGutterSize(theme))(theme),
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

// Not extending React.HTMLAttributes as used again in FromJsonProps
interface ColProps {
  cols?: number | number[]
  span?: number | number[]
  offset?: number | number[]
}

export const Col: React.FC<ColProps & React.HTMLAttributes<any>> = ({
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
                    100}% - ${getSpaceValue(
                    getGutterSize(theme),
                    index
                  )(theme) * 2}px)`
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
                    100}% + ${getSpaceValue(
                    getGutterSize(theme),
                    index
                  )(theme)}px)`
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

interface FromJsonProps extends React.HTMLAttributes<any> {
  json: (RowProps & {
    layout: (ColProps & {
      key: number
    })[]
  })[]
  childrenArray: React.ReactNode[]
}

export const GridFromJson: React.FC<FromJsonProps> = ({
  json,
  childrenArray
}) => {
  // In the future, string key could be support for contentful block ID
  const getChildFromKey = (key: number): React.ReactNode => {
    return childrenArray[key]
  }

  return (
    <React.Fragment>
      {json.map(({ layout, ...rowProps }, i) => {
        return (
          <Row {...rowProps} key={i}>
            {layout.map(({ key, ...colProps }) => {
              return (
                <Col {...colProps} key={key}>
                  {getChildFromKey(key)}
                </Col>
              )
            })}
          </Row>
        )
      })}
    </React.Fragment>
  )
}
