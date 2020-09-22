/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { number, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import theme from '../../../utils/theme-selector'
import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'

import { ButtonLink } from './'

const Spacer = () => <div css={css({ minHeight: 20 })} />

export default {
  title: 'Elements|Button Link'
}

export const AllVariants = () => (
  <div css={css({ padding: number('Padding', 10) })}>
    {theme() &&
      Object.keys(theme().elements.buttons.variants).map((key, index) => (
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

AllVariants.story = {
  parameters: {
    percy: { skip: true }
  }
}

const CustomLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string
}> = ({ to, children, ...rest }) => (
  <a onClick={action(`Custom link component: ${to}`)} {...rest}>
    {children}
  </a>
)

export const StyledComponentAsProp = () => (
  <ButtonLink variant="primary" as={CustomLink} to="special-url">
    Using <em>as</em> prop
  </ButtonLink>
)

StyledComponentAsProp.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  const permutations = permutationsGenerator({
    variant: ['primary', 'secondary'],
    as: [{}, { as: CustomLink, to: 'special-url' }]
  })

  return (
    <AllThemes>
      {permutations.map((p, i) => (
        <React.Fragment key={i}>
          <ButtonLink variant={p.variant} {...p.as}>
            {p.variant} {p.as.as ? ' using `as` prop' : ''}
          </ButtonLink>
          <Spacer />
        </React.Fragment>
      ))}
    </AllThemes>
  )
}
