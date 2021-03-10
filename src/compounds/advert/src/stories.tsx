/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import Hero from '@uswitch/trustyle.hero'

import { Col, Row } from '../../../layout/flex-grid/src'
import AllThemes from '../../../utils/all-themes'

import Advert from '.'

export default {
  title: 'Elements/Advert'
}

export const ExampleWithKnobs = () => {
  return (
    <Hero>
      <Row>
        <Col span={[12, 5]}>
          <Styled.h1 sx={{ marginTop: 0, fontSize: ['lg', 'xl', 'xxl'] }}>
            Hero Advert
          </Styled.h1>
          <Styled.p sx={{ marginTop: 0 }}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </Styled.p>
        </Col>
        <Col span={[12, 6]}>
          <Advert
            headline="Compare business cards & loans"
            body="Indicative offers from 45+ lenders in 3 mins. Never pay more than going direct. Will not affect your credit rating."
            badgeText="Exclusive loans deals"
            footer="Available to businesses trading for a minimum of 12 months with at least £80,000 turnover."
            logo="https://cdn.money.co.uk/images/logos/129x75/funding-xchange.CDN6038ea49@2x.png"
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
          <Styled.h1 sx={{ marginTop: 0, fontSize: ['lg', 'xl', 'xxl'] }}>
            Hero Advert
          </Styled.h1>
          <Styled.p sx={{ marginTop: 0 }}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </Styled.p>
        </Col>
        <Col span={[12, 6]}>
          <Advert
            headline="Compare business cards & loans"
            body="Indicative offers from 45+ lenders in 3 mins. Never pay more than going direct. Will not affect your credit rating."
            badgeText="Exclusive loans deals"
            footer="Available to businesses trading for a minimum of 12 months with at least £80,000 turnover."
            logo="https://money.imgix.net/uswitch-assets-eu/amp/images/provider/logos/hargreaves-lansdown-logo-11544.png"
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

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <Advert
        headline="Compare business cards & loans"
        body="Indicative offers from 45+ lenders in 3 mins. Never pay more than going direct. Will not affect your credit rating."
        badgeText="Exclusive loans deals"
        footer="Available to businesses trading for a minimum of 12 months with at least £80,000 turnover."
        logo="https://cdn.money.co.uk/images/logos/129x75/funding-xchange.CDN6038ea49@2x.png"
      />
    </AllThemes>
  )
}
