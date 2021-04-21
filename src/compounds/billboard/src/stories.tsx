/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import Breadcrumbs from '../../../elements/breadcrumbs/src'
import HeroAd from '../../../compounds/advert/src'
import LogoCollection from '../../../elements/logo-collection/src'
import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'

import Billboard from './'

export default {
  title: 'Compounds/Billboard'
}

const crumbs = [
  {
    fields: {
      path: '/',
      displayText: 'Home'
    }
  },
  {
    fields: {
      path: '/gas-electricity/',
      displayText: 'Gas & Electricity'
    }
  },
  {
    fields: {
      path: '/gas-electricity/guides',
      displayText: 'Guides'
    }
  }
]

const breadcrumbs = (
  <Breadcrumbs
    crumbs={crumbs}
    title="Understanding energy bills and electricity bills - FAQs and more"
    sx={{
      pt: 16
    }}
  />
)

const primaryContent = (
  <div>
    <h3>Compare 10 year fixed rate mortgages</h3>
    <p>
      You could find a low fixed rate mortgage deal that offers you peace of
      mind by fixing your repayments for 10 years.
    </p>
  </div>
)

const primarySlot = (
  <HeroAd
    headline="Compare business cards & loans"
    body="Indicative offers from 45+ lenders in 3 mins. Never pay more than going direct. Will not affect your credit rating."
    footer="Available to businesses trading for a minimum of 12 months with at least £80,000 turnover."
    badgeText="Exclusive loans deals"
  />
)

const images = [
  <img
    src="https://placekitten.com/200/200?image=9"
    alt="Salman"
    key="kitten1"
  />,
  <img
    src="https://placekitten.com/200/200?image=9"
    alt="Salman"
    key="kitten2"
  />,
  <img
    src="https://placekitten.com/200/200?image=9"
    alt="Salman"
    key="kitten3"
  />,
  <img
    src="https://placekitten.com/200/200?image=9"
    alt="Salman"
    key="kitten4"
  />
]

const fullWidthSlot = <LogoCollection logoImage={images} />

export const ExampleWithPrimarySlot = () => {
  return (
    <Billboard
      breadcrumbs={breadcrumbs}
      primaryContent={primaryContent}
      primarySlot={primarySlot}
      fullWidthSlot={fullWidthSlot}
    />
  )
}

export const ExampleWithoutPrimarySlot = () => {
  return (
    <Billboard
      primaryContent={primaryContent}
      fullWidthSlot={fullWidthSlot}
      breadcrumbs={breadcrumbs}
    />
  )
}

ExampleWithPrimarySlot.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  const permutations = permutationsGenerator({
    variant: ['primary', 'secondary']
  })

  return (
    <AllThemes>
      {permutations.map((p, i) => (
        <Billboard primaryContent primarySlot key={i} />
      ))}
    </AllThemes>
  )
}
