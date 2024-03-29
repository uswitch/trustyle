/** @jsx jsx */
import * as React from 'react'
import { jsx, Themed } from 'theme-ui'
import { boolean, color, select, text } from '@storybook/addon-knobs'
import { PaletteProvider } from '@uswitch/trustyle-utils.palette'

import Breadcrumbs from '../../breadcrumbs/src'
import { Button } from '../../button/src'
import { Col, Container, Row } from '../../../layout/flex-grid/src'
import IconTile from '../../icon-tile/src'
import AllThemes from '../../../utils/all-themes'
import Author from '../../../elements/author/src'
import theme from '../../../utils/theme-selector'

import Hero from './'

export default {
  title: 'Elements/Hero'
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
    img: '/hero/money-man.png',
    position: {
      backgroundSize: ['auto 125%', 'auto calc(110% + 280px)'],
      backgroundPosition: ['right -130px bottom -150px', 'left 50% top 0']
    }
  },
  Tom: {
    img: '/hero/tom.png',
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
  const headline = text(
    'Headline',
    'Short snappy headline that runs over two lines'
  )
  const fgImageKey = select(
    'Foreground image',
    Object.keys(people),
    'Jumping guy'
  )

  const bgColor = text('Custom Color', '')
  const fgImage = people[fgImageKey]
  const imageOnMobile = boolean('Display foreground image on mobile?', true)
  const imageOnTablet = boolean('Display foreground image on Tablet?', true)

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
      <Hero
        container={Container}
        fgImage={fgImage.img}
        fgImagePosition={fgImage.position}
        fgImageOnMobile={imageOnMobile}
        fgImageOnTablet={imageOnTablet}
        customBgColor={bgColor}
        breadcrumbs={breadcrumbs}
      >
        <Row>
          <Col span={[12, 5]}>
            <Themed.h1 sx={{ marginTop: 0, fontSize: ['lg', 'xl', 'xxl'] }}>
              {headline}
            </Themed.h1>
            <div sx={{ backgroundColor: 'white', padding: 20 }}>
              <Themed.p sx={{ marginTop: 0 }}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </Themed.p>
              <div sx={{ button: { width: 'auto' } }}>
                <Button variant="primary">Optional CTA</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Hero>
    </div>
  )
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

interface PanelHelperProps extends React.HTMLAttributes<any> {
  icon: string
}
const IconPanelHelper: React.FC<PanelHelperProps> = ({ icon, children }) => {
  const iconImg = <img src={`/money-icons/${icon}.svg`} />
  return <IconTile icon={iconImg}>{children}</IconTile>
}

const moneyHero = {
  img: '/hero/mTilted.svg',
  position: {
    bottom: 0,
    right: 0,
    transform: 'scale(1.4) translate(40%, 5%)'
  }
}

export const MoneyHomepageHero = () => {
  return (
    <div sx={{ margin: -10 }}>
      <Hero
        container={Container}
        fgImage={moneyHero.img}
        fgImageType="img"
        fgImagePosition={moneyHero.position}
      >
        <Row>
          <Col span={[12, 6]}>
            <Themed.h1 sx={{ marginTop: 0 }}>
              Get a headstart on your savings goals and take out an investment
              ISA
            </Themed.h1>
            <Button variant="primary">Compare investment ISAs</Button>
          </Col>
        </Row>
        <Themed.h2>
          Compare and find the deal that&apos;s right for you
        </Themed.h2>
        <Row wrap direction="row">
          <Col span={[6, 3]}>
            <IconPanelHelper icon="creditCards">Credit cards</IconPanelHelper>
          </Col>
          <Col span={[6, 3]}>
            <IconPanelHelper icon="mortgages">Mortgages</IconPanelHelper>
          </Col>
          <Col span={[6, 3]}>
            <IconPanelHelper icon="loans">Loans</IconPanelHelper>
          </Col>
          <Col span={[6, 3]}>
            <IconPanelHelper icon="savingAccounts">
              Savings accounts
            </IconPanelHelper>
          </Col>
          <Col span={[6, 3]}>
            <IconPanelHelper icon="travelMoney">Travel money</IconPanelHelper>
          </Col>
          <Col span={[6, 3]}>
            <IconPanelHelper icon="currentAccounts">
              Current accounts
            </IconPanelHelper>
          </Col>
          <Col span={[6, 3]}>
            <IconPanelHelper icon="carInsurance">Car insurance</IconPanelHelper>
          </Col>
          <Col span={[6, 3]}>
            <IconPanelHelper icon="investments">Investments</IconPanelHelper>
          </Col>
        </Row>
      </Hero>
    </div>
  )
}

MoneyHomepageHero.story = {
  parameters: {
    percy: { skip: true }
  }
}

const bbDealsHero = {
  img: '/hero/mTilted.svg'
}
const breadcrumbs = (
  <Breadcrumbs
    crumbs={crumbs}
    title="Understanding energy bills and electricity bills - FAQs and more"
    variant="light"
  />
)
const image = <img src="/contentful/kitten200x200-9.jpeg" alt="Salman" />
const bottomImageOverflow = '33%'

export const BBDealsExample = () => (
  <div>
    <Hero
      container={Container}
      fgImage={bbDealsHero.img}
      breadcrumbs={breadcrumbs}
      bottomImageOverflow={bottomImageOverflow}
    >
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column' as const,
          height: 'fit-content',
          paddingBottom: bottomImageOverflow
        }}
      >
        <Themed.p sx={{ color: 'pure-white', fontSize: 'base' }}>
          13th March 2020
        </Themed.p>
        <Themed.h1
          sx={{
            fontSize: ['lg', 'xl'],
            color: 'pure-white',
            marginTop: 0,
            maxWidth: ['80%', '60%']
          }}
        >
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs.
        </Themed.h1>
        <Author
          variant="primary"
          title="Jane smith"
          titleUrl="https://www.jonathanfielding.com/"
          authorImage={image}
          subtitle="Broadband Deals Expert"
        />
      </div>
    </Hero>
  </div>
)

BBDealsExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const ExampleWithPalette = () => {
  const breadcrumbsVariant = select(
    'Breadcrumbs variant',
    variants,
    'base'
  ) as Variant
  const headline = text(
    'Headline',
    'Short snappy headline that runs over two lines'
  )
  const fgImageKey = select(
    'Foreground image',
    Object.keys(people),
    'Jumping guy'
  )

  const bgColor = text('Custom Color', '')
  const fgImage = people[fgImageKey]
  const imageOnMobile = boolean('Display foreground image on mobile?', true)
  const imageOnTablet = boolean('Display foreground image on Tablet?', true)

  const applyPalette = boolean('Apply palette?', false, 'Palette')
  const backgroundColor = color(
    'accentColor',
    theme().elements['hero']?.wrapper?.backgroundColor,
    'Palette'
  )

  const breadcrumbs = (
    <Breadcrumbs
      crumbs={crumbs}
      title="Understanding energy bills and electricity bills - FAQs and more"
      variant={breadcrumbsVariant}
    />
  )

  return (
    <div sx={{ margin: -10 }}>
      <PaletteProvider
        value={{
          backgroundColor: applyPalette ? backgroundColor : null
        }}
      >
        <Hero
          container={Container}
          fgImage={fgImage.img}
          fgImagePosition={fgImage.position}
          fgImageOnMobile={imageOnMobile}
          fgImageOnTablet={imageOnTablet}
          customBgColor={bgColor}
          breadcrumbs={breadcrumbs}
        >
          <Row>
            <Col span={[12, 5]}>
              <Themed.h1 sx={{ marginTop: 0, fontSize: ['lg', 'xl', 'xxl'] }}>
                {headline}
              </Themed.h1>
              <div sx={{ backgroundColor: 'white', padding: 20 }}>
                <Themed.p sx={{ marginTop: 0 }}>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </Themed.p>
                <div sx={{ button: { width: 'auto' } }}>
                  <Button variant="primary">Optional CTA</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Hero>
      </PaletteProvider>
    </div>
  )
}

ExampleWithPalette.story = {
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
      <AllThemes themes={['broadband-deals']}>
        <BBDealsExample />
      </AllThemes>
    </React.Fragment>
  )
}
