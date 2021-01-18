/** @jsx jsx */

import React from 'react'
import { jsx, Styled } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'

import { Logo as LogoType } from './types'

interface Props extends React.LinkHTMLAttributes<HTMLLinkElement> {
  logo: LogoType
}

const Logo: React.FC<Props> = ({ logo, className }) => {
  const { img, alt, href } = logo

  return (
    <Styled.a href={href} className={className}>
      <ImgixImage
        alt={alt}
        src={img}
        // sizes={imgSizes}
        // critical={critical}
        // {...imageProps}
        // imgixParams={{
        //   fit: imageSize === 'cover' ? 'crop' : 'fill',
        //   crop: 'faces,entropy',
        //   ar: '16:9',
        //   fill: 'solid',
        //   ...(imageProps.imgixParams || {})
        // }}
      />
    </Styled.a>
  )
}

export default Logo
