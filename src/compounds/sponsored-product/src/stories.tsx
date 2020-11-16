/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { text } from '@storybook/addon-knobs'

import { Col, Container, Row } from '../../../layout/flex-grid/src/index'
import AllThemes from '../../../utils/all-themes'

import SponsoredProduct from '.'

export default {
  title: 'Compounds/Sponsored product'
}

export const ExampleWithKnobs = () => {
  const title = text('Title', 'Apple iPhone XR 64Gb')
  const imgSrc = text(
    'Image Url',
    'https://uswitch-mobiles-contentful.imgix.net/kf81nsuntxeb/3PNmGXJpUL26qMX2odn7XI/d0d1311039c02d3e34cd501b9cbfa5ed/iphone-11-grey-front.png'
  )
  const imgAlt = text('Image Alt', 'iPhone 11')
  const usps = [
    { text: text('USP', 'Free insurance for 2 months') },
    { text: text('USP2', 'Uswitch Award') }
  ]
  const href = text('href', 'https://www.uswitch.com/mobiles/')
  const target = text('target', '_blank')
  const sponsorName = text('Sponsor name', 'Three')
  const sponsorSrc = text(
    'Sponsor url',
    'https://uswitch-mobiles-contentful.imgix.net/kf81nsuntxeb/5eyE4LyswwqIYk0mIsE820/dc0774e3e62d7b39ddeb1729d823a8da/Logo_-_three.png'
  )
  const award = text('Award', 'Uswitch Manufacturer of the Year')
  const enhanced = text(
    'Enhanced image url',
    'https://media-exp1.licdn.com/dms/image/C4E12AQE4xoCnD9YOYg/article-cover_image-shrink_600_2000/0?e=1591833600&v=beta&t=M5KsjSiq_qa5od-ZpqhcdesChm8pRobpp6RT-fHzo1s'
  )
  const brandCaptionText = text(
    'Brand caption',
    'No landline needed. No engineer needed. Forget fibre. Join the party.'
  )

  return (
    <React.Fragment>
      <div>
        <SponsoredProduct
          title={title}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          usps={usps}
          href={href}
          target={target}
          sponsorName={sponsorName}
          sponsorSrc={sponsorSrc}
          award={award}
          enhancedImgSrc={enhanced}
          brandCaption={brandCaptionText}
          informationDetails={[
            {
              prefix: '',
              value: text('value', '30'),
              suffix: text('suffix', 'GB'),
              label: 'data'
            },
            {
              prefix: '£',
              value: '30.00',
              suffix: '',
              label: 'per month'
            }
          ]}
        />
      </div>
      <Container
        sx={{
          backgroundColor: 'blue',
          py: 'sm'
        }}
      >
        <Row
          cols={[4, 8, 8]}
          sx={{
            mt: 40,
            pt: 50,
            pb: 70
          }}
        >
          <Col offset={[0.05, 2, 2]} span={[4, 4, 4]}>
            <SponsoredProduct
              title={'Sky Superfast Broadband'}
              usps={[
                { text: '£22 p/m & no setup cost' },
                {
                  text: 'Superfast Broadband ever',
                  color: 'linear-gradient(90deg, #C1B0E6 0%, #C1C0FF 100%)',
                  beforeColor: '#141424'
                }
              ]}
              boxShadowColor={'#AC96DE'}
              sponsorName={'Sky'}
              sponsorSrc={
                'https://uswitch-cms.imgix.net/uswitch-assets-eu/broadband/images/providers/sky.png?auto=compress%2Cformat&amp;fit=clip&amp;ixlib=react-9.0.1&amp;w=120'
              }
              award={award}
              informationDetails={[
                {
                  prefix: '',
                  value: '76',
                  suffix: 'Mb',
                  label: 'up to* speed'
                },
                {
                  prefix: '£',
                  value: '22.00',
                  suffix: '',
                  label: 'per month'
                }
              ]}
              uspSx={{
                span: {
                  fontSize: 12
                }
              }}
              infoBlockSx={{
                p: {
                  fontSize: 12
                }
              }}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
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
      <ExampleWithKnobs />
    </AllThemes>
  )
}
