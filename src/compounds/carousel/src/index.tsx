/** @jsx jsx */
import React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import Glider from 'react-glider-carousel'

import { gliderStyles } from './glider-styles'

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<CarouselProps>[]
  slidesMobile?: number
  slidesTablet?: number
  slidesDesktop?: number
  carouselControls?: boolean
  carouselDots?: boolean
  onSlideVisible?: (slideIndex: number) => void
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  slidesMobile = 1,
  slidesTablet = 1.5,
  slidesDesktop = 2.5,
  carouselDots = true,
  carouselControls = false,
  onSlideVisible
}) => {
  const { theme }: any = useThemeUI()

  const SLIDES_PER_PAGE = [slidesMobile, slidesTablet, slidesDesktop]

  return (
    <div css={gliderStyles} sx={{ variant: 'compounds.carousel' }}>
      <Glider
        hasDots={carouselDots}
        hasArrows={carouselControls}
        settings={{
          scrollLock: true,
          draggable: true,
          slidesToShow: slidesMobile,
          responsive: SLIDES_PER_PAGE.slice(1).map((count, i) => ({
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
