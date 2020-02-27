/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { boolean, number, select, text } from '@storybook/addon-knobs'

import Breadcrumbs from '../../breadcrumbs/src'
import { Button } from '../../button/src'

import Hero from './'

export default {
  title: 'Elements|Hero'
}

type Variant = 'base' | 'light'
const variants = ['base', 'light']

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

const people: any = {
  'Jumping guy': {
    img: require('../../../../static/hero/money-man.png'),
    position: {
      backgroundSize: ['auto 125%', 'auto calc(110% + 280px)'],
      backgroundPosition: ['right -130px bottom -150px', 'left 50% top 0']
    }
  },
  Tom: {
    img: require('../../../../static/hero/tom.png'),
    position: {
      backgroundSize: ['auto 100%', 'auto calc(90% + 100px)'],
      backgroundPosition: [
        'right -100px bottom -60px',
        'left 50% bottom -100px'
      ]
    }
  }
}

export const ExampleWithKnobs = () => {
  const breadcrumbsVariant = select(
    'Breadcrumbs variant',
    variants,
    'base'
  ) as Variant
  const contentWidth = number('Content width', 45)
  const headline = text(
    'Headline',
    'Short snappy headline that runs over two lines'
  )
  const fgImageKey = select(
    'Foreground image',
    Object.keys(people),
    'Jumping guy'
  )
  const fgImage = people[fgImageKey]
  const imageOnMobile = boolean('Display foreground image on mobile?', true)

  const breadcrumbs = (
    <Breadcrumbs
      crumbs={crumbs}
      title="Understanding energy bills and electricity bills - FAQs and more"
      variant={breadcrumbsVariant}
    />
  )

  return (
    <div sx={{ margin: -10 }}>
      <Hero
        contentWidth={contentWidth}
        fgImage={fgImage.img}
        fgImagePosition={fgImage.position}
        fgImageOnMobile={imageOnMobile}
        breadcrumbs={breadcrumbs}
      >
        <Styled.h1>{headline}</Styled.h1>
        <div sx={{ backgroundColor: 'white', padding: 20 }}>
          <Styled.p sx={{ marginTop: 0 }}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </Styled.p>
          <div sx={{ button: { width: 'auto' } }}>
            <Button variant="primary">Optional CTA</Button>
          </div>
        </div>
      </Hero>
    </div>
  )
}
