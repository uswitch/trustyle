/** @jsx jsx */

import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { JustifyContentProperty } from 'csstype'

import * as st from './styles'

export type Variant = 'primary' | 'secondary' | 'outline'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  justifyContent?: JustifyContentProperty
  variant: Variant
  href: string
}

export const ButtonLink: React.FC<Props> = ({
  children,
  justifyContent,
  variant,
  href,
  onClick,
  ...props
}) => (
  <a
    css={css(st.buttonLink(variant, justifyContent))}
    href={href}
    onClick={onClick}
    {...props}
  >
    {children}
  </a>
)
