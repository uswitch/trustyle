/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

export const LoadingSpinner: React.FC = () => <div css={st.rotate}>loading...</div>
