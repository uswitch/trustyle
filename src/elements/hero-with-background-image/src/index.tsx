/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  breadcrumbs?: React.ReactNode
  container?: React.FC<any>
  imageUrl?: string
}

const testUrl = "https://bankrate-contentful.imgix.net/av9bri1l3qli/7sbWLFU7hxGV58I6SN9Wzl/2896300c00c95e4193118e533d0fe517/Secrets-financial-planer-commission"

const HeroWithBackgroundImage: React.FC<Props> = ({
  breadcrumbs,
  children,
  imageUrl
}) => {
  console.log("imageUrl", imageUrl)
  return (
    <div sx={{ position: 'relative', overflow: 'hidden', variant: 'hero-with-background-image' }} >
      <div sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${imageUrl})`,
      }}>
        Hello
      </div>
    </div>
  )
}

export default HeroWithBackgroundImage
