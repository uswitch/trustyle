/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import TestimonialCard from './'

export default {
  title: 'Compounds|Testimonial Card'
}
const quote = text(
  'Quote',
  '“Aenean nisl tortor, vestibulum sit amet elit id, pellentesque interdum diam. Mauris eu.”'
)
const ratingImg = (
  <img
    src="https://uswitch-contentful.imgix.net/n36b8lzdmgnp/2cyASLfTZAjrxhpG4Ri4Pa/a973d543bacf32d6840ad96ef0010227/4.5Stars?auto=format&fit=crop&ixlib=react-8.6.4"
    alt="4.5 out of 5 stars"
  />
)
const authorImg = (
  <img src="https://placekitten.com/200/200?image=9" alt="John Smith" />
)
const authorName = text('Author name', 'John Smith')

export const Example = () => {
  return (
    <React.Fragment>
      {/* with author image */}
      <TestimonialCard
        ratingImg={ratingImg}
        quote={quote}
        authorImg={authorImg}
        authorName={authorName}
      />
      {/* without author image */}
      <TestimonialCard
        ratingImg={ratingImg}
        quote={quote}
        authorName={authorName}
      />
    </React.Fragment>
  )
}

Example.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <Example />
    </AllThemes>
  )
}
