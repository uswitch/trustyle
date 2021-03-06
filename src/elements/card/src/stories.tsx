/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { boolean, date, select, text } from '@storybook/addon-knobs'
import { Col, Container, Row } from '@uswitch/trustyle.flex-grid'

import AllThemes from '../../../utils/all-themes'

import Card from './'

export default {
  title: 'Elements/Card'
}

export const VerticalCards = () => {
  const title = text('Title', 'This is a card title')
  const content = text(
    'Content',
    'its a card with a picture of a really cute kitten'
  )

  const cardDate = {
    show: boolean('Display date?', false),
    value: date('Date', new Date())
  }

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
          date={cardDate.show && cardDate.value ? cardDate.value : undefined}
          description={content}
          linkHref="https://www.uswitch.com"
          linkText="Read More"
          tag={text('Tag', 'Credit Card')}
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
              date={
                cardDate.show && cardDate.value
                  ? cardDate.value - 86400000
                  : undefined
              }
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
              date={
                cardDate.show && cardDate.value
                  ? cardDate.value - 186400000
                  : undefined
              }
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
              date={
                cardDate.show && cardDate.value
                  ? cardDate.value - 286400000
                  : undefined
              }
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
          variant="horizontal"
        />

        <Card
          imgSrc={img}
          imgAlt="Picture of a cute kitten"
          imgSizes="(max-width: 1200px) 100vw, 1200px"
          imageSize={imageSize}
          title={title}
          description={content}
          linkHref="https://www.uswitch.com"
          variant="horizontal"
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
          variant="horizontal"
          tag="Credit Card"
        />
      </Container>
    </div>
  )
}

export const BBDealsCard = () => {
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
          variant="bbdeals-card"
        />
      </Container>
    </div>
  )
}

export const HeaderChildrenExample = () => {
  const title = text('Title', '')
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
          imgSizes="(max-width: 33vw), 33vw"
          imageSize={imageSize}
          title={title}
          description={content}
          linkHref="https://www.uswitch.com"
          variant="headerImage"
          headerChildren={
            <div>
              <h2>Header elements</h2>
              <span sx={{ color: 'red' }}>comes here</span>
            </div>
          }
        />
      </Container>
    </div>
  )
}

export const VariantsExample = () => {
  const title = text('Title', 'Title')
  const linkText = text('Link text', 'Read more')
  const superScript = text('Superscript', 'Superscript')

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
        <h2>Featured Variant</h2>
        <Card
          imgSrc={img}
          imgAlt="Picture of a cute kitten"
          imgSizes="(max-width: 33vw), 33vw"
          imageSize={imageSize}
          title={title}
          description={content}
          linkHref="https://www.uswitch.com"
          variant="featured"
          contentChildren={
            <div>
              <h2>Content elements</h2>
              <span sx={{ color: 'red' }}>comes here</span>
            </div>
          }
        />
        <Card
          imgSrc={img}
          imgAlt="Picture of a cute kitten"
          imgSizes="(max-width: 33vw), 33vw"
          imageSize={imageSize}
          title={title}
          description={content}
          linkHref="https://www.uswitch.com"
          variant="featured"
          linkText={linkText}
          superScript={superScript}
          contentChildren={
            <div>
              <h2>Content elements</h2>
              <span sx={{ color: 'red' }}>comes here</span>
            </div>
          }
        />
        <h2>Featured Alternate Variant</h2>
        <Card
          imgSrc={img}
          imgAlt="Picture of a cute kitten"
          imgSizes="(max-width: 33vw), 33vw"
          imageSize={imageSize}
          title={title}
          description={content}
          linkHref="https://www.uswitch.com"
          variant="featured-alternate"
          contentChildren={
            <div>
              <h2>Content elements</h2>
              <span sx={{ color: 'red' }}>comes here</span>
            </div>
          }
        />
        <h2>Assurance Bar Variant</h2>
        <Card
          imgSrc={img}
          imgAlt="Picture of a cute kitten"
          imageSize={imageSize}
          imgSizes="35px, 35px"
          title={title}
          description={content}
          linkHref="https://www.uswitch.com"
          variant="assuranceBar"
        />
        <h2>Journey Card</h2>
        <Card
          variant="journey-card"
          title="Help me find a mortgage"
          description={
            'Tell us about yourself and get personalised deals in 2 minutess'
          }
          linkHref="https://www.uswitch.com"
          linkText="Get started"
          linkIcon="arrow"
        />
        <hr />
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

HeaderChildrenExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

VariantsExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes themes={['uswitch', 'money', 'broadband-deals']}>
      <VerticalCards />
      <HorizontalCards />
      <HeaderChildrenExample />
      <VariantsExample />
    </AllThemes>
  )
}
