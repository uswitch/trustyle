/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

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
}) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      border: 'solid 1px #E5E5E5',
      padding: 'xs',
      marginTop: '0',
      marginRight: 'xs',
      marginBottom: 'xs',
      maxWidth: '245px'
    }}
  >
    <img
      sx={{
        maxHeight: '100%',
        maxWidth: '100%'
      }}
      alt={imgAlt}
      src={imgSrc}
    />
    <div
      sx={{
        padding: 'xs',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      <h3 sx={{ margin: '0' }}>{title}</h3>
      <p>{description}</p>
      <a href={linkHref}>{linkText}</a>
    </div>
  </div>
)

export default Card
