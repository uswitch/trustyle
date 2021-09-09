/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'
import { Carousel } from '@uswitch/trustyle.carousel'

import AllThemes from '../../../utils/all-themes'

import TestimonialCard from './'

export default {
  title: 'Compounds/Testimonial Card'
}
const quote = text(
  'Quote',
  '“Aenean nisl tortor, vestibulum sit amet elit id, pellentesque interdum diam. Mauris eu.”'
)
const ratingImg = <img src="/contentful/stars-4.svg" alt="4.5 out of 5 stars" />
const authorImg = (
  <img src="/contentful/kitten200x200-9.jpeg" alt="John Smith" />
)
const authorName = text('Author name', 'John Smith')

const TestimonialCardExample = () => (
  <TestimonialCard
    ratingImg={ratingImg}
    quote={quote}
    authorImg={authorImg}
    authorName={authorName}
  />
)

const TestimonialCardExampleNoAuthorImage = () => (
  <TestimonialCard
    ratingImg={ratingImg}
    quote={quote}
    authorImg={authorImg}
    authorName={authorName}
  />
)

export const Example = () => {
  return (
    <React.Fragment>
      {/* with author image */}
      <TestimonialCardExample />
      {/* without author image */}
      <TestimonialCardExampleNoAuthorImage />
    </React.Fragment>
  )
}

export const ExampleInCarousel = () => {
  return (
    <React.Fragment>
      <Carousel>
        <TestimonialCardExample />
        <TestimonialCardExample />
        <TestimonialCardExample />
      </Carousel>
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
