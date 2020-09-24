/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { date, text } from '@storybook/addon-knobs'
import Author from '@uswitch/trustyle.author'
import dayjs from '@uswitch/trustyle.date'

import AllThemes from '../../../utils/all-themes'

import ArticleIntro from './'

export default {
  title: 'Compounds/ArticleIntro'
}

export const ExampleWithKnobs = () => {
  const authorTitle = text('Author title', 'Written by Salman, Job title')
  const authorTitleUrl = text('Title url', 'https://www.jonathanfielding.com/')
  const authorSubtitleUrl = text(
    'Subtitle url',
    'https://www.jonathanfielding.com/'
  )
  const authorImage = (
    <img src="https://placekitten.com/200/200?image=9" alt="Salman" />
  )

  const title = text('Title', 'What is gadget insurance?')
  const description = text(
    'Description',
    ' If you’ve ever dropped your mobile, you’ll know it can be expensive to repair or replace. Carrying your phone, laptop or camera around with you risks them being lost, stolen or damaged.'
  )

  const updatedDate = date('Article date', new Date(2020, 2, 15))
  const authorSubtitle = text(
    'Author subtitle',
    `Edited by Sarah Guershon, ${dayjs(updatedDate).format('LL')}`
  )

  const author = (
    <Author
      title={authorTitle}
      subtitle={authorSubtitle}
      titleUrl={authorTitleUrl}
      subtitleUrl={authorSubtitleUrl}
      authorImage={authorImage}
    />
  )

  return (
    <ArticleIntro title={title} author={author} description={description} />
  )
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  const date = new Date(2020, 2, 15).getTime()
  return (
    <AllThemes themes={['uswitch', 'money']}>
      <ArticleIntro
        title="What is gadget insurance?"
        author={
          <Author
            title="Written by Salman, Job title"
            titleUrl="https://www.jonathanfielding.com"
            subtitle={
              'Edite by Sarah Guershon, Job title, ' + dayjs(date).format('LL')
            }
            subtitleUrl="https://www.jonathanfielding.com"
            authorImage={
              <img src="https://placekitten.com/200/200?image=9" alt="Salman" />
            }
          />
        }
        description="If you’ve ever dropped your mobile, you’ll know it can be expensive to repair or replace. Carrying your phone, laptop or camera around with you risks them being lost, stolen or damaged."
      />
    </AllThemes>
  )
}
