/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { select } from '@storybook/addon-knobs'

import Breadcrumbs from '../../../elements/breadcrumbs/src'
import HeroAd from '../../../compounds/advert/src'
import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'
import IconTile, { DisplayVariant } from '../../../elements/icon-tile/src'
import { Col, Row } from '../../../layout/flex-grid/src'
import CTA from '../../../elements/cta/src'

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

const heroAd = (
  <HeroAd
    headline="Compare business cards & loans"
    body="Indicative offers from 45+ lenders in 3 mins. Never pay more than going direct. Will not affect your credit rating."
    footer="Available to businesses trading for a minimum of 12 months with at least £80,000 turnover."
    badgeText="Exclusive loans deals"
  />
)

const callToAction = (
  <CTA
    text="Some example text"
    title="Want free expert mortgage advice?"
    buttonText="Get started"
    buttonLink="https://google.com"
  />
)

const icon = select(
  'Icon',
  ['carInsurance', 'creditCards', 'loans', 'mortgages'],
  'carInsurance'
)
const displayVariant = select(
  'Display Variant',
  DisplayVariant,
  DisplayVariant.Horizontal
)
const iconImg = (
  <img alt="" src={require(`../../../../static/money-icons/${icon}.svg`)} />
)

const images = [
  <Col span={1} key={0}>
    <IconTile icon={iconImg} displayVariant={displayVariant}>
      test
    </IconTile>
  </Col>,
  <Col span={1} key={1}>
    <IconTile icon={iconImg} displayVariant={displayVariant}>
      test
    </IconTile>
  </Col>,
  <Col span={1} key={2}>
    <IconTile icon={iconImg} displayVariant={displayVariant}>
      test
    </IconTile>
  </Col>,
  <Col span={1} key={3}>
    <IconTile icon={iconImg} displayVariant={displayVariant}>
      test
    </IconTile>
  </Col>
]

const fullWidthSlot = (
  <Row cols={[2, 4]} direction="row" wrap>
    {images}
  </Row>
)

export const ExampleWithPrimarySlot = () => {
  return (
    <Billboard
      breadcrumbs={breadcrumbs}
      primaryContent={primaryContent}
      primarySlot={heroAd}
      fullWidthSlot={fullWidthSlot}
    />
  )
}

export const ExampleWithoutFullWidthSlot = () => {
  return (
    <Billboard
      breadcrumbs={breadcrumbs}
      primaryContent={primaryContent}
      primarySlot={callToAction}
    />
  )
}

export const ExampleWithPrimaryContent = () => {
  return <Billboard breadcrumbs={breadcrumbs} primaryContent={primaryContent} />
}

export const ExampleWithoutPrimarySlot = () => {
  return (
    <Billboard
      breadcrumbs={breadcrumbs}
      primaryContent={primaryContent}
      fullWidthSlot={fullWidthSlot}
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
