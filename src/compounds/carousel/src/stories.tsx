/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import Carousel from './'

export default {
  title: 'Compounds|Carousel'
}

export const ResponsiveCarousel = () => {
  return (
    <Carousel slidesMobile={1.5} slidesTablet={2.5} slidesDesktop={3.5}>
      <div sx={{ height: '100px', backgroundColor: 'blue' }}>Slide 1</div>
      <div sx={{ height: '100px', backgroundColor: 'red' }}>Slide 2</div>
      <div sx={{ height: '100px', backgroundColor: 'green' }}>Slide 3</div>
      <div sx={{ height: '100px', backgroundColor: 'yellow' }}>Slide 4</div>
    </Carousel>
  )
}
