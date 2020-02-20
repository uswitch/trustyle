/** @jsx jsx */

import * as React from 'react'
import Imgix from 'react-imgix'
import './react-imgix.d'
import { css, jsx } from '@emotion/core'

interface Props {
  alt?: string
  critical?: boolean
  height?: number | string
  imgixParams?: object
  sizes?: any
  src: string
  width?: number | string
}

const Image: React.FC<Props> = ({
  alt,
  critical,
  height,
  imgixParams,
  sizes,
  src,
  width
}) => {
  if (!src) {
    return (
      <span
        css={css({
          display: 'inline-block',
          height,
          width
        })}
      />
    )
  }
  return (
    <Imgix
      htmlAttributes={{ alt }}
      attributeConfig={
        !critical && {
          src: 'data-src',
          srcSet: 'data-srcset',
          sizes: 'data-sizes'
        }
      }
      className={!critical ? 'lazyload' : ''}
      src={src}
      height={height}
      width={width}
      sizes={sizes}
      imgixParams={imgixParams}
    />
  )
}

export const ImgixImage = React.memo(Image)
