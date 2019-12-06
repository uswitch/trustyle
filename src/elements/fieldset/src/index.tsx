/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

interface Props {
  children: React.ReactNode
  label?: string
}

export const Fieldset: React.FC<Props> = ({ children, label }) => (
  <fieldset css={st.root}>
    {label && <legend css={st.label}>{label}</legend>}
    {children}
  </fieldset>
)
