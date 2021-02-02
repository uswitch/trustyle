/** @jsx jsx */

import React, { useState } from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import {
  Col,
  Container as DefaultContainer,
  Row
} from '@uswitch/trustyle.flex-grid'
import { Glyph, Icon } from '@uswitch/trustyle.icon'

interface CategoryProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  text?: string
  container?: React.FC
  breadcrumbs?: React.ReactElement
  image?: React.ReactElement
  className?: string
  hideDescriptionMobile?: boolean
  icon?: Glyph
  iconColor?: string
}

const Category: React.FC<CategoryProps> = ({
  title,
  text,
  container: Container = DefaultContainer,
  breadcrumbs: Breadcrumbs,
  image: Image,
  className,
  hideDescriptionMobile = false,
  icon,
  iconColor = ''
}) => {
  const { theme }: any = useThemeUI()
  const breadcrumbsVariant = theme.elements?.category?.breadcrumbs?.variant
  const contentSpan = theme.elements?.category?.contentSpan || 12

  const [showDescription, setShowDescription] = useState(hideDescriptionMobile)

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
        {(Breadcrumbs || icon) && (
          <div
            sx={{
              marginBottom: 'sm',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {Breadcrumbs && (
              <Breadcrumbs.type
                {...Breadcrumbs.props}
                variant={breadcrumbsVariant}
              />
            )}
            {icon && hideDescriptionMobile && (
              <div
                sx={{ display: ['block', 'none'] }}
                onClick={() => setShowDescription(!showDescription)}
              >
                <Icon glyph={icon} color={iconColor} size={25} />
              </div>
            )}
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
                  maxHeight: showDescription ? ['0', '500px'] : '500px',
                  transition: 'max-height 400ms ease-in-out 0ms',
                  overflow: 'hidden'
                }}
              >
                {text}
              </Styled.p>
            )}
          </Col>
          {Image ? (
            <Col
              span={[12, 6]}
              sx={{
                marginTop: ['sm', 0],
                maxHeight: showDescription ? ['0', '500px'] : '500px',
                transition: 'max-height 400ms ease-in-out 0ms',
                overflow: 'hidden'
              }}
            >
              {Image}
            </Col>
          ) : null}
        </Row>
      </Container>
    </div>
  )
}

export default Category
