/** @jsx jsx */
import React, { useState } from 'react'
import { jsx, Styled } from 'theme-ui'
import { Col, Container, Row } from '@uswitch/trustyle.flex-grid'
import ScrollContainer from 'react-indiana-drag-scroll'

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
          variant: isActive
            ? 'compounds.collectionTabs.variants.isActive.container'
            : 'compounds.collectionTabs.base.container'
        }}
      >
        <div>
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
  isScrollable: boolean
}

export const Tabs: React.FC<TabsProps> = ({ children, isScrollable }) => {
  const [activeTab, setActiveTab] = useState(0)

  const tabChildren = React.Children.map(children, (child, index) => (
    <Col sx={{ mx: 'md', mb: 0 }}>
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
  ))

  return (
    <Container>
      {isScrollable ? (
        <ScrollContainer
          hideScrollbars={false}
          sx={{
            '::-webkit-scrollbar': { display: 'none' },
            '-ms-overflow-style': 'none',
            scrollbarWidth: 'none',
            mb: 'lg',
            boxShadow: 'inset -16px 0px 15px -12px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Row direction="row" wrap={false} sx={{}}>
            {tabChildren}
          </Row>
        </ScrollContainer>
      ) : (
        <Row direction="row" wrap sx={{}}>
          {tabChildren}
        </Row>
      )}
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
