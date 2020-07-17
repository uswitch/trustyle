/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { date, text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import AuthorsGroup from '.'

export default {
  title: 'Elements|Authors group'
}

const title = text('Title', 'Salman')
const subtitle = text('Subtitle', 'Job title')
const titleUrl = text('Title url', 'https://www.jonathanfielding.com/')
const subtitleUrl = text('Subtitle url', 'https://www.jonathanfielding.com/')
const authorImage = (
  <img src="https://placekitten.com/200/200?image=9" alt="Salman" />
)
const updatedDate = date('Article date', new Date(2020, 2, 15))

const author: any = {
  title,
  subtitle,
  titleUrl,
  subtitleUrl,
  authorImage,
  updatedDate
}
export const Example = () => {
  return <AuthorsGroup date={465463} authors={[author, author]} />
}

Example.story = {
  parameters: {
    percy: { skip: true }
  }
}
export const CondensedExample = () => {
  return (
    <AuthorsGroup
      variant="condensed"
      date={465463}
      authors={[author, author]}
    />
  )
}

CondensedExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <Example />
    </AllThemes>
  )
}
