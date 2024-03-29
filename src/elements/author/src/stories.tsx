/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/react'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import Author from './'

export default {
  title: 'Elements/Author'
}

export const Example = () => {
  const title = text('Title', 'Salman')
  const subtitle = text('Subtitle', 'Job title')
  const titleUrl = text('Title url', 'https://www.jonathanfielding.com/')
  const subtitleUrl = text('Subtitle url', 'https://www.jonathanfielding.com/')
  const image = <img src="/contentful/kitten200x200-9.jpeg" alt="Salman" />

  return (
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
}

Example.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const CondensedExample = () => {
  const title = text('Title', 'Salman')
  const subtitle = text('Subtitle', 'Job title')
  const titleUrl = text('Title url', 'https://www.jonathanfielding.com/')
  const subtitleUrl = text('Subtitle url', 'https://www.jonathanfielding.com/')
  const image = <img src="/contentful/kitten200x200-9.jpeg" alt="Salman" />

  return (
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
}

CondensedExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const VariantsExample = () => {
  const title = text('Title', 'Salman')
  const subtitle = text('Subtitle', 'Job title')
  const titleUrl = text('Title url', 'https://www.jonathanfielding.com/')
  const subtitleUrl = text('Subtitle url', 'https://www.jonathanfielding.com/')
  const image = <img src="/contentful/kitten200x200-9.jpeg" alt="Salman" />

  return (
    <div>
      <h3>Primary</h3>
      <Author
        variant="primary"
        title={title}
        authorImage={image}
        titleUrl={titleUrl}
        subtitleUrl={subtitleUrl}
        subtitle={subtitle}
      />
      <h3>Secondary</h3>
      <Author
        variant="secondary"
        title={title}
        subtitle={subtitle}
        authorImage={image}
        titleUrl={titleUrl}
        subtitleUrl={subtitleUrl}
      />
    </div>
  )
}

VariantsExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <Example />
      <CondensedExample />
      <VariantsExample />
    </AllThemes>
  )
}
