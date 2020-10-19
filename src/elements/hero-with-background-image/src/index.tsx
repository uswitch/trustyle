/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  breadcrumbs?: React.ReactNode
  imageUrl?: string
  className?: string
}

const HeroWithBackgroundImage: React.FC<Props> = ({
  children,
  imageUrl,
  className
}) => {
  const { theme }: any = useThemeUI()
  const heroTheme = theme.modules['hero-with-background-image']
  const opacity = heroTheme && heroTheme['background-image']?.opacity

  const backgroundImgSx = {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${imageUrl})`
  }

  // insert pseudo element only if opacity is defined
  const imgSx = opacity
    ? {
        position: 'relative',
        '::before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: 'absolute',
          content: "''",
          opacity,
          zIndex: -100,
          ...backgroundImgSx
        }
      }
    : backgroundImgSx

  return (
    <div
      sx={{
        ...imgSx,
        variant: 'modules.hero-with-background-image'
      }}
      className={className}
    >
      {children}
    </div>
  )
}

export default HeroWithBackgroundImage
