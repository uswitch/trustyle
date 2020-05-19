/** @jsx jsx */

import * as React from 'react'
import { css, jsx } from '@emotion/core'

import { alert, notification, root } from './styles'

type Type = 'notification' | 'alert'
export type ErrorMessages = string | { [index: string]: ErrorMessages }

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: Type
  children: React.ReactNode
}

export const InputAlert: React.FC<Props> = ({ type, children, ...props }) => (
  <div
    {...props}
    css={css([
      root,
      type === 'notification' && notification,
      type === 'alert' && alert
    ])}
  >
    {children}
  </div>
)
