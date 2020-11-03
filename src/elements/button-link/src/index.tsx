/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { Glyph, Icon } from '@uswitch/trustyle.icon'
import get from '@uswitch/trustyle-utils.get'

type Overwrite<T, U> = Omit<T, keyof U> & U
type Props<T extends React.ComponentType<any>> = Overwrite<
  React.ComponentProps<T>,
  {
    as?: T
    variant: string
    children: React.ReactNode
    size?: 'small' | 'large'
    beforeIcon?: string
    afterIcon?: string
  }
>

export const ButtonLink = <
  T extends React.ComponentType<any> = React.ComponentType<
    JSX.IntrinsicElements['a']
  >
>({
  children,
  variant,
  size = 'large',
  beforeIcon,
  afterIcon,
  ...props
}: Props<T>) => {
  const { theme }: any = useThemeUI()

  return (
    <Styled.a
      sx={{
        cursor: 'pointer',
        backgroundImage: 'none',
        fontFamily: 'base',
        fontSize: get(
          theme,
          `elements.buttons.base.btnSize.${size}.fontSize`,
          'base'
        ),
        paddingX: get(
          theme,
          `elements.buttons.base.btnSize.${size}.paddingX`,
          'sm'
        ),
        paddingY: get(
          theme,
          `elements.buttons.base.btnSize.${size}.paddingY`,
          'base'
        ),
        height: get(
          theme,
          `elements.buttons.base.btnSize.${size}.height`,
          'base'
        ),
        display: 'inline-block',
        textDecoration: 'none',
        variant: `elements.buttons.variants.${variant}`
      }}
      {...props}
    >
      {beforeIcon && (
        <span
          sx={{ variant: `elements.buttons.variants.${variant}.beforeIcon` }}
        >
          <Icon color="white" glyph={beforeIcon as Glyph} direction="left" />
        </span>
      )}
      {children}
      {afterIcon && (
        <span
          sx={{ variant: `elements.buttons.variants.${variant}.afterIcon` }}
        >
          <Icon color="white" glyph={afterIcon as Glyph} direction="right" />
        </span>
      )}
    </Styled.a>
  )
}
