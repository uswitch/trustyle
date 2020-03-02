/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

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

  const contentLong = text(
    'ContentLong',
    'cvxvcvcits a card with a picture of a really cute kitten its a card with a picture of a really cute kitten its a card with a picture of a really cute kitten its a card with a picture of a really cute kitten'
  )
  const img =
    'https://uswitch-contentful.imgix.net/t014ej9w3ur1/YPnGDSG9aTIPmg1rlWsZu/94483e7cec0dd6ac947e1f974650210f/800.jpg'
  return (
    <div>
      {/* single card */}
      <Card
        imgSrc={img}
        imgAlt="Picture of a cute kitten"
        title={title}
        description={content}
        linkHref="https://www.uswitch.com"
      />

      {/* Multiple cards */}
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
          flexWrap: 'wrap'
        }}
      >
        <div sx={{ display: 'flex', width: ['auto', '33.3%'] }}>
          <Card
            imgSrc={img}
            imgAlt="Picture of a cute kitten"
            title={title}
            description={content}
            linkHref="https://www.uswitch.com"
            linkText="read about cats"
          />
        </div>
        <div sx={{ display: 'flex', width: ['auto', '33.3%'] }}>
          <Card
            imgSrc={img}
            imgAlt="Picture of a cute kitten"
            title={title}
            description={contentLong}
            linkHref="https://www.uswitch.com"
            linkText="read about cats"
          />
        </div>
        <div sx={{ display: 'flex', width: ['auto', '33.3%'] }}>
          <Card
            imgSrc={img}
            imgAlt="Picture of a cute kitten"
            title={title}
            description={content}
            linkHref="https://www.uswitch.com"
            linkText="read about cats"
          />
        </div>
      </div>
    </div>
  )
}
