/** @jsx jsx */

import React, { Fragment, useState } from 'react'
import { jsx, Styled } from 'theme-ui'
import { Col, Container, Row } from '@uswitch/trustyle.flex-grid'
import { Glyph, Icon } from '@uswitch/trustyle.icon'
import Carousel from '@uswitch/trustyle.carousel'

interface InteractiveTabLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string
  isActive: boolean
  description?: string
  icon?: Glyph
}

const InteractiveTabLink: React.FC<InteractiveTabLinkProps> = ({
  title,
  isActive,
  description,
  icon,
  ...props
}) => {
  return (
    <a
      href={'#'}
      sx={{
        textDecoration: 'none'
      }}
      {...props}
    >
      <div
        sx={{
          variant: isActive
            ? 'compounds.interactiveTabs.variants.isActive'
            : 'compounds.interactiveTabs.base'
        }}
      >
        {icon && (
          <div sx={{ mr: 'md' }}>
            <Icon color={'black'} glyph={icon} size={21} />
          </div>
        )}

        <div>
          <Styled.h5>{title}</Styled.h5>
          <Styled.p>{description}</Styled.p>
        </div>
      </div>
    </a>
  )
}

interface InteractiveContentProps extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean
}

const InteractiveContent: React.FC<InteractiveContentProps> = ({
  children,
  active
}) => {
  return (
    <div
      sx={{
        maxWidth: ['100%', 'grid.md.7', 'grid.lg.5'],
        display: active ? 'block' : 'none'
      }}
    >
      {children}
    </div>
  )
}

interface InteractiveTabProps {
  title: string
  description?: string
  icon?: Glyph
  children: React.ReactNode
}

export const InteractiveTab: React.FC<InteractiveTabProps> = () => null

interface InteractiveTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<InteractiveTabProps>[]
}

export const InteractiveTabs: React.FC<InteractiveTabsProps> = ({
  children
}) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Fragment>
      <Container>
        <Row cols={[1, 2, 2]}>
          <Col span={1}>
            {React.Children.map(children, (child, index) => (
              <InteractiveContent key={index} active={index === activeTab}>
                {child.props.children}
              </InteractiveContent>
            ))}
          </Col>
          <Col
            span={1}
            sx={{ display: ['none', 'flex', 'flex'], flexDirection: 'column' }}
          >
            {React.Children.map(children, (child, index) => (
              <InteractiveTabLink
                key={index}
                title={child.props.title}
                description={child.props.description}
                icon={child.props.icon}
                onClick={e => {
                  e.preventDefault()
                  setActiveTab(index)
                }}
                isActive={index === activeTab}
              />
            ))}
          </Col>
        </Row>
      </Container>
      <div sx={{ display: ['block', 'none', 'none'], mt: '-35px' }}>
        <Carousel
          slidesMobile={1.01} // there appears to be a bug in the library where the gliderSlideVisible event does not fire when the number of visible slides is 1
          onSlideVisible={(slide: number) => setActiveTab(slide)}
        >
          {React.Children.map(children, (child, index) => (
            <div sx={{ pt: '20px' }}>
              <InteractiveTabLink
                key={index}
                title={child.props.title}
                description={child.props.description}
                icon={child.props.icon}
                onClick={e => {
                  e.preventDefault()
                  setActiveTab(index)
                }}
                isActive
              />
            </div>
          ))}
        </Carousel>
      </div>
    </Fragment>
  )
}
