/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { number, text } from '@storybook/addon-knobs'

import CategoryTitle from './'

storiesOf('Elements|CategoryTitle', module).add('example', () => {
  const headingLevel = number('Heading level', 1, {
    range: true,
    min: 1,
    max: 6,
    step: 1
  }) as 1 | 2 | 3 | 4 | 5 | 6
  const titleText = text('Title text', 'Title goes here')

  return <CategoryTitle level={headingLevel}>{titleText}</CategoryTitle>
})
