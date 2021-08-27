/** @jsx jsx */

import styled from '@emotion/styled'
import { mq, pxToRem } from '@uswitch/trustyle.styles'

interface Props {
  spacing: number[]
}

export const Stack = styled.div<Props>(({ spacing }) =>
  mq({
    '& > *': {
      marginBottom: spacing.map(space => pxToRem(space))
    },
    '& > *:last-child': {
      marginBottom: 0
    }
  })
)

export const Inline = styled.div<Props>(({ spacing }) =>
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
