/** @jsx jsx */
import React, { useState } from 'react'
import { jsx, Styled } from 'theme-ui'
import { Col, Container, Row } from '@uswitch/trustyle.flex-grid'

interface TabLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string
  isActive: boolean
}

const TabLink: React.FC<TabLinkProps> = ({ title, isActive, ...props }) => {
  return (
    <a
      href={'#tab'}
      sx={{
        textDecoration: 'none'
      }}
      {...props}
    >
      <div
        sx={{
          mb: 'lg',
          variant: isActive
            ? 'compounds.collectionTabs.variants.isActive.container'
            : 'compounds.collectionTabs.base.container'
        }}
      >
        <div sx={{ pr: 'sm' }}>
          <Styled.h6>{title}</Styled.h6>
        </div>
      </div>
    </a>
  )
}

interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean
}

const TabContent: React.FC<TabContentProps> = ({ children, active }) => {
  return (
    <div
      sx={{
        mx: ['xxs', 'md'],
        display: active ? 'block' : 'none'
      }}
    >
      {children}
    </div>
  )
}

interface TabProps {
  title: string
  children: React.ReactNode
}

export const Tab: React.FC<TabProps> = () => null

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<TabProps>[]
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Container>
      <Row
        direction="row"
        wrap={false}
        sx={{
          overflow: 'scroll',
          '::-webkit-scrollbar': { display: 'none' }
        }}
      >
        {React.Children.map(children, (child, index) => (
          <Col sx={{ mx: 0 }}>
            <TabLink
              key={index}
              title={child.props.title}
              onClick={e => {
                e.preventDefault()
                setActiveTab(index)
              }}
              isActive={index === activeTab}
            />
          </Col>
        ))}
      </Row>
      <Row cols={12}>
        <Col span={12}>
          {React.Children.map(children, (child, index) => (
            <TabContent key={index} active={index === activeTab}>
              {child.props.children}
            </TabContent>
          ))}
        </Col>
      </Row>
    </Container>
  )
}
