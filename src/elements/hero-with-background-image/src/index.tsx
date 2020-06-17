/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  breadcrumbs?: React.ReactNode
  container?: React.FC<any>
  imageUrl?: string
  gradient?: string
  className?: string
}

const DefaultContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={className}
      sx={{ margin: 'auto', variant: 'grid.container' }}
    >
      {children}
    </div>
  )
}

const createBackgroundStr = (
  gradient: string | undefined,
  imageUrl: string | undefined
) => {
  if (gradient && imageUrl) {
    return `${gradient}, url(${imageUrl})`
  } else if (imageUrl) {
    return `url(${imageUrl})`
  } else {
    return ''
  }
}

const HeroWithBackgroundImage: React.FC<Props> = ({
  children,
  imageUrl,
  container: Container = DefaultContainer,
  gradient,
  breadcrumbs,
  className
}) => {
  return (
    <div
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        variant: 'hero-with-background-image',
        backgroundImage: createBackgroundStr(gradient, imageUrl)
      }}
      className={className}
    >
      <Container>
        {breadcrumbs}
        {children}
      </Container>
    </div>
  )
}

export default HeroWithBackgroundImage
