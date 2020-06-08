/** @jsx jsx */
import React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import Glider from 'react-glider-carousel'

import { gliderStyles } from './glider-styles'

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<CarouselProps>[]
  slides?: number[]
  carouselControls?: boolean
  carouselDots?: boolean
  onSlideVisible?: (slideIndex: number) => void
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  slides = [1, 1.5, 2.5],
  carouselDots = true,
  carouselControls = false,
  onSlideVisible
}) => {
  const { theme }: any = useThemeUI()

  return (
    <div css={gliderStyles} sx={{ variant: 'compounds.carousel' }}>
      <Glider
        hasDots={carouselDots}
        hasArrows={carouselControls}
        settings={{
          scrollLock: true,
          draggable: true,
          slidesToShow: slides[0],
          responsive: slides.slice(1).map((count, i) => ({
            breakpoint: parseInt(theme.breakpoints[i]),
            settings: {
              slidesToShow: count,
              slidesToScroll: count
            }
          }))
        }}
        gliderSlideVisible={(event: CustomEvent) => {
          onSlideVisible && onSlideVisible(event.detail.slide)
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} sx={{ variant: 'compounds.carousel.slide' }}>
            {child}
          </div>
        ))}
      </Glider>
    </div>
  )
}
