/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { date, text } from '@storybook/addon-knobs'

import Author from './'

storiesOf('Elements|Author', module).add('Example', () => {
  const titleText = text('Title text', 'Written by Salman, Posted by Salman')
  const author = text('Author name', 'Salman')
  const image = <img src="https://placekitten.com/200/200" alt="Salman" />
  const updatedDate = date('Article date', new Date(2020, 2, 15))

  return (
    <Author
      title={titleText}
      author={author}
      authorImage={image}
      date={updatedDate}
    />
  )
})
