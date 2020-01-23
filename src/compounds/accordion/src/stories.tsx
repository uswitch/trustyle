/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Accordion from './'

storiesOf('Compounds|Accordion', module).add('Example', () => {
  const title = text('Title', 'This is an example title')
  const content = text('Content', 'This is some example content')
  return <Accordion title={title}>
    {content}
  </Accordion>
})
