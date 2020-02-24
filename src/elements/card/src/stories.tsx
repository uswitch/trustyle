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
  const img = 'https://placekitten.com/200/200?image=1'
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
        <Card
          imgSrc={img}
          imgAlt="Picture of a cute kitten"
          title={title}
          description={content}
          linkHref="https://www.uswitch.com"
          linkText="read about cats"
        />
        <Card
          imgSrc={img}
          imgAlt="Picture of a cute kitten"
          title={title}
          description={content}
          linkHref="https://www.uswitch.com"
          linkText="read about dogs"
        />
        <Card
          imgSrc={img}
          imgAlt="Picture of a cute kitten"
          title={title}
          description={content}
          linkHref="https://www.uswitch.com"
          linkText="read about turtles"
        />
        <Card
          imgSrc={img}
          imgAlt="Picture of a cute kitten"
          title={title}
          description={content}
          linkHref="https://www.uswitch.com"
        />
      </div>
    </div>
  )
}
