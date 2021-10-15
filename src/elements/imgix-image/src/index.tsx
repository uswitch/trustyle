/** @jsx jsx */

import * as React from 'react'
import Imgix, { SharedImigixAndSourceProps } from 'react-imgix'
import { css, jsx } from '@emotion/react'

interface Props extends SharedImigixAndSourceProps {
  alt?: string
  critical?: boolean
  className?: string
}

const Image: React.FC<Props> = ({
  alt,
  critical,
  className = '',
  height,
  imgixParams,
  sizes,
  src,
  width
}) => {
  if (!src) {
    return (
      <span
        className={className}
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
      htmlAttributes={{ alt, loading: critical ? 'eager' : 'lazy' }}
      className={className}
      src={src}
      height={height}
      width={width}
      sizes={sizes}
      imgixParams={imgixParams}
    />
  )
}

export const ImgixImage = React.memo(Image)
