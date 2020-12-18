/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Palette } from '@uswitch/trustyle-utils.palette'

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
      <Palette
        as={Styled.h1}
        sx={{ variant: 'compounds.article-intro.base.heading' }}
        px={{
          color: (palette: any) => palette.headingColor || palette.textColor
        }}
      >
        {title}
      </Palette>

      {author}
      <Palette
        as={Styled.p}
        sx={{ variant: 'compounds.article-intro.base.description' }}
        px={{ color: 'textColor' }}
      >
        {description}
      </Palette>
    </div>
  )
}

export default ArticleIntro
