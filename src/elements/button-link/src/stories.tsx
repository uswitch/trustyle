/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { number, text } from '@storybook/addon-knobs'

import theme from '../../../utils/theme-selector'

import { ButtonLink } from './'

const Spacer = () => <div css={css({ minHeight: 20 })} />

export default {
  title: 'Elements|Button Link'
}

export const AllVariants = () => (
  <div css={css({ padding: number('Padding', 10) })}>
    {theme() &&
      Object.keys(theme().buttons.variants).map((key, index) => (
        <React.Fragment key={index}>
          <ButtonLink
            variant={key}
            href="https://www.uswitch.com"
            target="_blank"
          >
            {text(`${key} label`, `${key} link button`)}
          </ButtonLink>
          <Spacer />
        </React.Fragment>
      ))}
  </div>
)

export const PrimaryVariant = () => (
  <ButtonLink variant="primary">Primary link button</ButtonLink>
)

export const SecondaryVariant = () => (
  <ButtonLink variant="secondary">Primary link button</ButtonLink>
)

const CustomLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string
}> = ({ to, children, ...rest }) => (
  <a onClick={() => window.alert(`Custom link component: ${to}`)} {...rest}>
    {children}
  </a>
)

export const StyledComponentAsProp = () => (
  <ButtonLink variant="primary" as={CustomLink} to="special-url">
    Using <em>as</em> prop
  </ButtonLink>
)
