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
  return (
    <div>
      {/* single card */}
      <Card
        imgSrc="https://placekitten.com/200/200"
        imgAlt="Picture of a cute kitten"
        title={title}
        content={content}
        linkHref="https://www.uswitch.com"
      />

      {/* Multiple cards */}
      <div sx={{ display: 'flex', flexDirection: ['column', 'row'] }}>
        <Card
          imgSrc="https://placekitten.com/200/200"
          imgAlt="Picture of a cute kitten"
          title={title}
          content={content}
          linkHref="https://www.uswitch.com"
          linkText="read about cats"
        />
        <Card
          imgSrc="https://placekitten.com/200/200"
          imgAlt="Picture of a cute kitten"
          title={title}
          content={content}
          linkHref="https://www.uswitch.com"
          linkText="read about dogs"
        />
        <Card
          imgSrc="https://placekitten.com/200/200"
          imgAlt="Picture of a cute kitten"
          title={title}
          content={content}
          linkHref="https://www.uswitch.com"
          linkText="read about turtles"
        />
        <Card
          imgSrc="https://placekitten.com/200/200"
          imgAlt="Picture of a cute kitten"
          title={title}
          content={content}
          linkHref="https://www.uswitch.com"
        />
      </div>
    </div>
  )
}
