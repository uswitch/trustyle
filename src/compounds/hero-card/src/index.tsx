/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { ButtonLink } from '@uswitch/trustyle.button-link'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  ctaText: string
  children: React.ReactNode
}

const styles = (element?: string) =>
  `compounds.heroCard.variants${element ? `.${element}` : ''}`

const HeroCard: React.FC<Props> = ({ title, ctaText, children }) => {
  return (
    <div
      sx={{
        display: 'flex',
        variant: styles()
      }}
    >
      <div sx={{ variant: styles('flexContainer') }}>
        <Styled.h1>{title}</Styled.h1>
        <ButtonLink
          variant="primary"
          size="small"
          sx={{ variant: styles('buttonLink'), display: ['none', 'initial'] }}
        >
          {ctaText}
        </ButtonLink>
      </div>
      <div
        sx={{
          variant: styles('links')
        }}
      >
        {children}
      </div>
      <ButtonLink
        variant="primary"
        size="small"
        sx={{ variant: styles('buttonLink'), display: ['initial', 'none'] }}
      >
        {ctaText}
      </ButtonLink>
    </div>
  )
}

export default HeroCard
