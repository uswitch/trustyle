/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import AuthorProfile from './'

export default {
  title: 'Elements|AuthorProfile'
}

export const ExampleWithKnobs = () => {
  const name = text('Author name', 'Salman')
  const role = text('Author role', 'Job title')
  const authorUrl = text('Author URL', 'https://www.jonathanfielding.com/')
  const image = (
    <img src="https://placekitten.com/200/200?image=9" alt="Salman" />
  )
  const bio = text(
    'Author Biography',
    'This section is used to talk about the author. Here you can explain their background, what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  )

  return (
    <AuthorProfile
      name={name}
      role={role}
      authorImage={image}
      authorUrl={authorUrl}
      bio={bio}
    />
  )
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const ExampleWithEmail = () => {
  const name = text('Author name', 'Salman')
  const email = text('Author email', 'salman@gmail.com')
  const role = text('Author role', 'Job title')
  const authorUrl = text('Author URL', 'https://www.jonathanfielding.com/')
  const image = (
    <img src="https://placekitten.com/200/200?image=9" alt="Salman" />
  )
  const bio = text(
    'Author Biography',
    'This section is used to talk about the author. Here you can explain their background, what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  )

  return (
    <AuthorProfile
      name={name}
      role={role}
      authorImage={image}
      authorUrl={authorUrl}
      bio={bio}
      email={email}
    />
  )
}

ExampleWithEmail.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes themes={['uswitch', 'money']}>
      <AuthorProfile
        name="Salman"
        role="Job title"
        authorImage={
          <img src="https://placekitten.com/200/200?image=9" alt="Salman" />
        }
        authorUrl="https://google.com/"
        bio="This section is used to talk about the author. Here you can explain their background, what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      />
    </AllThemes>
  )
}
