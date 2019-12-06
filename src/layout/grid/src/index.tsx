/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { breakpoints, Breakpoints } from '@uswitch/trustyle.styles'

import * as st from './styles'

interface Props {
  children: any
  outerMargin?: string[]
  css?: any
}

export const Container: React.FC<Props> = ({
  children,
  outerMargin,
  css,
  ...props
}) => (
  <div css={[st.container(outerMargin), css]} {...props}>
    {children}
  </div>
)

interface ColumnProps extends Breakpoints {
  children: any
  css?: any
}

const parseSizeFromProps = (fn: (breakpoint: [string, any]) => any) =>
  Object.entries(breakpoints).map(fn)

const parseDisplay = (props: any): string[] =>
  parseSizeFromProps(([key, _]) => (props[`hide-${key}`] ? 'none' : 'block'))

const parseSizes = (props: any): number[] =>
  parseSizeFromProps(([key, _]) => parseFloat(props[key]) || 1)

export const Column: React.FC<ColumnProps> = ({ children, css, ...props }) => {
  const sizes = parseSizes(props)
  const display = parseDisplay(props)
  return (
    <div css={[st.column(sizes, display), css]} {...props}>
      {children}
    </div>
  )
}

interface RowProps {
  children: any
  centerX?: boolean
  css?: any
}

export const Row: React.FC<RowProps> = ({
  children,
  centerX,
  css,
  ...props
}) => (
  <div css={[st.row(centerX), css]} {...props}>
    {children}
  </div>
)
