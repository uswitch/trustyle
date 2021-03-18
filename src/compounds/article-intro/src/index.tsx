/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { Palette } from '@uswitch/trustyle-utils.palette'
import { Col, Container, Row } from '@uswitch/trustyle.flex-grid'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  author: React.ReactNode
  socialSharing?: React.ReactNode
  description: string
  className?: string
}

const ArticleIntro: React.FC<Props> = ({
  title,
  author,
  socialSharing,
  description,
  className
}) => {
  const { theme = {} }: { theme: any } = useThemeUI()
  const contentCols = theme?.compounds['article-intro']?.contentCols || 12
  const contentSpan = theme?.compounds['article-intro']?.contentSpan || 12

  return (
    <div className={className}>
      <Container cols={contentCols} span={contentSpan}>
        <Row cols={12}>
          <Col span={[12, 12, 8]} sx={{ marginBottom: [0, 0, 0] }}>
            <Palette
              as={Styled.h1}
              sx={{ variant: 'compounds.article-intro.base.heading' }}
              px={{
                color: (palette: any) =>
                  palette.headingColor || palette.textColor
              }}
            >
              {title}
            </Palette>
          </Col>
        </Row>
        <Row cols={12}>
          <Col span={[12, 12, 8]}>
            {author}
            <Palette
              as={Styled.p}
              sx={{ variant: 'compounds.article-intro.base.description' }}
              px={{ color: 'textColor' }}
            >
              {description}
            </Palette>
          </Col>
          {socialSharing ? (
            <Col span={[12, 12, 4]}>
              <div
                sx={{
                  variant: 'compounds.article-intro.base.social-divider'
                }}
              >
                {socialSharing}
              </div>
            </Col>
          ) : (
            ''
          )}
        </Row>
      </Container>
    </div>
  )
}

export default ArticleIntro
