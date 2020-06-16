/** @jsx jsx */
import React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import Glider from 'react-glider-carousel'

import { gliderStyles } from './glider-styles'

interface GliderEventListeners {
  gliderLoaded?: (event: any) => void
  gliderRefresh?: (event: any) => void
  gliderAnimated?: (event: any) => void
  gliderAdd?: (event: any) => void
  gliderRemove?: (event: any) => void
  gliderDestroy?: (event: any) => void
  gliderSlideVisible?: (event: any) => void
  gliderSlideHidden?: (event: any) => void
}

interface GliderSettings {
  slidesToShow?: number | string
  slidesToScroll?: number | string
  itemWidth?: number
  exactWidth?: boolean
  scrollLock?: boolean
  scrollLockDelay?: number
  resizeLock?: boolean
  responsive?: object[]
  rewind?: boolean
  scrollPropagate?: boolean
  draggable?: boolean
  dragVelocity?: number
  duration?: number
  propagateEvent?: boolean
  skipTrack?: boolean
}

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<CarouselProps>[]
  slides?: number[]
  carouselControls?: boolean
  carouselDots?: boolean
  gliderSettings?: GliderSettings
  gliderEventListeners?: GliderEventListeners
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  slides = [1, 1.5, 2.5],
  carouselDots = true,
  carouselControls = false,
  gliderSettings,
  gliderEventListeners
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
          responsive: slides.map((count, i) => ({
            breakpoint: parseInt([0, ...theme.breakpoints][i]),
            settings: {
              slidesToShow: count,
              slidesToScroll: count
            }
          })),
          ...gliderSettings
        }}
        {...gliderEventListeners}
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
