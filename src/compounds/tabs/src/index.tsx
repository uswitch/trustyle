/** @jsx jsx */
import React, { RefObject, useEffect, useState } from 'react'
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
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [left, setLeft] = useState(0)
  const tabs: RefObject<HTMLDivElement> = React.createRef()
  const tabWrap: RefObject<HTMLDivElement> = React.createRef()
  const [padding, setPadding] = useState(0)
  const [width, setWidth] = useState(0)
  const [wrapWidth, setWrapWidth] = useState(0)
  const [mouseIsDown, setMouseIsDown] = useState(false)
  const [lastX, setLastX] = useState(false)

  useEffect(() => {
    setPadding(tabs?.current?.offsetHeight)
    setWidth(tabs?.current?.offsetWidth)
  }, [tabs])

  useEffect(() => {
    setWrapWidth(tabWrap?.current?.offsetWidth)
  }, [tabWrap])

  function setRealLeft(left: number) {
    if (left > 0) {
      return setLeft(0)
    }

    const minLeft = -(width - wrapWidth)

    if (left < minLeft) {
      return setLeft(minLeft)
    }

    setLeft(left)
  }

  function onMouseDown(event) {
    if (wrapWidth > width) return
    setLastX(event.clientX)
    setMouseIsDown(true)
  }

  function onMouseUp() {
    setMouseIsDown(false)
  }

  function onMouseMove(event) {
    if (!mouseIsDown) return

    if (lastX > event.clientX) {
      const diff = lastX - event.clientX
      setRealLeft(left - diff)
    } else {
      const diff = event.clientX - lastX
      setRealLeft(left + diff)
    }

    setLastX(event.clientX)
  }

  window.addEventListener('mouseup', onMouseUp)

  return (
    <Container>
      <div
        ref={tabWrap}
        sx={{
          overflowX: 'hidden',
          paddingTop: `${padding}px`,
          position: 'relative'
        }}
      >
        <div
          ref={tabs}
          onMouseMove={onMouseMove}
          onMouseDown={onMouseDown}
          sx={{
            position: 'absolute',
            left: `${left}px`,
            top: 0
          }}
        >
          <Row direction="row" wrap={false}>
            {React.Children.map(children, (child, index) => (
              <Col sx={{ mx: 'md', mb: 0 }} key={index}>
                <TabLink
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
        </div>
      </div>
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
