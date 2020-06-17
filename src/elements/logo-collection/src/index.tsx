/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  logoImage: React.ReactElement[]
  className?: string
}

const LogoCollection: React.FC<Props> = ({ logoImage, className }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        variant: 'logoCollection.base.outer'
      }}
      className={className}
    >
      {logoImage.map((img, i) => (
        <div
          key={img.key || i}
          sx={{
            variant: 'logoCollection.base.inner'
          }}
        >
          {img}
        </div>
      ))}
    </div>
  )
}

export default LogoCollection
