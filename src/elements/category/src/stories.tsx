/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Category from './'

storiesOf('Elements|Category', module)
  .add('example with text', () => {
    const titleText = text('Title text', 'Title goes here')
    const textText = text('Text', 'Text goes here')

    return <Category title={titleText} text={textText} />
  })
  .add('example without text', () => {
    const titleText = text('Title text', 'Title goes here')

    return <Category title={titleText} />
  })
