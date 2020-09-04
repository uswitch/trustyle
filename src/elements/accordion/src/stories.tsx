/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import Accordion from './'

export default {
  title: 'Elements|Accordion'
}

export const SingleAccordion = () => {
  const title = text('Title', 'This is an example title')
  const content = text('Content', 'This is some example content')
  return (
    <Accordion title={title}>
      <p>{content}</p>
    </Accordion>
  )
}

SingleAccordion.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const SingleAccordionWithVariant = () => {
  const title = text('Title', 'This is an example title')
  const content = text('Content', 'This is some example content')
  const variant = text('Variant', 'eligibility-criteria')
  return (
    <Accordion title={title} variant={variant}>
      <p>{content}</p>
    </Accordion>
  )
}

SingleAccordionWithVariant.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AccordionGroup = () => {
  const groupTitle = text('Group title', 'Example group title')
  const title = text('First title', 'This is an example title')
  const content = text('First content', 'This is some example content')

  return (
    <Accordion.Group>
      <Accordion.Title as="h2">{groupTitle}</Accordion.Title>
      <Accordion title={title}>
        <p>{content}</p>
      </Accordion>
      <Accordion title="Second accordion">
        <p>Hello World</p>
      </Accordion>
      <Accordion title="Third accordion">
        <p>Hello</p>
        <p>World</p>
      </Accordion>
    </Accordion.Group>
  )
}

AccordionGroup.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AccordionGroupWithIcons = () => {
  const groupTitle = text('Group title', 'Example group title')
  const title = text('First title', 'This is an example title')
  const content = text('First content', 'This is some example content')

  return (
    <Accordion.Group iconClosed="plus" iconOpen="minus">
      <Accordion.Title as="h2">{groupTitle}</Accordion.Title>
      <Accordion title={title}>
        <p>{content}</p>
      </Accordion>
      <Accordion title="Second accordion">
        <p>Hello World</p>
      </Accordion>
      <Accordion title="Third accordion">
        <p>Hello</p>
        <p>World</p>
      </Accordion>
    </Accordion.Group>
  )
}

AccordionGroupWithIcons.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AccordionGroupWithTitleIcons = () => {
  const groupTitle = text('Group title', 'Example group title')
  const title = text('First title', 'Banking')
  const content = text('First content', 'This is some example content')
  const icon = text(
    'icon url',
    'https://uswitch-contentful.imgix.net/t014ej9w3ur1/6zc6CVHzsVn3xs0N8loxl9/763a957760ec5b183cf4f5a05fa9e4ae/Banking.svg'
  )

  const mortgagesIcon =
    'https://uswitch-contentful.imgix.net/t014ej9w3ur1/5pFgZgswDdVCcPXyXB83Iq/aab9f93ca6b1940186b548c443fb7026/mortgages.svg'
  const motoringIcon =
    'https://uswitch-contentful.imgix.net/t014ej9w3ur1/1aMIa9HTc8Lj61Jux1WTfc/a695decb14508cfe239e53e45ad3ddc3/Group_137.svg'
  const travelIcon =
    'https://uswitch-contentful.imgix.net/t014ej9w3ur1/1Ruz9BZ8aLaThxgyjUO1QL/3d19715177a7e1c5d81ddac7becea350/travel_money.svg'

  return (
    <Accordion.Group>
      <Accordion.Title as="h2">{groupTitle}</Accordion.Title>
      <Accordion title={title} icon={icon}>
        <p>{content}</p>
      </Accordion>
      <Accordion title="Motoring" icon={motoringIcon}>
        <p>Hello World</p>
      </Accordion>
      <Accordion title="Home" icon={mortgagesIcon}>
        <p>Hello World</p>
      </Accordion>
      <Accordion title="Travel" icon={travelIcon}>
        <p>Hello World</p>
      </Accordion>
    </Accordion.Group>
  )
}

AccordionGroupWithTitleIcons.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes themes={['uswitch', 'money']}>
      <AccordionGroup />
      <AccordionGroupWithIcons />
    </AllThemes>
  )
}
