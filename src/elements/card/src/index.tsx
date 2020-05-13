/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'

interface Props {
  imgSrc: string
  imgAlt: string
  imgSizes?: string
  title: string
  description: string
  linkHref: string
  linkText?: string
  className?: string
}

const variant = (prop = '') => `compounds.card${prop ? `.${prop}` : ''}`
const Card: React.FC<Props> = ({
  imgSrc,
  imgAlt,
  imgSizes = '768px',
  title,
  description,
  linkHref,
  linkText = 'Read more',
  className = ''
}) => (
  <div
    className={className}
    sx={{
      variant: variant()
    }}
  >
    <div
      sx={{
        width: '100%',
        variant: variant('img')
      }}
    >
      <Styled.a href={linkHref} sx={{ textDecoration: 'underline' }}>
        <ImgixImage
          sx={{
            height: 'auto',
            width: '100%'
          }}
          alt={imgAlt}
          src={imgSrc}
          sizes={imgSizes}
          imgixParams={{ fit: 'crop', crop: 'faces,entropy', ar: '16:9' }}
          critical
        />
      </Styled.a>
    </div>
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        variant: variant('content')
      }}
    >
      <Styled.h3 sx={{ margin: '0' }}>
        <Styled.a href={linkHref}>{title}</Styled.a>
      </Styled.h3>
      <Styled.p>{description}</Styled.p>
      <Styled.a
        href={linkHref}
        sx={{ textDecoration: 'underline', variant: variant('link') }}
      >
        {linkText}
      </Styled.a>
    </div>
  </div>
)

export default Card
