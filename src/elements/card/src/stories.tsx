/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'
import { Col, Container, Row } from '@uswitch/trustyle.flex-grid'

import Card from './'

export default {
  title: 'Elements|Card'
}

export const ExampleCards = () => {
  const title = text('Title', 'This is a card title')
  const content = text(
    'Content',
    'its a card with a picture of a really cute kitten'
  )

  const img =
    'https://uswitch-contentful.imgix.net/t014ej9w3ur1/YPnGDSG9aTIPmg1rlWsZu/94483e7cec0dd6ac947e1f974650210f/800.jpg'
  return (
    <div>
      {/* single card */}

      <Container>
        <Card
          imgSrc={img}
          imgAlt="Picture of a cute kitten"
          imgSizes="(max-width: 1200px) 100vw, 1200px"
          title={title}
          description={content}
          linkHref="https://www.uswitch.com"
        />
      </Container>

      {/* Multiple cards */}
      <Container>
        <Row cols={[1, 2, 3]}>
          <Col span={1}>
            <Card
              imgSrc={img}
              imgAlt="Picture of a cute kitten"
              title={title}
              description={content}
              linkHref="https://www.uswitch.com"
              linkText="read about cats"
            />
          </Col>
          <Col span={1}>
            <Card
              imgSrc={img}
              imgAlt="Picture of a cute kitten"
              title={title}
              description={
                content +
                ' with some extra words to make the card taller  with some extra words to make the card taller  with some extra words to make the card taller '
              }
              linkHref="https://www.uswitch.com"
              linkText="read about cats"
            />
          </Col>
          <Col span={1}>
            <Card
              imgSrc={img}
              imgAlt="Picture of a cute kitten"
              title={title}
              description={content}
              linkHref="https://www.uswitch.com"
              linkText="read about cats"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
