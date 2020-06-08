/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'

import { Carousel } from './'

export default {
  title: 'Compounds|Carousel'
}

export const ResponsiveCarousel = () => {
  return (
    <Carousel slides={[1.5, 2.5, 3.5]}>
      <div sx={{ height: '100px', backgroundColor: 'blue' }}>Slide 1</div>
      <div sx={{ height: '100px', backgroundColor: 'red' }}>Slide 2</div>
      <div sx={{ height: '100px', backgroundColor: 'green' }}>Slide 3</div>
      <div sx={{ height: '100px', backgroundColor: 'yellow' }}>Slide 4</div>
    </Carousel>
  )
}

export const AutomatedTests = () => {
  const permutations = permutationsGenerator({
    variant: ['primary', 'secondary']
  })

  return (
    <AllThemes>
      {permutations.map((p, i) => (
        <Carousel slides={[1.5, 2.5, 3.5]} key={i}>
          <div sx={{ height: '100px', backgroundColor: 'blue' }}>Slide 1</div>
          <div sx={{ height: '100px', backgroundColor: 'red' }}>Slide 2</div>
          <div sx={{ height: '100px', backgroundColor: 'green' }}>Slide 3</div>
          <div sx={{ height: '100px', backgroundColor: 'yellow' }}>Slide 4</div>
        </Carousel>
      ))}
    </AllThemes>
  )
}
