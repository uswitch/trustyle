/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { select, text } from '@storybook/addon-knobs'
import { Col, Container, Row } from '@uswitch/trustyle.flex-grid'

import AllThemes from '../../../utils/all-themes'

import Card from './'

export default {
  title: 'Elements|Card'
}

export const VerticalCards = () => {
  const title = text('Title', 'This is a card title')
  const content = text(
    'Content',
    'its a card with a picture of a really cute kitten'
  )

  const imageSize = select(
    'Image Size',
    { cover: 'cover', contain: 'contain' },
    'cover'
  )

  const img =
    'https://uswitch-contentful.imgix.net/t014ej9w3ur1/YPnGDSG9aTIPmg1rlWsZu/94483e7cec0dd6ac947e1f974650210f/800.jpg'

  const imgColumnSizes =
    '(max-width: 768px) 100vw, (max-width: 992px) 50vw, 400px'

  return (
    <div>
      {/* single card */}

      <Container>
        <Card
          imgSrc={img}
          imgAlt="Picture of a cute kitten"
          imgSizes="(max-width: 1200px) 100vw, 1200px"
          imageSize={imageSize}
          title={title}
          description={content}
          linkHref="https://www.uswitch.com"
          tag="Credit Card"
        />
      </Container>

      {/* Multiple cards */}
      <Container>
        <Row cols={[1, 2, 3]}>
          <Col span={1}>
            <Card
              imgSrc={img}
              imgAlt="Picture of a cute kitten"
              imgSizes={imgColumnSizes}
              imageSize={imageSize}
              title={title}
              description={content}
              linkHref="https://www.uswitch.com"
              linkText="read about cats"
              tag="Credit Card"
            />
          </Col>
          <Col span={1}>
            <Card
              imgSrc={img}
              imgAlt="Picture of a cute kitten"
              imgSizes={imgColumnSizes}
              imageSize={imageSize}
              title={title}
              description={
                content +
                ' with some extra words to make the card taller  with some extra words to make the card taller  with some extra words to make the card taller '
              }
              linkHref="https://www.uswitch.com"
              linkText="read about cats"
              tag="Credit Card"
            />
          </Col>
          <Col span={1}>
            <Card
              superScript="01 January 2020"
              imgSrc={img}
              imgAlt="Picture of a cute kitten"
              imgSizes={imgColumnSizes}
              imageSize={imageSize}
              title={title}
              description={content}
              linkHref="https://www.uswitch.com"
              linkText="read about cats"
              tag="Credit Card"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const HorizontalCards = () => {
  const title = text('Title', 'This is a card title')
  const content = text(
    'Content',
    'its a card with a picture of a really cute kitten'
  )

  const imageSize = select(
    'Image Size',
    { cover: 'cover', contain: 'contain' },
    'cover'
  )

  const img =
    'https://uswitch-contentful.imgix.net/t014ej9w3ur1/YPnGDSG9aTIPmg1rlWsZu/94483e7cec0dd6ac947e1f974650210f/800.jpg'

  return (
    <div>
      <Container>
        <Card
          imgSrc={img}
          imgAlt="Picture of a cute kitten"
          imgSizes="(max-width: 1200px) 100vw, 1200px"
          imageSize={imageSize}
          title={title}
          description={content}
          linkHref="https://www.uswitch.com"
          horizontal
          tag="Credit Card"
        />

        <Card
          imgSrc={img}
          imgAlt="Picture of a cute kitten"
          imgSizes="(max-width: 1200px) 100vw, 1200px"
          imageSize={imageSize}
          title={title}
          description={content}
          linkHref="https://www.uswitch.com"
          horizontal
          tag="Credit Card"
        />

        <Card
          superScript="01 January 2020"
          imgSrc={img}
          imgAlt="Picture of a cute kitten"
          imgSizes="(max-width: 1200px) 100vw, 1200px"
          imageSize={imageSize}
          title={title}
          description={content}
          linkHref="https://www.uswitch.com"
          horizontal
          tag="Credit Card"
        />
      </Container>
    </div>
  )
}

HorizontalCards.story = {
  parameters: {
    percy: { skip: true }
  }
}

VerticalCards.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes themes={['uswitch', 'money']}>
      <VerticalCards />
      <HorizontalCards />
    </AllThemes>
  )
}
