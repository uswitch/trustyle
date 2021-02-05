/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import AuthorProfile from './'

export default {
  title: 'Elements/AuthorProfile'
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
      variant=""
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
  const image = (
    <img
      src="https://uswitch-contentful.imgix.net/t014ej9w3ur1/3vZPPoIqCVOYLCKsjnzA1W/ffb538138b256dc286822fed4f66633f/Sal_pic.jpg?auto=format&fit=crop&ixlib=react-8.6.4&w=1946"
      alt="Salman"
    />
  )
  const bio = text(
    'Author Biography',
    'This section is used to talk about the author. Here you can explain their background, what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
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
          <img src="https://placekitten.com/200/200?image=9" alt="Salman" />
        }
        authorUrl="https://google.com/"
        bio="This section is used to talk about the author. Here you can explain their background, what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      />
    </AllThemes>
  )
}
