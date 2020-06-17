/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const LoadingSpinner: React.FC<Props> = ({ className }) => (
  <div css={st.rotate} className={className}>
    loading...
  </div>
)
