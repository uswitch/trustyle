/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { date, text } from '@storybook/addon-knobs'
import Author from '@uswitch/trustyle.author'

import ArticleIntro from './'

export default {
  title: 'Compounds|ArticleIntro'
}

export const ExampleWithKnobs = () => {
  const title = text('Title', 'What is gadget insurance?')
  const description = text(
    'Description',
    ' If you’ve ever dropped your mobile, you’ll know it can be expensive to repair or replace. Carrying your phone, laptop or camera around with you risks them being lost, stolen or damaged.'
  )

  const name = text('Author name', 'Salman')
  const role = text('Author role', 'Job title')
  const authorUrl = text('Author url', 'https://www.jonathanfielding.com')
  const editorName = text('Editor name', 'Sarah Guershon')
  const editorRole = text('Editor role', 'Job title')
  const editorUrl = text('Editor url', 'https://www.jonathanfielding.com')
  const image = (
    <img src="https://placekitten.com/200/200?image=9" alt="Salman" />
  )
  const updatedDate = date('Article date', new Date(2020, 2, 15))

  const author = (
    <Author
      name={name}
      role={role}
      authorUrl={authorUrl}
      editorName={editorName}
      editorRole={editorRole}
      editorUrl={editorUrl}
      authorImage={image}
      date={updatedDate}
    />
  )

  return (
    <ArticleIntro title={title} author={author} description={description} />
  )
}
