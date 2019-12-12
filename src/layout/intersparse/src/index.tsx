/** @jsx jsx */

import * as React from 'react'
import styled from '@emotion/styled'
import { mq, pxToRem } from '@uswitch/trustyle.styles'

interface Props {
  spacing: number[]
}

export const Intersparse: React.FC<Props> = styled.div(({ spacing }) => mq({
  '& > div': {
    marginBottom: spacing.map((space) => pxToRem(space))
  },
  '& > div:last-child': {
    marginBottom: 0
  }
}))
