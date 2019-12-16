/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'

import * as st from './styles'

interface Props {
  current: number
  max: number
  startFilled?: boolean
}

export const ProgressBar: React.FC<Props> = ({
  current,
  max,
  startFilled = false
}) => (
  <progress
    css={st.progress}
    value={startFilled ? current + 1 : current}
    max={startFilled ? max + 1 : max}
  />
)
