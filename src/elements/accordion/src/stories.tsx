/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { select, text } from '@storybook/addon-knobs'

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
  const icon = select(
    'Icon',
    ['banking', 'carInsurance', 'creditCards', 'mortgages', 'travelMoney'],
    'banking'
  )

  const iconImg = (icon: string) => (
    <img
      src={require(`../../../../static/money-icons/${icon}.svg`)}
      sx={{
        height: '20px'
      }}
    />
  )

  return (
    <Accordion.Group>
      <Accordion.Title as="h2">{groupTitle}</Accordion.Title>
      <Accordion title={title} icon={iconImg(icon)}>
        <p>{content}</p>
      </Accordion>
      <Accordion title="Motoring" icon={iconImg('carInsurance')}>
        <p>Hello World</p>
      </Accordion>
      <Accordion title="Home" icon={iconImg('mortgages')}>
        <p>Hello World</p>
      </Accordion>
      <Accordion title="Travel" icon={iconImg('travelMoney')}>
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
