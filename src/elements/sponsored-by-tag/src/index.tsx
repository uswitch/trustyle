/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  providerLogoSrc: string
}

const SponsoredByTag: React.FC<Props> = ({ providerLogoSrc }) => (
  <div
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'xs'
    }}
  >
    <span
      sx={{
        color: 'grey-60'
      }}
    >
      Sponsored by
    </span>

    <ImgixImage
      src={providerLogoSrc}
      imgixParams={{ fit: 'clip' }}
      critical
      sx={{
        height: 46
      }}
    />
  </div>
)

export default SponsoredByTag
