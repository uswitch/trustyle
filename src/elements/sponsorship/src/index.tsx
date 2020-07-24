/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'

interface Props {
  className?: string
  leftAligned?: boolean
  imgSrc: string
  imageSize?: 'cover' | 'contain'
  imgSizes?: string
  tag?: string
  critical?: boolean
}

const makeStyles = (variant: string) => (element?: string) =>
  `elements.sponsorship.variants.${variant}${element ? `.${element}` : ''}`

const Sponsorship: React.FC<Props> = ({
  className = '',
  leftAligned = false,
  imgSrc,
  imageSize = 'contain',
  tag,
  critical = true,
}) => {
  const styles = makeStyles(leftAligned ? 'leftAligned' : 'rightAligned')

  return (
    <div
      className={className}
      sx={{
        variant: styles()
      }}
    >
      <div
        sx={{
          variant: styles('content')
        }}
      >
        <span sx={{ mr: "xs" }}>
          {tag}
        </span>
      </div>
      <div
        sx={{
          display: 'flex',
        }}
      >
        <ImgixImage
          src={imgSrc}
          alt=""
          sx={{
            variant: styles('image')
          }}
          critical={critical}
          imgixParams={{
            fit: imageSize === 'cover' ? 'crop' : 'fill',
            crop: 'faces,entropy',
            ar: '16:9',
            fill: 'solid'
          }}
        />
      </div>
    </div>
  )
}

export default Sponsorship
