/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import {
  Col,
  Container as DefaultContainer,
  Row
} from '@uswitch/trustyle.flex-grid'

interface CategoryProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  text?: string
  container?: React.FC
  breadcrumbs?: React.ReactElement
  image?: React.ReactElement
  className?: string
  hideDescriptionMobile?: boolean
}

const Category: React.FC<CategoryProps> = ({
  title,
  text,
  container: Container = DefaultContainer,
  breadcrumbs: Breadcrumbs,
  image: Image,
  className,
  hideDescriptionMobile = false
}) => {
  const { theme }: any = useThemeUI()
  const breadcrumbsVariant = theme.elements?.category?.breadcrumbs?.variant
  const contentSpan = theme.elements?.category?.contentSpan || 12

  return (
    <div
      sx={{
        paddingX: ['sm', 'md'],
        paddingBottom: ['md', 'lg'],
        paddingTop: Breadcrumbs ? ['xs', 'sm'] : ['md', 'lg'],
        variant: 'elements.category.main'
      }}
      className={className}
    >
      <Container
        sx={{
          variant: 'elements.category.container'
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
                variant: 'elements.category.heading'
              }}
            >
              {title}
            </Styled.h1>
            {text && (
              <Styled.p
                sx={{
                  marginBottom: 0,
                  variant: 'elements.category.text',
                  display: hideDescriptionMobile ? ['none', 'block'] : 'block'
                }}
              >
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
