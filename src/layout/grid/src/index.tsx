/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { breakpoints, Breakpoints } from '@uswitch/trustyle.styles'

import * as st from './styles'

interface Props {
  children: any;
}

export const Container: React.FC<Props> = ({ children, ...props }) => (
  <div css={st.container} {...props}>
    { children }
  </div>
)

interface ColumnProps extends Breakpoints {
  children: any;
}

const parseSizeFromProps = (fn : (breakpoint: [string, any]) => any) => Object.entries(breakpoints).map(fn)

const parseDisplay = (props: any): string[] => {
  const display = parseSizeFromProps(
    ([key, _]) => (
      props[`hide-${key}`] ? 'none' : 'block'
    )
  )

  return [display[0], ...display]
}

const parseSizes = (props: any): number[] => {
  const sizes = parseSizeFromProps(
    ([key, _]) => (
      parseFloat(props[key]) || 1
    )
  )

  return [sizes[0], ...sizes]
}

export const Column: React.FC<ColumnProps> = ({ children, ...props }) => {
  const sizes = parseSizes(props)
  const display = parseDisplay(props)

  return (
    <div css={st.column(sizes, display)} {...props}>
      { children }
    </div>
  )
}

interface RowProps {
  children: any;
  centerX?: boolean;
}

export const Row: React.FC<RowProps> = ({ children, centerX, ...props }) => (
  <div css={st.row(centerX)} {...props}>
    { children }
  </div>
)
