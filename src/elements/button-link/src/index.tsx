/** @jsx jsx */

import * as React from 'react'
import { jsx, Themed, useThemeUI } from 'theme-ui'
import get from '@uswitch/trustyle-utils.get'
import { Glyph, Icon } from '@uswitch/trustyle.icon'

type Overwrite<T, U> = Omit<T, keyof U> & U
type Props<T extends React.ComponentType<any>> = Overwrite<
  React.ComponentProps<T>,
  {
    as?: T
    variant: string
    children: React.ReactNode
    size?: string
    beforeIcon?: Glyph
    afterIcon?: Glyph
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
    trackInteraction?: (e: React.MouseEvent<HTMLAnchorElement>) => void
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
  trackInteraction = () => {},
  onClick = () => {},
  ...props
}: Props<T>) => {
  const { theme }: any = useThemeUI()

  const displayIcon = (type: string, icon: Glyph) => {
    return (
      <div
        sx={{
          display: 'inline',
          variant: `elements.buttons.variants.${variant}.${type}`
        }}
      >
        <Icon
          glyph={icon}
          color={get(
            theme,
            `elements.buttons.variants.${variant}.color`,
            'base'
          )}
          direction="right"
          size={22}
        />
      </div>
    )
  }

  return (
    <Themed.a
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
      onClick={e => {
        trackInteraction(e)
        onClick(e)
      }}
      {...props}
    >
      {beforeIcon && displayIcon('beforeIcon', beforeIcon)}
      <div
        sx={{
          display: 'inline',
          variant: `elements.buttons.variants.${variant}.content`
        }}
      >
        {children}
      </div>
      {afterIcon && displayIcon('afterIcon', afterIcon)}
    </Themed.a>
  )
}
