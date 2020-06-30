/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  providerLogoSrc: string
  className?: string
  providerText?: string
}

const SponsoredByTag: React.FC<Props> = ({
  providerLogoSrc,
  className = '',
  providerText = 'Sponsored by'
}) => (
  <div
    className={className}
    sx={{
      variant: 'elements.sponsoredByTag.base.wrapper'
    }}
  >
    <span
      sx={{
        variant: 'elements.sponsoredByTag.base.text'
      }}
    >
      {providerText}
    </span>

    <ImgixImage
      src={providerLogoSrc}
      imgixParams={{ fit: 'clip' }}
      critical
      sx={{
        variant: 'elements.sponsoredByTag.base.image'
      }}
    />
  </div>
)

export default SponsoredByTag
