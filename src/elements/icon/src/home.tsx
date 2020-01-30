/** @jsx jsx */

import * as React from 'react'
import { css, jsx } from '@emotion/core'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Home: React.FC<Props> = ({ color, size }) => (
  <svg
    css={css([st.icon, st.size(size), { fill: color, stroke: color }])}
    viewBox="0 0 14 14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.87861 1.63215C7.48808 1.24162 6.85492 1.24163 6.46439 1.63215L1.60839 6.48816C1.2934 6.80314 1.51649 7.34171 1.96194 7.34171H3.17884C3.12062 7.46855 3.08817 7.60967 3.08817 7.75837V12.175C3.08817 12.7273 3.53588 13.175 4.08817 13.175H10.2548C10.8071 13.175 11.2548 12.7273 11.2548 12.175V7.75838C11.2548 7.60967 11.2224 7.46855 11.1642 7.34171H12.3811C12.8265 7.34171 13.0496 6.80314 12.7346 6.48815L7.87861 1.63215Z" />
  </svg>
)
