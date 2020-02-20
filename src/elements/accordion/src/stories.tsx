/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { text } from '@storybook/addon-knobs'

import Accordion from './'

export default {
  title: 'Elements|Accordion'
}

export const SingleAccordion = () => {
  const title = text('Title', 'This is an example title')
  const content = text('Content', 'This is some example content')
  return <Accordion title={title}>{content}</Accordion>
}

export const AccordionGroup = () => {
  const title = text('First title', 'This is an example title')
  const content = text('First content', 'This is some example content')

  return (
    <Accordion.Group>
      <Accordion title={title}>{content}</Accordion>
      <Accordion title="Second accordion">Hello world again!</Accordion>
      <Accordion title="Third accordion">Some new text</Accordion>
    </Accordion.Group>
  )
}
