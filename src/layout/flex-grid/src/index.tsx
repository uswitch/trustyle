/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

const getGutterSize = (theme: any): any =>
  theme?.sizes?.grid?.gutter || theme?.grid?.sizes?.gutter

const getVerticalGutterSize = (
  theme: any
): string | number | (string | number)[] =>
  theme?.sizes?.grid?.verticalGutter || theme?.grid?.sizes?.verticalGutter

const getContainerSize = (theme: any): number | number[] =>
  theme?.sizes?.grid?.container?.maxWidth || theme?.grid?.container?.maxWidth

const castArray = (valueOrArray: any): any => [].concat(valueOrArray) // wiiilllllson

const getValueFromSize = (theme: any, size: string | number): number =>
  typeof size === 'number' ? size : theme.space[size] || 0

const getHalf = (value: number): number => value / 2

// if we originally had a value outside of an array return it that way
// otherwise the undefined values will cause incorrect responsivness
const uncastArrayIfSingle = (arr: number[]): number | number[] =>
  arr.length === 1 ? arr[0] : arr

const toPx = (value: number) => `${value}px`

const getValueFromBreakpointIndex = (arr: number[], index: number): number => {
  if (arr[index]) return arr[index]
  return arr[arr.length - 1]
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
        boxSizing: 'border-box',
        px: getGutterSize,
        maxWidth: (theme: any) =>
          uncastArrayIfSingle(
            castArray(getContainerSize(theme)).map(
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
  wrap = true,
  ...props
}) => {
  const childrenArray = Array.isArray(children) ? children : [children]
  return (
    <div
      sx={{
        variant: `grid.row`,
        mx: (theme: any): any =>
          uncastArrayIfSingle(
            castArray(getGutterSize(theme))
              .map((value: any) => getValueFromSize(theme, value))
              .map(getHalf)
              .map((gutterValue: number) => `${gutterValue * -1}`)
              .map(toPx)
          ),
        display: 'flex',
        flexDirection: direction,
        flexWrap: wrap ? 'wrap' : 'nowrap'
      }}
      {...props}
    >
      {childrenArray.map((child: React.ReactNode, key) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { cols, key })
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
        mr: (theme: any) =>
          uncastArrayIfSingle(
            castArray(getGutterSize(theme))
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
                uncastArrayIfSingle(
                  castArray(cols).map(
                    (colValue: number, index: number): string => {
                      const gutterValue = toPx(
                        getValueFromBreakpointIndex(
                          castArray(getGutterSize(theme)).map((value: any) =>
                            getValueFromSize(theme, value)
                          ),
                          index
                        )
                      )

                      const currentSpan = getValueFromBreakpointIndex(
                        castArray(span),
                        index
                      )
                      return `calc(${(currentSpan / colValue) *
                        100}% - ${gutterValue})`
                    }
                  )
                )
            }
          : {}),
        ...(offset
          ? {
              ml: (theme: any) =>
                uncastArrayIfSingle(
                  castArray(cols).map(
                    (colValue: number, index: number): string => {
                      const gutterValue = getValueFromBreakpointIndex(
                        castArray(getGutterSize(theme)).map((value: any) =>
                          getValueFromSize(theme, value)
                        ),
                        index
                      )

                      const offsetValue = getValueFromBreakpointIndex(
                        castArray(offset).map((value: any) =>
                          getValueFromSize(theme, value)
                        ),
                        index
                      )

                      return `calc(${(offsetValue / colValue) *
                        100}% + ${gutterValue / 2}px)`
                    }
                  )
                )
            }
          : {
              ml: (theme: any) =>
                uncastArrayIfSingle(
                  castArray(getGutterSize(theme))
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

type LayoutKey = number | '*'
type Layout = ColProps & { key?: LayoutKey }
export type LayoutJson = (RowProps & { layout: Layout[] })[]
interface FromJsonProps extends React.HTMLAttributes<any> {
  json: LayoutJson
  childrenArray: React.ReactNode[]
}

export const GridFromJson: React.FC<FromJsonProps> = ({
  json,
  childrenArray
}) => {
  const flatLayout = json.reduce<Layout[]>(
    (cells, { layout }) => cells.concat(layout),
    []
  )
  const usedKeys = flatLayout.map(({ key }) => key)

  interface ComponentAndId {
    id: any
    component: React.ReactNode
  }
  let autoKey = 0
  // In the future, string key could be support for contentful block ID
  const getChildFromKey = (key?: LayoutKey): ComponentAndId => {
    // If no key, search for the next key that isn't already used
    if (typeof key === 'undefined') {
      while (usedKeys.includes(autoKey)) {
        autoKey++
      }
      usedKeys.push(autoKey)
      key = autoKey
    }

    if (key === '*') {
      throw new Error('Use getWildcardChildren() for this')
    }

    // We need to pass an ID back as if the key is generated it'll be undefined
    // in the JSX
    return { id: key, component: childrenArray[key] }
  }

  const getWildcardChildren = () => {
    const wildcardCount = childrenArray.length - flatLayout.length + 1

    const wildCardChildren: ComponentAndId[] = []

    for (let i = 0; i < wildcardCount; i++) {
      wildCardChildren.push(getChildFromKey())
    }

    return wildCardChildren
  }

  return (
    <React.Fragment>
      {json.map(({ layout, ...rowProps }, i) => {
        return (
          <Row {...rowProps} key={i}>
            {layout.map(({ key, ...colProps }) => {
              if (key === '*') {
                return getWildcardChildren().map(({ id, component }) => (
                  <Col {...colProps} key={id}>
                    {component}
                  </Col>
                ))
              }

              const { id, component } = getChildFromKey(key)
              return (
                <Col {...colProps} key={id}>
                  {component}
                </Col>
              )
            })}
          </Row>
        )
      })}
    </React.Fragment>
  )
}
