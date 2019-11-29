/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

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
}

export const Column: React.FC<ColumnProps> = ({ children, sizes, ...props }) => (
  <div css={st.column(sizes)} {...props}>
    { children }
  </div>
)

interface RowProps {
  children: any;
  centerX?: boolean;
}

export const Row: React.FC<RowProps> = ({ children, centerX, ...props }) => (
  <div css={st.row(centerX)} {...props}>
    { children }
  </div>
)
