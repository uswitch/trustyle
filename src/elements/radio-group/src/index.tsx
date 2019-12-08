/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

interface Props {
  children: React.ReactNode
}

export const RadioGroup: React.FC<Props> = ({ children }) => (
  <div role="radiogroup">
    {children}
  </div>
)
