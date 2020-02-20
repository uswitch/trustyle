/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props {
  imgSrc: string
  imgAlt: string
  title: string
  content: string
  linkHref: string
  linkText?: string
}

const Card: React.FC<Props> = ({
  imgSrc,
  imgAlt,
  title,
  content,
  linkHref,
  linkText = 'Read more'
}) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      border: 'solid 1px #E5E5E5',
      padding: '6px',
      margin: '0 6px 6px 6px',
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
        padding: '8px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      <h3 sx={{ margin: '0' }}>{title}</h3>
      <p>{content}</p>
      <a href={linkHref}>{linkText}</a>
    </div>
  </div>
)

export default Card
