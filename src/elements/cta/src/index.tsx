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
    <div sx={theme.cta?.main}>
      <Styled.h3 sx={theme.cta?.title}>{title}</Styled.h3>
      <Styled.p sx={theme.cta?.text}>{text}</Styled.p>
      <ButtonLink
        href={buttonLink}
        variant={theme.cta?.button?.variant || 'primary'}
        sx={theme.cta?.button}
      >
        {buttonText}
      </ButtonLink>
    </div>
  )
}

export default CTA
