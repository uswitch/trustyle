/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  logoImage: React.ReactElement[]
}

const LogoCollection: React.FC<Props> = ({ logoImage }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}
    >
      {logoImage.map((img, i) => (
        <div
          key={`logo-collection-${i}`}
          sx={{
            variant: 'logoCollection.base'
          }}
        >
          {img}
        </div>
      ))}
    </div>
  )
}

export default LogoCollection
