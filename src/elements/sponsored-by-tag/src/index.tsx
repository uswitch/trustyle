/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'

const lookup = (variant: string) =>
  variant === 'base'
    ? 'elements.sponsored-by-tag.base'
    : `elements.sponsored-by-tag.variants.${variant}`

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  providerLogoSrc: string
  className?: string
  providerText?: string
  providerName: string
  variant?: 'base' | 'hero'
}

const SponsoredByTag: React.FC<Props> = ({
  providerLogoSrc,
  className = '',
  providerText = 'Sponsored by',
  providerName,
  variant = 'base'
}) => (
  <div
    className={className}
    sx={{
      variant: `${lookup(variant)}.wrapper`
    }}
  >
    <span
      sx={{
        variant: `${lookup(variant)}.text`
      }}
    >
      {providerText}
    </span>

    <ImgixImage
      src={providerLogoSrc}
      alt={providerName}
      imgixParams={{
        fit: 'fill',
        w: 92,
        h: 45,
        bg: '00FFFFFF' // weirdly, fixes size issues
      }}
      critical
      width={92}
      height={46}
      sx={{
        variant: `${lookup(variant)}.image`
      }}
    />
  </div>
)

export default SponsoredByTag
