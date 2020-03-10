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

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <AccordionGroup />
    </AllThemes>
  )
}
