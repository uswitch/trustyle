/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'

interface Props {
  className?: string
  critical?: boolean
  description?: string
  horizontal?: boolean
  imageSize?: 'cover' | 'contain'
  imgAlt: string
  imgSizes?: string
  imgSrc: string
  linkHref: string
  linkText?: string
  superScript?: string
  tag?: string
  title: string
}

const makeStyles = (variant: string) => (element?: string) =>
  `compounds.card.variants.${variant}${element ? `.${element}` : ''}`

const Card: React.FC<Props> = ({
  className = '',
  critical = true,
  description,
  horizontal = false,
  imageSize = 'cover',
  imgAlt,
  imgSizes = '768px',
  imgSrc,
  linkHref,
  linkText,
  superScript,
  tag,
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
          critical={critical}
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
        <div
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            variant: styles('meta')
          }}
        >
          {tag && (
            <span sx={{ marginRight: 'sm', variant: styles('tag') }}>
              {tag}
            </span>
          )}
          {superScript && (
            <Styled.p sx={{ variant: styles('superScript') }}>
              {superScript}
            </Styled.p>
          )}
        </div>

        <Styled.h3 sx={{ margin: '0' }}>
          <Styled.a href={linkHref}>{title}</Styled.a>
        </Styled.h3>
        {description && <Styled.p>{description}</Styled.p>}
        {linkText && (
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
