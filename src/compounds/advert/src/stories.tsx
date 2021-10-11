/** @jsx jsx */
import * as React from 'react'
import { jsx, Themed } from 'theme-ui'
import Hero from '@uswitch/trustyle.hero'

import { Col, Row } from '../../../layout/flex-grid/src'
import AllThemes from '../../../utils/all-themes'

import Advert from '.'

export default {
  title: 'Elements/Advert'
}

const content = (
  <div>
    <p>
      Indicative offers from 45+ lenders in 3 mins.{' '}
      <strong>Never pay more than going direct.</strong> Will not affect your
      credit rating.
    </p>
  </div>
)

export const ExampleWithKnobs = () => {
  return (
    <Hero>
      <Row>
        <Col span={[12, 5]}>
          <Themed.h1 sx={{ marginTop: 0, fontSize: ['lg', 'xl', 'xxl'] }}>
            Hero Advert
          </Themed.h1>
          <Themed.p sx={{ marginTop: 0 }}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </Themed.p>
        </Col>
        <Col span={[12, 6]}>
          <Advert
            headline="Compare business cards & loans"
            body="Indicative offers from 45+ lenders in 3 mins. Never pay more than going direct. Will not affect your credit rating."
            badgeText="Exclusive loans deals"
            footer="Available to businesses trading for a minimum of 12 months with at least £80,000 turnover."
            logo="/contentful/funding-xchange.png"
            link="https://money.co.uk?tracking=false"
          />
        </Col>
      </Row>
    </Hero>
  )
}

export const hargreaves = () => {
  return (
    <Hero>
      <Row>
        <Col span={[12, 5]}>
          <Themed.h1 sx={{ marginTop: 0, fontSize: ['lg', 'xl', 'xxl'] }}>
            Hero Advert
          </Themed.h1>
          <Themed.p sx={{ marginTop: 0 }}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </Themed.p>
        </Col>
        <Col span={[12, 6]}>
          <Advert
            headline="Compare business cards & loans"
            body="Indicative offers from 45+ lenders in 3 mins. Never pay more than going direct. Will not affect your credit rating."
            badgeText="Exclusive loans deals"
            footer="Available to businesses trading for a minimum of 12 months with at least £80,000 turnover."
            logo="/contentful/hargreaves-lansdown.png"
            link="https://money.co.uk?tracking=false"
          />
        </Col>
      </Row>
    </Hero>
  )
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const ExampleWithComplianceText = () => {
  return (
    <Hero>
      <Row>
        <Col span={[12, 5]}>
          <Themed.h1 sx={{ marginTop: 0, fontSize: ['lg', 'xl', 'xxl'] }}>
            Hero Advert
          </Themed.h1>
          <Themed.p sx={{ marginTop: 0 }}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </Themed.p>
        </Col>
        <Col span={[12, 6]}>
          <Advert
            headline="Compare business cards & loans"
            body="Indicative offers from 45+ lenders in 3 mins. Never pay more than going direct. Will not affect your credit rating."
            badgeText="Exclusive loans deals"
            footer="Available to businesses trading for a minimum of 12 months with at least £80,000 turnover."
            logo="https://cdn.money.co.uk/images/logos/129x75/funding-xchange.CDN6038ea49@2x.png"
            link="https://money.co.uk?tracking=false"
            complianceText="Capital at risk"
          />
        </Col>
      </Row>
    </Hero>
  )
}

ExampleWithComplianceText.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const ExampleWithContent = () => {
  return (
    <Hero>
      <Row>
        <Col span={[12, 5]}>
          <Themed.h1 sx={{ marginTop: 0, fontSize: ['lg', 'xl', 'xxl'] }}>
            Hero Advert
          </Themed.h1>
          <Themed.p sx={{ marginTop: 0 }}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </Themed.p>
        </Col>
        <Col span={[12, 6]}>
          <Advert
            headline="Compare business cards & loans"
            body="Indicative offers from 45+ lenders in 3 mins. Never pay more than going direct. Will not affect your credit rating."
            content={content}
            badgeText="Exclusive loans deals"
            footer="Available to businesses trading for a minimum of 12 months with at least £80,000 turnover."
            logo="https://cdn.money.co.uk/images/logos/129x75/funding-xchange.CDN6038ea49@2x.png"
            link="https://money.co.uk?tracking=false"
            complianceText="Capital at risk"
          />
        </Col>
      </Row>
    </Hero>
  )
}

ExampleWithContent.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <Advert
        headline="Compare business cards & loans"
        body="Indicative offers from 45+ lenders in 3 mins. Never pay more than going direct. Will not affect your credit rating."
        badgeText="Exclusive loans deals"
        footer="Available to businesses trading for a minimum of 12 months with at least £80,000 turnover."
        logo="/contentful/funding-xchange.png"
      />
      <ExampleWithComplianceText />
      <ExampleWithContent />
    </AllThemes>
  )
}
