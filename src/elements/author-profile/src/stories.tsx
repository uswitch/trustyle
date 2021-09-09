/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { select, text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import AuthorProfile from './'

export default {
  title: 'Elements/AuthorProfile'
}

export const ExampleWithKnobs = () => {
  const name = text('Author name', 'Salman')
  const role = text('Author role', 'Job title')
  const authorUrl = text('Author URL', 'https://www.jonathanfielding.com/')
  const image = <img src="/contentful/kitten200x200-9.jpeg" alt="Salman" />
  const bio = text(
    'Author Biography',
    'This section is used to talk about the author. It can be either a string or a React element. Here you can explain their background, what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  )
  const variant = select(
    'Variant',
    { left: 'left', centered: 'centered', unset: '' },
    ''
  )
  const email = text('Email', 'mailto:john@doe.com')
  const twitterLink = text('Twitter URL', 'https://www.jonathanfielding.com/')
  const linkedInLink = text('LinkedIn URL', 'https://www.jonathanfielding.com/')

  return (
    <AuthorProfile
      variant={variant}
      email={email}
      twitterLink={twitterLink}
      linkedInLink={linkedInLink}
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
  const name = text('Author name', 'Salman Haqqi')
  const email = text('Author email', 'salman@gmail.com')
  const role = text('Author role', 'Senior editor')
  const authorUrl = text('Author URL', 'https://www.jonathanfielding.com/')
  const image = <img src="/contentful/senior.jpg" alt="Salman" />
  const bio = text(
    'Author Biography',
    'This section is used to talk about the author. It can be either a string or a React element. Here you can explain their background, what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
  )

  const twitterLink = 'https://www.google.com'

  const linkedInLink = 'https://www.google.com'

  return (
    <div>
      <AuthorProfile
        name={name}
        role={role}
        authorImage={image}
        authorUrl={authorUrl}
        bio={bio}
        email={email}
        twitterLink={twitterLink}
        linkedInLink={linkedInLink}
        socialsHrefTarget="_blank"
        variant="centered"
      />
      <AuthorProfile
        variant="left"
        name={name}
        role={role}
        authorImage={image}
        authorUrl={authorUrl}
        bio={bio}
        email={email}
        twitterLink={twitterLink}
        linkedInLink={linkedInLink}
      />
    </div>
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
        variant=""
        authorImage={
          <img src="/contentful/kitten200x200-9.jpeg" alt="Salman" />
        }
        authorUrl="https://google.com/"
        bio="This section is used to talk about the author. Here you can explain their background, what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      />
    </AllThemes>
  )
}
