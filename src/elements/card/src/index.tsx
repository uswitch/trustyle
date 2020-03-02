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
    <a
      href={linkHref}
      sx={{
        display: 'flex',
        flexDirection: theme.card.flexDirection ? ['column', 'row'] : 'column',
        border: theme.card.flexDirection ? 'none' : 'solid 1px',
        borderColor: 'grey-20',
        padding: theme.card.flexDirection ? '0' : 'xs',
        marginTop: '0',
        marginRight: 'xs',
        marginBottom: ['0', 'xs'],
        '> img': {
          height: 'auto',
          width: '100%'
        },
        '&:hover': {
          opacity: '0.5'
        },
        textDecoration: 'none',
        cursor: 'pointer'
      }}
    >
      <ImgixImage
        alt={imgAlt}
        src={imgSrc}
        imgixParams={{ fit: 'crop', crop: 'edges', ar: '16:9' }}
        critical
      />
      <div
        sx={{
          padding: 'xs',
          display: 'flex',
          flexDirection: 'column',
          flex: '1'
        }}
      >
        <h3 sx={{ margin: '0' }}>{title}</h3>
        <p sx={{ flex: '1' }}>{description}</p>
        <p sx={{ textDecoration: 'underline' }}>{linkText}</p>
      </div>
    </a>
  )
}

export default Card
