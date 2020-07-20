/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import Author from './'

export default {
  title: 'Elements|Author'
}

const title = text('Title', 'Salman')
const subtitle = text('Subtitle', 'Job title')
const titleUrl = text('Title url', 'https://www.jonathanfielding.com/')
const subtitleUrl = text('Subtitle url', 'https://www.jonathanfielding.com/')
const image = <img src="https://placekitten.com/200/200?image=9" alt="Salman" />

export const Example = () => (
  <div>
    <h3>Without subtitle</h3>
    <Author title={title} authorImage={image} titleUrl={titleUrl} />
    <h3>With subtitle</h3>
    <Author
      title={title}
      subtitle={subtitle}
      authorImage={image}
      titleUrl={titleUrl}
      subtitleUrl={subtitleUrl}
    />
  </div>
)

Example.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const CondensedExample = () => (
  <div>
    <h3>Without subtitle</h3>
    <Author
      variant="condensed"
      title={title}
      authorImage={image}
      titleUrl={titleUrl}
    />
    <h3>With subtitle</h3>
    <Author
      variant="condensed"
      title={title}
      subtitle={subtitle}
      authorImage={image}
      titleUrl={titleUrl}
      subtitleUrl={subtitleUrl}
    />
  </div>
)

CondensedExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <Example />
      <CondensedExample />
    </AllThemes>
  )
}
