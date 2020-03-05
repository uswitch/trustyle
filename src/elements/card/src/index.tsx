/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'

interface Props {
  imgSrc: string
  imgAlt: string
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
  title,
  description,
  linkHref,
  linkText = 'Read more',
  className = ''
}) => (
  <a
    className={className}
    href={linkHref}
    sx={{
      textDecoration: 'none',
      cursor: 'pointer',
      '&:hover': {
        opacity: '0.5'
      },
      variant: variant()
    }}
  >
    <div
      sx={{
        width: '100%',
        variant: variant('img')
      }}
    >
      <ImgixImage
        sx={{
          height: 'auto',
          width: '100%'
        }}
        alt={imgAlt}
        src={imgSrc}
        imgixParams={{ fit: 'crop', crop: 'edges', ar: '16:9' }}
        critical
      />
    </div>
    <div
      sx={{
        paddingY: 'xs',
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        variant: variant('content')
      }}
    >
      <Styled.h3 sx={{ margin: '0' }}>{title}</Styled.h3>
      <Styled.p>{description}</Styled.p>
      <Styled.p sx={{ textDecoration: 'underline' }}>{linkText}</Styled.p>
    </div>
  </a>
)

export default Card
