/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { date, text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import Author from './'

export default {
  title: 'Elements|Author'
}

export const Example = () => {
  const name = text('Author name', 'Salman')
  const role = text('Author role', 'Job title')
  const editorName = text('Editor name', 'Sarah Guershon')
  const editorRole = text('Editor role', 'Job title')
  const authorUrl = text('Author role', 'https://www.jonathanfielding.com/')
  const editorUrl = text('Author role', 'https://www.jonathanfielding.com/')
  const image = (
    <img src="https://placekitten.com/200/200?image=9" alt="Salman" />
  )
  const updatedDate = date('Article date', new Date(2020, 2, 15))

  return (
    <div>
      <h3>Without editor</h3>
      <Author
        name={name}
        role={role}
        authorImage={image}
        authorUrl={authorUrl}
        date={updatedDate}
      />
      <h3>Without date</h3>
      <Author
        name={name}
        role={role}
        authorImage={image}
        authorUrl={authorUrl}
      />
      <h3>With editor</h3>
      <Author
        name={name}
        role={role}
        editorName={editorName}
        editorRole={editorRole}
        authorImage={image}
        authorUrl={authorUrl}
        editorUrl={editorUrl}
        date={updatedDate}
      />
    </div>
  )
}

Example.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes themes={['uswitch', 'money']}>
      <Example />
    </AllThemes>
  )
}
