/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  author: React.ReactNode
  description: string
  className?: string
}

const ArticleIntro: React.FC<Props> = ({
  title,
  author,
  description,
  className
}) => {
  return (
    <div className={className}>
      <Styled.h1 sx={{ variant: 'compounds.article-intro.base.heading' }}>
        {title}
      </Styled.h1>
      {author}
      <p sx={{ variant: 'compounds.article-intro.base.description' }}>
        {description}
      </p>
    </div>
  )
}

export default ArticleIntro
