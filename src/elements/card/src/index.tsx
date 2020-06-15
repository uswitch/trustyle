/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'

interface Props {
  className?: string
  date?: string
  description?: string
  horizontal?: boolean
  imageSize?: 'cover' | 'contain'
  imgAlt: string
  imgSizes?: string
  imgSrc: string
  linkHref: string
  linkText?: string
  title: string
}

const makeStyles = (variant: string) => (element?: string) =>
  `compounds.card.variants.${variant}${element ? `.${element}` : ''}`

const Card: React.FC<Props> = ({
  className = '',
  date,
  description,
  horizontal = false,
  imageSize = 'cover',
  imgAlt,
  imgSizes = '768px',
  imgSrc,
  linkHref,
  linkText,
  title
}) => {
  const styles = makeStyles(horizontal ? 'horizontal' : 'vertical')

  return (
    <div
      className={className}
      sx={{
        variant: styles()
      }}
    >
      <Styled.a sx={{ variant: styles('image') }} href={linkHref}>
        <ImgixImage
          alt={imgAlt}
          src={imgSrc}
          sizes={imgSizes}
          imgixParams={{
            fit: imageSize === 'cover' ? 'crop' : 'fill',
            crop: 'faces,entropy',
            ar: '16:9',
            fill: 'solid'
          }}
          critical
        />
      </Styled.a>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1',
          variant: styles('content')
        }}
      >
        {date && <Styled.p>{date}</Styled.p>}
        <Styled.h3 sx={{ margin: '0' }}>
          <Styled.a href={linkHref}>{title}</Styled.a>
        </Styled.h3>
        {!horizontal && description && <Styled.p>{description}</Styled.p>}
        {!horizontal && linkText && (
          <Styled.a
            href={linkHref}
            sx={{ textDecoration: 'underline', variant: styles('link') }}
          >
            {linkText}
          </Styled.a>
        )}
      </div>
    </div>
  )
}

export default Card
