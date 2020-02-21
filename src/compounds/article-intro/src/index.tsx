/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  author: React.ReactNode
  description: string
}

const ArticleIntro: React.FC<Props> = ({ title, author, description }) => {
  return (
    <div>
      <Styled.h1 sx={{ marginTop: 0, marginBottom: 'sm' }}>{title}</Styled.h1>
      {author}
      <p sx={{ marginTop: 'sm' }}>{description}</p>
    </div>
  )
}

export default ArticleIntro
