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
        display: 'grid',
        alignItems: 'center',
        variant: styles()
      }}
    >
      <Styled.h1>{title}</Styled.h1>
      <div
        sx={{
          gridColumn: [1, 2],
          gridRow: [null, '1/span 2'],
          variant: styles('links')
        }}
      >
        {children}
      </div>
      <ButtonLink
        variant="primary"
        size="small"
        sx={{ variant: styles('buttonLink') }}
      >
        {ctaText}
      </ButtonLink>
    </div>
  )
}

export default HeroCard
