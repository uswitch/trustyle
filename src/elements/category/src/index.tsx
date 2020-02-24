/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  text?: string
  container?: React.FC
}

const Category: React.FC<ListProps> = ({ title, text, container }) => {
  const DefaultContainer: React.FC = ({ children }) => (
    <div sx={{ maxWidth: 1024, margin: '0 auto' }}>{children}</div>
  )
  const Container: React.FC = container || DefaultContainer

  return (
    <div
      sx={{
        paddingX: ['sm', 'md'],
        paddingY: ['md', 'lg'],
        variant: 'categoryTitle.main'
      }}
    >
      <Container>
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
      </Container>
    </div>
  )
}

export default Category
