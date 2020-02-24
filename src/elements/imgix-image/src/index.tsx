/** @jsx jsx */

import * as React from 'react'
import Imgix, { SharedImigixAndSourceProps } from 'react-imgix'
import { css, jsx } from '@emotion/core'

interface Props extends SharedImigixAndSourceProps {
  alt?: string
  critical?: boolean
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
        !critical
          ? {
              src: 'data-src',
              srcSet: 'data-srcset',
              sizes: 'data-sizes'
            }
          : undefined
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
