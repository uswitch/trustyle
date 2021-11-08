/** @jsx jsx */

import * as React from 'react'
import { jsx, Themed } from 'theme-ui'
import { ButtonLink } from '@uswitch/trustyle.button-link'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  ctaText?: string
  ctaLink?: string
  children: React.ReactNode
  type?: 'default' | 'seasonal'
  bgImage?: string
}

const styles = (element?: string) =>
  `compounds.heroCard.variants${element ? `.${element}` : ''}`

const HeroCard: React.FC<Props> = ({
  title,
  ctaText,
  ctaLink,
  children,
  bgImage,
  type = 'default'
}) => {
  return (
    <div
      sx={{
        display: 'flex',
        variant: styles(type === 'seasonal' ? 'seasonal' : '')
      }}
    >
      <div sx={{ variant: styles('flexContainer') }}>
        <Themed.h1>{title}</Themed.h1>
        {type === 'seasonal' && (
          <div
            sx={{
              variant: styles('links.seasonal')
            }}
          >
            {children}
          </div>
        )}
        {ctaText && (
          <ButtonLink
            variant="primary"
            href={ctaLink}
            size={children && type === 'seasonal' ? 'fullWidth' : 'small'}
            sx={{
              variant: styles('buttonLink'),
              display: ['none', 'initial']
            }}
          >
            {ctaText}
          </ButtonLink>
        )}
      </div>
      {type === 'default' && (
        <div
          sx={{
            variant: styles('links')
          }}
        >
          {children}
        </div>
      )}

      {bgImage && (
        <div
          sx={{
            display: ['none', 'none', 'block'],
            background: `url(${bgImage}) no-repeat right center / contain`,
            width: '404px',
            height: '416px'
          }}
        ></div>
      )}
    </div>
  )
}

export default HeroCard
