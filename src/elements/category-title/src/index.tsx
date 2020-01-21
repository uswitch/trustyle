/** @jsx jsx */

import * as React from 'react'
import { IntrinsicSxElements, jsx, Styled, useThemeUI } from 'theme-ui'

interface ListProps extends React.OlHTMLAttributes<HTMLUListElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

const CategoryTitle: React.FC<ListProps> = ({ level = 2, children }) => {
  const { theme }: any = useThemeUI()

  const headingElement = `h${level}` as keyof IntrinsicSxElements
  const Heading = Styled[headingElement]

  return (
    <div
      sx={{
        paddingX: ['sm', 'md'],
        paddingY: ['md', 'lg'],
        ...theme.categoryTitle
      }}
    >
      <Heading sx={{ color: 'light-1', padding: 0, margin: 0 }}>
        {children}
      </Heading>
    </div>
  )
}

export default CategoryTitle
