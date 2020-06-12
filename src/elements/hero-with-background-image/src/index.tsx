/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  breadcrumbs?: React.ReactNode
  container?: React.FC<any>
  imageUrl?: string
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

const HeroWithBackgroundImage: React.FC<Props> = ({
  children,
  imageUrl,
  container: Container = DefaultContainer
}) => {
  return (
    <div
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <Container>{children}</Container>
    </div>
  )
}

export default HeroWithBackgroundImage
