/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'

interface Props extends React.HTMLAttributes<any> {
  imgSrc: string
  imgAlt: string
  title: string
  description?: string
  orientation: string
}

const IconCard: React.FC<Props> = ({
  imgSrc,
  imgAlt,
  title,
  description = '',
  orientation = 'left'
}) => {
  let sx

  orientation === 'top'
    ? (sx = {
        display: 'flex',
        flexDirection: 'column'
      })
    : (sx = {
        display: 'flex',
        flexDirection: 'row'
      })

  return (
    <div sx={sx}>
      <div
        sx={{
          mr: 28,
          mb: 18
        }}
      >
        <ImgixImage
          width={32}
          height={32}
          alt={imgAlt}
          src={imgSrc}
          imgixParams={{ fill: 'fillmax' }}
          critical
        />
      </div>
      <div>
        <Styled.h4 sx={{ mt: 0 }}>{title}</Styled.h4>
        <Styled.p>{description}</Styled.p>
      </div>
    </div>
  )
}

export default IconCard
