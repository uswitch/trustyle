/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'

interface Props {
  imgSrc: string
  imgAlt: string
  title: string
  description: string
  linkHref?: string
  linkText?: string
  className?: string
  layout?: string
}

export const MaybeAnchor = (props: any) =>
  props.href ? <Styled.a {...props} /> : <div {...props} />

const variant = (prop = '') => `compounds.card${prop ? `.${prop}` : ''}`
const Card: React.FC<Props> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  linkHref,
  linkText = 'Read more',
  className = '',
  layout = 'default'
}) => (
  <div
    className={className}
    sx={{
      variant: variant(layout)
    }}
  >
    <div
      sx={{
        variant: `${variant(layout)}.img`
      }}
    >
      <MaybeAnchor href={linkHref} sx={{ textDecoration: 'underline' }}>
        <ImgixImage
          sx={{
            height: 'auto',
            width: '100%'
          }}
          width={layout === 'icon' ? 64 : 768}
          height={layout === 'icon' ? undefined : 405}
          alt={imgAlt}
          src={imgSrc}
          imgixParams={{ fit: 'crop', crop: 'edges', ar: '16:9' }}
          critical
        />
      </MaybeAnchor>
    </div>
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        variant: `${variant(layout)}.content`
      }}
    >
      <Styled.h3 sx={{ margin: '0' }}>
        <MaybeAnchor href={linkHref}>{title}</MaybeAnchor>
      </Styled.h3>
      <Styled.p>{description}</Styled.p>
      {linkHref && (
        <MaybeAnchor href={linkHref} sx={{ textDecoration: 'underline' }}>
          {linkText}
        </MaybeAnchor>
      )}
    </div>
  </div>
)

export default Card
