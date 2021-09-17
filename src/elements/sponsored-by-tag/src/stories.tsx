/** @jsx jsx */
import * as React from 'react'
import { jsx, ThemeUICSSObject } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import SponsoredByTag from '.'

export default {
  title: 'Elements/Sponsored by tag'
}

const defaultProviderName = 'Three'
const defaultProviderLogo = '/contentful/three.png'
const wideProviderLogo = '/contentful/responsible-equity.png'
const defaultProviderText = 'This is example text'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
  sx?: ThemeUICSSObject
}

const Wrapper: React.FC<Props> = ({ children, sx = {} }) => {
  return <div sx={{ backgroundColor: 'secondary', ...sx }}>{children}</div>
}

export const WideExampleWithDefaultText = () => {
  const providerName = text('Provider name', defaultProviderName)
  const providerLogo = text('Provider logo url', wideProviderLogo)

  return (
    <Wrapper>
      <SponsoredByTag
        providerLogoSrc={providerLogo}
        providerName={providerName}
      />
    </Wrapper>
  )
}

export const ExampleWithDefaultText = () => {
  const providerName = text('Provider name', defaultProviderName)
  const providerLogo = text('Provider logo url', defaultProviderLogo)

  return (
    <SponsoredByTag
      providerLogoSrc={providerLogo}
      providerName={providerName}
    />
  )
}

export const ExampleWithTextProp = () => {
  const providerName = text('Provider name', defaultProviderName)
  const providerLogo = text('Provider logo url', defaultProviderLogo)
  const providerText = text('Text to display', defaultProviderText)

  return (
    <Wrapper>
      <SponsoredByTag
        providerLogoSrc={providerLogo}
        providerText={providerText}
        providerName={providerName}
      />
    </Wrapper>
  )
}

export const ExampleWithHeroVariant = () => {
  const providerName = text('Provider name', defaultProviderName)
  const providerLogo = text('Provider logo url', defaultProviderLogo)
  const providerText = text('Text to display', defaultProviderText)

  return (
    <Wrapper>
      <SponsoredByTag
        providerLogoSrc={providerLogo}
        providerText={providerText}
        providerName={providerName}
        variant="hero"
      />
    </Wrapper>
  )
}

export const ExampleWithFormVariant = () => {
  const providerName = text('Provider name', defaultProviderName)
  const providerLogo = text('Provider logo url', defaultProviderLogo)
  const providerText = text('Text to display', 'You selected:')

  return (
    <Wrapper sx={{ padding: 'sm', width: '500px' }}>
      <SponsoredByTag
        providerLogoSrc={providerLogo}
        providerText={providerText}
        providerName={providerName}
        variant="form"
      />
    </Wrapper>
  )
}

export const ExampleWithCentredLightVariant = () => {
  const providerName = text('Provider name', defaultProviderName)
  const providerLogo = text('Provider logo url', defaultProviderLogo)
  const providerText = text('Text to display', 'You selected:')

  return (
    <Wrapper>
      <SponsoredByTag
        providerLogoSrc={providerLogo}
        providerText={providerText}
        providerName={providerName}
        variant="centered-light"
      />
    </Wrapper>
  )
}

ExampleWithDefaultText.story = {
  parameters: {
    percy: { skip: true }
  }
}

ExampleWithTextProp.story = {
  parameters: {
    percy: { skip: true }
  }
}

ExampleWithHeroVariant.story = {
  parameters: {
    percy: { skip: true }
  }
}

ExampleWithFormVariant.story = {
  parameters: {
    percy: { skip: true }
  }
}
export const AutomatedTests = () => {
  return (
    <AllThemes>
      <ExampleWithDefaultText />
      <ExampleWithTextProp />
      <ExampleWithHeroVariant />
      <ExampleWithFormVariant />
      <ExampleWithCentredLightVariant />
    </AllThemes>
  )
}
