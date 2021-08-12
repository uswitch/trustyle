/** @jsx jsx */

import * as React from 'react'
import { jsx, Themed } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'
import { Glyph, Icon } from '@uswitch/trustyle.icon'
import { ButtonLink } from '@uswitch/trustyle.button-link'
import dayjs from '@uswitch/trustyle.date'

interface Props {
  className?: string
  critical?: boolean
  date?: number
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
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  trackInteraction?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  button?: React.ReactNode
}

const makeStyles = (variant: string) => (element?: string) =>
  `compounds.card.variants.${variant}${element ? `.${element}` : ''}`

const Card: React.FC<Props> = ({
  className = '',
  critical = true,
  date,
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
  onClick = () => {},
  trackInteraction = () => {},
  button
}) => {
  const styles = makeStyles(variant)
  const isAspectRatioBox = variant === 'vertical' || variant === 'horizontal'

  const HeaderWrapper = (children: React.ReactNode) =>
    headerChildren ? (
      <div sx={{ variant: styles('headerChildren') }}>
        <div sx={{ variant: styles('headerChildren') }}>{headerChildren}</div>
        <span>{children}</span>
      </div>
    ) : (
      children
    )

  const AspectRatioWrapper = (children: React.ReactNode) =>
    isAspectRatioBox ? (
      <div sx={{ variant: styles('aspectRatioWrapper') }}>
        <Themed.a
          sx={{ variant: styles('image') }}
          href={linkHref}
          onClick={trackInteraction}
        >
          <div sx={{ variant: styles('aspectRatioBox') }}>
            <div sx={{ variant: styles('cardImage') }}>{children}</div>
          </div>
        </Themed.a>
      </div>
    ) : (
      <Themed.a
        sx={{ variant: styles('image') }}
        href={linkHref}
        onClick={trackInteraction}
      >
        {children}
      </Themed.a>
    )

  const journeyVariant = variant === 'journey-card'

  const JourneyButton = (
    <ButtonLink
      variant="primary-journey"
      href={linkHref}
      afterIcon={linkIcon}
      onClick={e => {
        trackInteraction(e)
        onClick(e)
      }}
    >
      {linkText}
    </ButtonLink>
  )

  return (
    <div className={className} sx={{ variant: styles() }}>
      {HeaderWrapper(
        AspectRatioWrapper(
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
        )
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
          {date && (
            <Themed.p as="div" sx={{ variant: styles('date') }}>
              {dayjs(date).format('DD MMMM YYYY')}
            </Themed.p>
          )}

          {tag && (
            <span sx={{ marginRight: 'sm', variant: styles('tag') }}>
              {tag}
            </span>
          )}

          {superScript && (
            <Themed.p as="div" sx={{ variant: styles('superScript') }}>
              <p>{superScript}</p>
            </Themed.p>
          )}

          {contentChildren && (
            <div sx={{ variant: styles('contentChildren') }}>
              {contentChildren}
            </div>
          )}
        </div>
        {title && (
          <Themed.h3 sx={{ margin: '0', variant: styles('heading') }}>
            <Themed.a href={linkHref} onClick={trackInteraction}>
              {title}
            </Themed.a>
          </Themed.h3>
        )}
        {description && (
          <Themed.p sx={{ variant: styles('description') }}>
            {description}
          </Themed.p>
        )}
        {linkText && !journeyVariant && (
          <Themed.a
            href={linkHref}
            onClick={trackInteraction}
            sx={{ textDecoration: 'underline', variant: styles('link') }}
          >
            {linkIcon && <Icon glyph={linkIcon} color="brand" />}
            {linkText}
          </Themed.a>
        )}
        {linkText && journeyVariant && ((button && button) || JourneyButton)}
      </div>
    </div>
  )
}

export default Card
