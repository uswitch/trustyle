/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'

interface Props {
  className?: string
  critical?: boolean
  description?: string
  imageSize?: 'cover' | 'contain'
  imgAlt: string
  imgSizes?: string
  imgSrc: string
  imageProps?: any
  linkHref: string
  linkText?: string
  superScript?: string
  tag?: string
  title?: string
  variant?:
    | 'horizontal'
    | 'vertical'
    | 'headerImage'
    | 'responsive'
    | 'featured'
    | 'bbdeals-card'
    | 'assuranceBar'
  headerChildren?: React.ReactNode
  contentChildren?: React.ReactNode
}

const makeStyles = (variant: string) => (element?: string) =>
  `compounds.card.variants.${variant}${element ? `.${element}` : ''}`

const Card: React.FC<Props> = ({
  className = '',
  critical = true,
  description,
  imageSize = 'cover',
  imgAlt,
  imgSizes = '768px',
  imgSrc,
  imageProps = {},
  linkHref,
  linkText,
  superScript,
  tag,
  title,
  variant = 'vertical',
  headerChildren,
  contentChildren
}) => {
  const styles = makeStyles(variant)

  const HeaderWrapper = (children: React.ReactNode) =>
    headerChildren ? (
      <div sx={{ variant: styles('headerChildren') }}>
        <div sx={{ variant: styles('headerChildren') }}>{headerChildren}</div>
        <span>{children}</span>
      </div>
    ) : (
      <React.Fragment>{children}</React.Fragment>
    )

  return (
    <div
      className={className}
      sx={{
        variant: styles()
      }}
    >
      {HeaderWrapper(
        <React.Fragment>
          <Styled.a sx={{ variant: styles('image') }} href={linkHref}>
            <ImgixImage
              alt={imgAlt}
              src={imgSrc}
              sizes={imgSizes}
              critical={critical}
              {...imageProps}
              imgixParams={{
                fit: imageSize === 'cover' ? 'crop' : 'fill',
                crop: 'faces,entropy',
                ar: '16:9',
                fill: 'solid',
                ...(imageProps.imgixParams || {})
              }}
            />
          </Styled.a>
        </React.Fragment>
      )}

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
            <Styled.p as="div" sx={{ variant: styles('superScript') }}>
              <p>{superScript}</p>
            </Styled.p>
          )}
          {contentChildren && (
            <div sx={{ variant: styles('contentChildren') }}>
              {contentChildren}
            </div>
          )}
        </div>
        {title && (
          <Styled.h3 sx={{ margin: '0', variant: styles('heading') }}>
            <Styled.a href={linkHref}>{title}</Styled.a>
          </Styled.h3>
        )}
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
