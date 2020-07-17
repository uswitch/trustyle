/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { date, text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import AuthorsGroup from '.'

export default {
  title: 'Elements|Authors group'
}

const name = text('Author name', 'Salman')
const role = text('Author role', 'Job title')
const editorName = text('Editor name', 'Sarah Guershon')
const editorRole = text('Editor role', 'Job title')
const authorUrl = text('Author role', 'https://www.jonathanfielding.com/')
const editorUrl = text('Author role', 'https://www.jonathanfielding.com/')
const authorImage = (
  <img src="https://placekitten.com/200/200?image=9" alt="Salman" />
)
const updatedDate = date('Article date', new Date(2020, 2, 15))

export const Example = () => {
  const author: any = {
    name,
    role,
    editorName,
    editorRole,
    authorUrl,
    editorUrl,
    authorImage,
    updatedDate
  }

  return <AuthorsGroup date={465463} authors={[author, author]} />
}

Example.story = {
  parameters: {
    percy: { skip: true }
  }
}
export const CondensedExample = () => {
  const author: any = {
    name,
    role,
    editorName,
    editorRole,
    authorUrl,
    editorUrl,
    authorImage,
    updatedDate
  }

  return <AuthorsGroup variant="condensed" authors={[author, author]} />
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
