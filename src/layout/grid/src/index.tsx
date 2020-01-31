/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { breakpoints, Breakpoints } from '@uswitch/trustyle.styles'

import * as st from './styles'

interface Props {
  children: any
  outerMargin?: string[]
  containerWidths?: (string | number)[]
  gutterWidths?: number[]
}

export const Container: React.FC<Props> = ({
  children,
  outerMargin,
  containerWidths,
  gutterWidths,
  ...props
}) => (
  <div css={st.container(outerMargin, containerWidths, gutterWidths)} {...props}>
    {children}
  </div>
)

interface ColumnProps extends Breakpoints {
  children: any
  hasPaddingTop?: boolean
  hasPaddingBottom?: boolean
  gutterWidths?: number[]
}

const parseSizeFromProps = (fn: (breakpoint: [string, any]) => any) =>
  Object.entries(breakpoints).map(fn)

const parseDisplay = (props: any): string[] =>
  parseSizeFromProps(([key, _]) => (props[`hide-${key}`] ? 'none' : 'block'))

const parseSizes = (props: any): number[] =>
  parseSizeFromProps(([key, _]) => parseFloat(props[key]) || 1)

export const Column: React.FC<ColumnProps> = ({
  children,
  hasPaddingTop,
  hasPaddingBottom,
  gutterWidths,
  ...props
}) => {
  const sizes = parseSizes(props)
  const display = parseDisplay(props)
  return (
    <div
      css={st.column(sizes, display, hasPaddingTop, hasPaddingBottom, gutterWidths)}
      {...props}
    >
      {children}
    </div>
  )
}

interface RowProps {
  children: any
  centerX?: boolean
  topSpacing?: number[]
  bottomSpacing?: number[]
  gutterWidths?: number[]
}

export const Row: React.FC<RowProps> = ({
  children,
  centerX,
  topSpacing,
  bottomSpacing,
  gutterWidths,
  ...props
}) => (
  <div css={st.row(centerX, topSpacing, bottomSpacing, gutterWidths)} {...props}>
    {children}
  </div>
)
