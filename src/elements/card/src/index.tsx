/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props {
  imgSrc: string
  title: string
  content: string
}

const Card: React.FC<Props> = ({ imgSrc, title, content }) => (
  <div sx={{ border: 'solid 1px #E5E5E5', padding: '6px', height: '300px' }}>
    <div
      sx={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        height: '150px',
        width: '100%'
      }}
    />
    <div sx={{ padding: '8px' }}>
      <h1 sx={{ margin: '0' }}>{title}</h1>
      <p sx={{ marginTop: '0' }}>{content}</p>
      <a href="/foo">Read More</a>
    </div>
  </div>
)

export default Card
