/** @jsx jsx */

import * as React from 'react'
import { jsx, Themed, useThemeUI } from 'theme-ui'
import { ButtonLink } from '@uswitch/trustyle.button-link'
import get from '@uswitch/trustyle-utils.get'

const lookup = (variant: string) =>
  variant === 'base' ? 'elements.cta.base' : `elements.cta.variants.${variant}`

interface CTAProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  text: string
  buttonLink: string
  buttonText: string
  variant?: 'base' | 'hero' | 'hero-white-bg'
  className?: string
  buttonProps?: any
}

const CTA: React.FC<CTAProps> = ({
  title,
  text,
  buttonLink,
  buttonText,
  variant = 'base',
  className,
  buttonProps
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
      className={className}
    >
      <div>
        {title && (
          <Themed.h3
            sx={{ marginTop: 0, variant: `${lookup(variant)}.title` }}
            as="h2"
          >
            {title}
          </Themed.h3>
        )}
        {text && (
          <Themed.p sx={{ variant: `${lookup(variant)}.text` }}>
            {text}
          </Themed.p>
        )}
      </div>
      <div sx={{ flexShrink: 0 }}>
        <ButtonLink
          href={buttonLink}
          variant={buttonVariant || 'primary'}
          sx={{ variant: `${lookup(variant)}.button` }}
          {...buttonProps}
        >
          {buttonText}
        </ButtonLink>
      </div>
    </div>
  )
}

export default CTA
