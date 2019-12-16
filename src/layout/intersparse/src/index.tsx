/** @jsx jsx */

import * as React from 'react'
import styled from '@emotion/styled'
import { mq, pxToRem } from '@uswitch/trustyle.styles'

interface Props {
  spacing: number[]
}

export const Stack: React.FC<Props> = styled.div(({ spacing }) =>
  mq({
    '& > *': {
      marginBottom: spacing.map(space => pxToRem(space))
    },
    '& > *:last-child': {
      marginBottom: 0
    }
  })
)

export const Inline: React.FC<Props> = styled.div(({ spacing }) =>
  mq({
    '& > *': {
      display: 'inline',
      whiteSpace: 'nowrap',
      marginRight: spacing.map(space => pxToRem(space))
    },
    '& > *:last-child': {
      marginRight: 0
    }
  })
)
