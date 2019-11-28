/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

interface Props {
  children: any;
}

export const Container: React.FC<Props> = ({ children }) => (
  <div css={st.container}>
    { children }
  </div>
)

interface ColumnProps {
  children: any;
  sizes?: number[];
}

export const Column: React.FC<ColumnProps> = ({ children, sizes }) => (
  <div css={st.column(sizes)}>
    { children }
  </div>
)

interface RowProps {
  children: any;
}

export const Row: React.FC<RowProps> = ({ children }) => (
  <div css={st.row()}>
    { children }
  </div>
)
