/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import {
  Col,
  Container as DefaultContainer,
  Row
} from '@uswitch/trustyle.flex-grid'

interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  text?: string
  container?: React.FC
  breadcrumbs?: React.ReactElement
  image?: React.ReactElement
  className?: string
}

const Category: React.FC<ListProps> = ({
  title,
  text,
  container: Container = DefaultContainer,
  breadcrumbs: Breadcrumbs,
  image: Image,
  className
}) => {
  const { theme }: any = useThemeUI()
  const breadcrumbsVariant = theme.categoryTitle?.breadcrumbs?.variant
  const contentSpan = theme.categoryTitle?.contentSpan || 12

  return (
    <div
      sx={{
        paddingX: ['sm', 'md'],
        paddingBottom: ['md', 'lg'],
        paddingTop: Breadcrumbs ? ['xs', 'sm'] : ['md', 'lg'],
        variant: 'categoryTitle.main'
      }}
      className={className}
    >
      <Container
        sx={{
          variant: 'categoryTitle.container'
        }}
      >
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
        <Row>
          <Col span={contentSpan} sx={{ marginBottom: [0, 0] }}>
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
          </Col>
          {Image ? (
            <Col span={[12, 6]} sx={{ marginTop: ['sm', 0] }}>
              {Image}
            </Col>
          ) : null}
        </Row>
      </Container>
    </div>
  )
}

export default Category
