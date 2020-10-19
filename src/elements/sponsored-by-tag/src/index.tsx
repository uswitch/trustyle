/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  providerLogoSrc: string
  className?: string
  providerText?: string
  providerName: string
}

const SponsoredByTag: React.FC<Props> = ({
  providerLogoSrc,
  className = '',
  providerText = 'Sponsored by',
  providerName
}) => (
  <div
    className={className}
    sx={{
      variant: 'elements.sponsored-by-tag.base.wrapper'
    }}
  >
    <span
      sx={{
        variant: 'elements.sponsored-by-tag.base.text'
      }}
    >
      {providerText}
    </span>

    <ImgixImage
      src={providerLogoSrc}
      alt={providerName}
      imgixParams={{ fit: 'clip' }}
      critical
      sx={{
        variant: 'elements.sponsored-by-tag.base.image'
      }}
    />
  </div>
)

export default SponsoredByTag
