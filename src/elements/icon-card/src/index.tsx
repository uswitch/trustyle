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
  return (
    <div sx={{ variant: `compounds.icon-card.variants.${orientation}` }}>
      <div
        sx={{
          variant: 'compounds.icon-card.base.image-container'
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
        <Styled.h4
          sx={{
            variant: 'compounds.icon-card.base.h4'
          }}
        >
          {title}
        </Styled.h4>
        <Styled.p>{description}</Styled.p>
      </div>
    </div>
  )
}

export default IconCard
