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
      paddingY: 4
    }}
  >
    <span
      sx={{
        color: 'grey-60',
        fontSize: 'xs',
        fontFamily: 'base',
        fontWeight: 'base',
        fontStyle: 'normal'
      }}
    >
      Sponsored by
    </span>

    <ImgixImage
      src={providerLogoSrc}
      imgixParams={{ fit: 'clip' }}
      critical
      sx={{
        height: 40
      }}
    />
  </div>
)

export default SponsoredByTag
