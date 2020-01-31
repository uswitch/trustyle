/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { date, text } from '@storybook/addon-knobs'

import Author from './'

storiesOf('Elements|Author', module).add('Example', () => {
  const name = text('Author name', 'Salman')
  const role = text('Author role', 'Job title')
  const editorName = text('Editor name', 'Sarah Guershon')
  const editorRole = text('Editor role', 'Job title')
  const image = <img src="https://placekitten.com/200/200" alt="Salman" />
  const updatedDate = date('Article date', new Date(2020, 2, 15))

  return (
    <Author
      name={name}
      role={role}
      editorName={editorName}
      editorRole={editorRole}
      authorImage={image}
      date={updatedDate}
    />
  )
})
