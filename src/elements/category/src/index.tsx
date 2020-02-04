/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  text?: string
}

const Category: React.FC<ListProps> = ({ title, text }) => {
  return (
    <div
      sx={{
        paddingX: ['sm', 'md'],
        paddingY: ['md', 'lg'],
        variant: 'categoryTitle.main'
      }}
    >
      <Styled.h1
        as={text ? 'h1' : 'p'}
        sx={{
          padding: 0,
          margin: 0,
          variant: 'categoryTitle.heading'
        }}
      >
        {title}
      </Styled.h1>
      {text && (
        <Styled.p sx={{ marginBottom: 0, variant: 'categoryTitle.text' }}>
          {text}
        </Styled.p>
      )}
    </div>
  )
}

export default Category
