/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

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
  return (
    <div
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        variant: 'modules.hero-with-background-image',
        backgroundImage: `url(${imageUrl})`
      }}
      className={className}
    >
      {children}
    </div>
  )
}

export default HeroWithBackgroundImage
