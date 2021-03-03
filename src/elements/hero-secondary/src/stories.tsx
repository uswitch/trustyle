/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { boolean, select, text } from '@storybook/addon-knobs'

import Breadcrumbs from '../../breadcrumbs/src'
import { Col, Container, Row } from '../../../layout/flex-grid/src'
import AllThemes from '../../../utils/all-themes'

import HeroSecondary from '.'

export default {
  title: 'Elements/Hero Secondary'
}

type Variant = 'base' | 'light'
const variants = ['base', 'light']

const crumbs = [
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

const people: any = {
  'Jumping guy': {
    img: require('../../../../static/hero/money-man.png')
  },
  Tom: {
    img: require('../../../../static/hero/tom.png')
  }
}

export const ExampleWithKnobs = () => {
  const breadcrumbsVariant = select(
    'Breadcrumbs variant',
    variants,
    'base'
  ) as Variant
  const headline = text(
    'Headline',
    'Short snappy headline that runs over two lines'
  )
  const imageKey = select('Image', Object.keys(people), 'Jumping guy')

  const image = people[imageKey]
  const imageOnMobile = boolean('Display image on mobile?', true)
  const imageOnTablet = boolean('Display image on Tablet?', true)

  const breadcrumbs = (
    <Breadcrumbs
      crumbs={crumbs}
      title="Understanding energy bills and electricity bills - FAQs and more"
      variant={breadcrumbsVariant}
      sx={{
        pt: 16
      }}
    />
  )

  return (
    <div sx={{ margin: -10 }}>
      <HeroSecondary
        container={Container}
        image={image.img}
        imageOnMobile={imageOnMobile}
        imageOnTablet={imageOnTablet}
        breadcrumbs={breadcrumbs}
      >
        <Row>
          <Col span={[12, 12, 6]}>
            <Styled.h1 sx={{ marginTop: 0, fontSize: ['lg', 'xl', 'xxl'] }}>
              {headline}
            </Styled.h1>
            <Styled.p sx={{ marginTop: 0 }}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </Styled.p>
          </Col>
        </Row>
      </HeroSecondary>
    </div>
  )
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

// @todo test with more than one image and position
export const AutomatedTests = () => {
  return (
    <React.Fragment>
      <AllThemes themes={['uswitch', 'money']}>
        <ExampleWithKnobs />
      </AllThemes>
    </React.Fragment>
  )
}
