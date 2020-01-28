/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'

interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  text?: string
}

const Category: React.FC<ListProps> = ({ title, text }) => {
  const { theme }: any = useThemeUI()

  return (
    <div
      sx={{
        paddingX: ['sm', 'md'],
        paddingY: ['md', 'lg'],
        ...theme.categoryTitle?.main
      }}
    >
      <Styled.h1
        as={text ? 'h1' : 'p'}
        sx={{
          padding: 0,
          margin: 0,
          ...theme.categoryTitle?.heading
        }}
      >
        {title}
      </Styled.h1>
      {text && (
        <Styled.p sx={{ marginBottom: 0, ...theme.categoryTitle?.text }}>
          {text}
        </Styled.p>
      )}
    </div>
  )
}

export default Category
