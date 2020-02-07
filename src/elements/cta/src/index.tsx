/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { ButtonLink } from '@uswitch/trustyle.button-link'

interface CTAProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  text: string
  buttonLink: string
  buttonText: string
}

const CTA: React.FC<CTAProps> = ({ title, text, buttonLink, buttonText }) => {
  const { theme }: any = useThemeUI()

  return (
    <div
      sx={{
        paddingX: ['sm', 'md'],
        paddingY: 'md',
        display: ['block', 'flex'],
        alignItems: 'center',
        variant: 'cta.main'
      }}
    >
      <div>
        <Styled.h4 sx={{ marginTop: 0, variant: 'cta.title' }} as="h2">
          {title}
        </Styled.h4>
        <Styled.p sx={{ variant: 'cta.text' }}>{text}</Styled.p>
      </div>
      <div sx={{ flexShrink: 0 }}>
        <ButtonLink
          href={buttonLink}
          variant={theme.cta?.button?.variant || 'primary'}
          sx={{ variant: 'cta.button' }}
        >
          {buttonText}
        </ButtonLink>
      </div>
    </div>
  )
}

export default CTA
