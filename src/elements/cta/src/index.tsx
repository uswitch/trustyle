/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { ButtonLink } from '@uswitch/trustyle.button-link'
import get from 'lodash/get'

const lookup = (variant: string) =>
  variant === 'base' ? 'cta2.base' : `cta2.variants.${variant}`

interface CTAProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  text: string
  buttonLink: string
  buttonText: string
  variant?: 'base' | 'hero' | 'hero-white-bg'
}

const CTA: React.FC<CTAProps> = ({
  title,
  text,
  buttonLink,
  buttonText,
  variant = 'base'
}) => {
  const { theme }: any = useThemeUI()
  const buttonVariant = get(theme, `${lookup(variant)}.button.buttonVariant`)

  return (
    <div
      sx={{
        paddingX: ['sm', 'md'],
        paddingY: 'md',
        display: ['block', 'flex'],
        alignItems: 'center',
        variant: `${lookup(variant)}.main`
      }}
    >
      <div>
        <Styled.h3
          sx={{ marginTop: 0, variant: `${lookup(variant)}.title` }}
          as="h2"
        >
          {title}
        </Styled.h3>
        <Styled.p sx={{ variant: `${lookup(variant)}.text` }}>{text}</Styled.p>
      </div>
      <div sx={{ flexShrink: 0 }}>
        <ButtonLink
          href={buttonLink}
          variant={buttonVariant || 'primary'}
          sx={{ variant: `${lookup(variant)}.button` }}
        >
          {buttonText}
        </ButtonLink>
      </div>
    </div>
  )
}

export default CTA
