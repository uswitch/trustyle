/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { text } from '@storybook/addon-knobs'

import Card from './'

export default {
  title: 'Elements|Card'
}

export const ExampleWithKnobs = () => {
  const title = text('Title', 'This is a card title')
  const content = text(
    'Content',
    'its a card with a picture of a really cute kitten'
  )
  return (
    <Card
      imgSrc="https://placekitten.com/200/200"
      title={title}
      content={content}
    />
  )
}
