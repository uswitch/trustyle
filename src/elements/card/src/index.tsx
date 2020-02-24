/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'

interface Props {
  imgSrc: string
  imgAlt: string
  title: string
  description: string
  linkHref: string
  linkText?: string
}

const Card: React.FC<Props> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  linkHref,
  linkText = 'Read more'
}) => {
  const { theme }: any = useThemeUI()

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: theme.card.flexDirection ? ['column', 'row'] : 'column',
        border: theme.card.flexDirection ? 'none' : 'solid 1px',
        borderColor: 'grey-20',
        padding: theme.card.flexDirection ? '0' : 'xs',
        marginTop: '0',
        marginRight: 'xs',
        marginBottom: 'xs',
        maxWidth: theme.card.flexDirection ? ['245px', '450px'] : '245px'
      }}
    >
      <ImgixImage
        alt={imgAlt}
        src={imgSrc}
        height="100%"
        width="auto"
        critical
        sx={{ color: 'pink' }}
      />
      <div
        sx={{
          padding: 'xs',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <h3 sx={{ margin: '0' }}>{title}</h3>
        <p>{description}</p>
        <a href={linkHref}>{linkText}</a>
      </div>
    </div>
  )
}

export default Card
