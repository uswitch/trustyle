/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { number, text } from '@storybook/addon-knobs'
import Breadcrumbs from '@uswitch/trustyle.breadcrumbs'

import AllThemes from '../../../utils/all-themes'

import Category from './'

export default {
  title: 'Elements|Category'
}

export const ExampleWithText = () => {
  const titleText = text('Title text', 'Title goes here')
  const textText = text(
    'Text',
    'Cat ipsum dolor sit amet, climb a tree, wait for a fireman jump to fireman then scratch his face. Why use post when this sofa is here soft kitty warm kitty little ball of furr for fall over dead (not really but gets sypathy), for missing until dinner time.'
  )

  const crumbs = [
    {
      fields: {
        path: '/',
        displayText: 'Home'
      }
    },
    {
      fields: {
        path: '/gas-electricity/',
        displayText: 'Gas & Electricity'
      }
    },
    {
      fields: {
        path: '/gas-electricity/guides',
        displayText: 'Guides'
      }
    }
  ]

  const ExampleBreadcrumbs = (
    <Breadcrumbs
      crumbs={crumbs}
      title="Understanding energy bills and electricity bills - FAQs and more"
    />
  )

  return (
    <Category
      title={titleText}
      text={textText}
      breadcrumbs={ExampleBreadcrumbs}
    />
  )
}

ExampleWithText.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const TextAndImage = () => {
  const titleText = text('Title text', 'Title goes here')
  const textText = text(
    'Text',
    'Cat ipsum dolor sit amet, climb a tree, wait for a fireman jump to fireman then scratch his face. Why use post when this sofa is here soft kitty warm kitty little ball of furr for fall over dead (not really but gets sypathy), for missing until dinner time.'
  )

  const crumbs = [
    {
      fields: {
        path: '/',
        displayText: 'Home'
      }
    },
    {
      fields: {
        path: '/gas-electricity/',
        displayText: 'Gas & Electricity'
      }
    },
    {
      fields: {
        path: '/gas-electricity/guides',
        displayText: 'Guides'
      }
    }
  ]

  const imageUrl = text(
    'Image URL',
    'https://images.unsplash.com/photo-1589112158773-dc125dae5124?w=200&h=200'
  )

  const ExampleBreadcrumbs = (
    <Breadcrumbs
      crumbs={crumbs}
      title="Understanding energy bills and electricity bills - FAQs and more"
    />
  )

  const ExampleImage = (
    <img
      style={{
        maxWidth: '100%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
      src={imageUrl}
    />
  )

  return (
    <Category
      title={titleText}
      text={textText}
      breadcrumbs={ExampleBreadcrumbs}
      image={ExampleImage}
    />
  )
}

TextAndImage.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const WithoutText = () => {
  const titleText = text('Title text', 'Title goes here')

  return <Category title={titleText} />
}

WithoutText.story = {
  parameters: {
    percy: { skip: true }
  }
}
export const CustomContainer = () => {
  const titleText = text('Title text', 'Title goes here')
  const containerWidth = number('Container width', 200)
  const Container: React.FC = ({ children }) => (
    <div style={{ width: containerWidth, margin: '0 auto' }}>{children}</div>
  )

  return <Category title={titleText} container={Container} />
}
CustomContainer.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <ExampleWithText />
      <TextAndImage />
      <WithoutText />
      <CustomContainer />
    </AllThemes>
  )
}
