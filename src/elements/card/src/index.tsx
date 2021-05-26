/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'
import { Glyph, Icon } from '@uswitch/trustyle.icon'
import { ButtonLink } from '@uswitch/trustyle.button-link'

interface Props {
  className?: string
  critical?: boolean
  description?: string
  imageSize?: 'cover' | 'contain'
  imgAlt?: string
  imgSizes?: string
  imgSrc?: string
  imageProps?: any
  linkIcon?: Glyph
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
    | 'featured-alternate'
    | 'bbdeals-card'
    | 'assuranceBar'
    | 'journey-card'
  headerChildren?: React.ReactNode
  contentChildren?: React.ReactNode
  onClick?: () => void
  trackInteraction?: (_e: React.MouseEvent, _data: object) => void
  button?: React.ReactNode
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
  linkIcon,
  linkText,
  superScript,
  tag,
  title,
  variant = 'vertical',
  headerChildren,
  contentChildren,
  onClick,
  trackInteraction,
  button
}) => {
  const styles = makeStyles(variant)

  const HeaderWrapper = (children: React.ReactNode) =>
    headerChildren ? (
      <div sx={{ variant: styles('headerChildren') }}>
        <div sx={{ variant: styles('headerChildren') }}>{headerChildren}</div>
        <span>{children}</span>
      </div>
    ) : (
      children
    )

  const journeyVariant = variant === 'journey-card'

  const JourneyButton = (
    <ButtonLink
      variant="primary-journey"
      href={linkHref}
      afterIcon={linkIcon}
      onClick={onClick}
    >
      {linkText}
    </ButtonLink>
  )

  return (
    <div
      className={className}
      sx={{ variant: styles() }}
      onClick={e => trackInteraction(e)}
    >
      {HeaderWrapper(
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
            dataAttributes={{
              'data-link-target': 'image'
            }}
          />
        </Styled.a>
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
            <Styled.a
              href={linkHref}
              data-link-target="heading"
              data-link-text={title}
            >
              {title}
            </Styled.a>
          </Styled.h3>
        )}
        {description && (
          <Styled.p sx={{ variant: styles('description') }}>
            {description}
          </Styled.p>
        )}
        {linkText && !journeyVariant && (
          <Styled.a
            href={linkHref}
            sx={{ textDecoration: 'underline', variant: styles('link') }}
            data-link-target="link/button"
            data-link-text={linkText}
          >
            {linkIcon && <Icon glyph={linkIcon} color="brand" />}
            {linkText}
          </Styled.a>
        )}
        {linkText && journeyVariant && ((button && button) || JourneyButton)}
      </div>
    </div>
  )
}

export default Card
