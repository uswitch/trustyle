/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { Container as DefaultContainer } from '@uswitch/trustyle.flex-grid'

interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  text?: string
  container?: React.FC
  breadcrumbs?: React.ReactElement
}

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
        paddingBottom: ['md', 'lg'],
        paddingTop: Breadcrumbs ? ['xs', 'sm'] : ['md', 'lg'],
        variant: 'categoryTitle.main'
      }}
    >
      <Container>
        {Breadcrumbs && (
          <div
            sx={{
              marginBottom: 'sm'
            }}
          >
            <Breadcrumbs.type
              {...Breadcrumbs.props}
              variant={breadcrumbsVariant}
            />
          </div>
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
