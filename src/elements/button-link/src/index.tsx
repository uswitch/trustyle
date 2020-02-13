/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

type Overwrite<T, U> = Omit<T, keyof U> & U
type Props<T extends React.ComponentType<any>> = Overwrite<
  React.ComponentProps<T>,
  {
    as?: T
    variant: string
    children: React.ReactNode
  }
>

export const ButtonLink = <
  T extends React.ComponentType<any> = React.ComponentType<
    JSX.IntrinsicElements['a']
  >
>({
  children,
  variant,
  ...props
}: Props<T>) => (
  <Styled.a
    sx={{
      cursor: 'pointer',
      backgroundImage: 'none',
      fontFamily: 'base',
      fontSize: 'base',
      paddingX: 'sm',
      paddingY: 'base',
      display: 'inline-block',
      textDecoration: 'none',
      variant: `buttons.variants.${variant}`
    }}
    {...props}
  >
    {children}
  </Styled.a>
)
