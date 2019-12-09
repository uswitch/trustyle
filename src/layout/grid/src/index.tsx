/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { breakpoints, Breakpoints } from '@uswitch/trustyle.styles'

import * as st from './styles'

interface Props {
  children: any;
  outerMargin?: string[]
}

export const Container: React.FC<Props> = ({ children, outerMargin, ...props }) => (
  <div css={st.container(outerMargin)} {...props}>
    { children }
  </div>
)

interface ColumnProps extends Breakpoints {
  children: any;
  paddingTop?: boolean;
  paddingBottom?: boolean;
}

const parseSizeFromProps = (fn : (breakpoint: [string, any]) => any) => Object.entries(breakpoints).map(fn)

const parseDisplay = (props: any): string[] =>
  parseSizeFromProps(
    ([key, _]) => props[`hide-${key}`] ? 'none' : 'block'
  )

const parseSizes = (props: any): number[] =>
  parseSizeFromProps(
    ([key, _]) => parseFloat(props[key]) || 1
  )

export const Column: React.FC<ColumnProps> = ({ children, paddingTop, paddingBottom, ...props }) => {
  const sizes = parseSizes(props)
  const display = parseDisplay(props)
  return (
    <div css={st.column(sizes, display, paddingTop, paddingBottom)} {...props}>
      { children }
    </div>
  )
}

interface RowProps {
  children: any;
  centerX?: boolean;
  paddingTop?: number[];
  paddingBottom?: number[];
}

export const Row: React.FC<RowProps> = ({ children, centerX, paddingTop, paddingBottom, ...props }) => (
  <div css={st.row(centerX, paddingTop, paddingBottom)} {...props}>
    { children }
  </div>
)
