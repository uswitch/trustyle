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
  const getTheme = (key: string) => theme.cta && theme.cta[key]
  const buttonTheme = getTheme('button')

  return (
    <div sx={getTheme('main')}>
      <Styled.h3 sx={getTheme('title')}>{title}</Styled.h3>
      <Styled.p sx={getTheme('text')}>{text}</Styled.p>
      <ButtonLink
        href={buttonLink}
        variant={(buttonTheme && buttonTheme.variant) || 'primary'}
        sx={buttonTheme}
      >
        {buttonText}
      </ButtonLink>
    </div>
  )
}

export default CTA
