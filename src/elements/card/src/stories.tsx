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
      <Card
        imgSrc="https://placekitten.com/200/200"
        title={title}
        content={content}
        linkHref="https://www.uswitch.com"
      />
      <div sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Card
          imgSrc="https://placekitten.com/200/200"
          title={title}
          content={content}
          linkHref="https://www.uswitch.com"
          linkText="read about cats"
        />
        <Card
          imgSrc="https://placekitten.com/200/200"
          title={title}
          content={content}
          linkHref="https://www.uswitch.com"
          linkText="read about dogs"
        />
        <Card
          imgSrc="https://placekitten.com/200/200"
          title={title}
          content={content}
          linkHref="https://www.uswitch.com"
          linkText="read about turtles"
        />
      </div>
    </div>
  )
}
