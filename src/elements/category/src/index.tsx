/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'

interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  text?: string
  container?: React.FC
  breadcrumbs?: React.ReactElement
}

const DefaultContainer: React.FC = ({ children }) => (
  <div sx={{ maxWidth: 1024, margin: '0 auto' }}>{children}</div>
)

const Category: React.FC<ListProps> = ({
  title,
  text,
  container: Container = DefaultContainer,
  breadcrumbs: Breadcrumbs
}) => {
  const { theme }: any = useThemeUI()
  const breadcrumbsVariant = theme.categoryTitle?.breadcrumbs?.variant

  return (
    <div
      sx={{
        paddingX: ['sm', 'md'],
        paddingY: ['md', 'lg'],
        variant: 'categoryTitle.main'
      }}
    >
      <Container>
        {Breadcrumbs && (
          <Breadcrumbs.type
            {...Breadcrumbs.props}
            variant={breadcrumbsVariant}
          />
        )}
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
