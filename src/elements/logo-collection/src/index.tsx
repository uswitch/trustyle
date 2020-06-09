/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  providerImage: React.ReactElement[]
}

const LogoCollection: React.FC<Props> = ({ providerImage }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}
    >
      {providerImage.map((img, i) => (
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
