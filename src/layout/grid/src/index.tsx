/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { breakpoints } from '@uswitch/trustyle.styles'

import * as st from './styles'

interface Props {
  children: any;
}

export const Container: React.FC<Props> = ({ children, ...props }) => (
  <div css={st.container} {...props}>
    { children }
  </div>
)

interface ColumnProps {
  children: any;
  sizes?: number[];
  padding?: boolean;
}

const parseSizes = (props: any): number[] => {
  const sizes = (
    Object.entries(breakpoints).map(
      ([key, _]) => (
        parseFloat(props[key]) || 1
      )
    )
  )

  return [sizes[0], ...sizes]
}

export const Column: React.FC<ColumnProps> = ({ children, padding, ...props }) => {
  const sizes = parseSizes(props)

  return (
    <div css={st.column(sizes, padding)} {...props}>
      { children }
    </div>
  )
}

interface RowProps {
  children: any;
  centerX?: boolean;
  padding?: boolean;
}

export const Row: React.FC<RowProps> = ({ children, centerX, padding, ...props }) => (
  <div css={st.row(centerX, padding)} {...props}>
    { children }
  </div>
)
