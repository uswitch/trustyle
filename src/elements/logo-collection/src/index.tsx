/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  logoImage: React.ReactElement[]
  className?: string
  variant?: string
}

const getStyles = (variant = '', element = ''): string =>
  `elements.logo-collection.${
    variant ? 'variants.'.concat(variant) : 'base'
  }.${element}`

const LogoCollection: React.FC<Props> = ({ logoImage, className, variant }) => (
  <div
    sx={{
      display: 'flex',
      flexWrap: 'wrap' as const,
      alignItems: 'center',
      justifyContent: 'center',
      variant: getStyles(variant, 'outer')
    }}
    className={className}
  >
    {logoImage.map((img, i) => (
      <div key={img.key || i} sx={{ variant: getStyles(variant, 'inner') }}>
        {img}
      </div>
    ))}
  </div>
)

export default LogoCollection
