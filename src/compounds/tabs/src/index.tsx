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
  const [isPressed, setIsPressed] = useState(false)
  const [lastX, setLastX] = useState(0)
  const [showLeftBorder, setShowLeftBorder] = useState(false)
  const [showRightBorder, setShowRightBorder] = useState(false)
  const [scrollEnd, setScrollEnd] = useState(false)

  useEffect(() => {
    setPadding(tabs?.current?.offsetHeight)
    setWidth(tabs?.current?.offsetWidth)
  }, [tabs])

  useEffect(() => {
    setWrapWidth(tabWrap?.current?.offsetWidth)

    if (width > wrapWidth && !scrollEnd) {
      setShowRightBorder(true)
    }

    if (left !== 0) {
      setShowLeftBorder(true)
    } else {
      setShowLeftBorder(false)
    }
  }, [tabWrap])

  const setRealLeft = (left: number) => {
    if (left > 0) {
      return setLeft(0)
    }

    const minLeft = -(width - wrapWidth)

    if (left <= minLeft) {
      setScrollEnd(true)
      setShowRightBorder(false)
      return setLeft(minLeft)
    } else {
      setScrollEnd(false)
      setShowRightBorder(true)
    }

    setLeft(left)
  }

  const onMouseDown = (event: any) => {
    if (wrapWidth > width) return

    setLastX(event.clientX)
    setIsPressed(true)
  }

  const onMouseUp = () => {
    setIsPressed(false)
  }

  const onMouseMove = (event: any) => {
    if (!isPressed) return

    if (lastX > event.clientX) {
      // drag left
      const diff = lastX - event.clientX
      setRealLeft(left - diff)
    } else {
      // drag right
      const diff = event.clientX - lastX
      setRealLeft(left + diff)
    }

    setLastX(event.clientX)
  }

  const onTouchStart = (event: any) => {
    if (wrapWidth > width) return
    setLastX(event.touches[0].clientX)
    setIsPressed(true)
  }

  const onTouchEnd = () => {
    setIsPressed(false)
  }

  const onTouchMove = (event: any) => {
    if (!isPressed) return

    if (lastX > event.touches[0].clientX) {
      const diff = lastX - event.touches[0].clientX
      setRealLeft(left - diff)
    } else {
      const diff = event.touches[0].clientX - lastX
      setRealLeft(left + diff)
    }

    setLastX(event.touches[0].clientX)
  }

  const onDragStart = (event: any) => {
    event.preventDefault()
  }

  window.addEventListener('mouseup', onMouseUp)

  return (
    <Container>
      <div
        ref={tabWrap}
        sx={{
          overflowX: 'hidden',
          paddingTop: `${padding}px`,
          position: 'relative',
          pointer: 'grab',
          '::after': {
            content: showRightBorder ? '""' : 'none',
            variant: 'compounds.collectionTabs.variants.overflowBorderRight'
          },
          '::before': {
            content: showLeftBorder ? '""' : 'none',
            variant: 'compounds.collectionTabs.variants.overflowBorderLeft'
          }
        }}
      >
        <div
          ref={tabs}
          onMouseMove={onMouseMove}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onDragStart={onDragStart}
          sx={{
            position: 'absolute',
            left: `${left}px`,
            top: 0
          }}
        >
          <Row direction="row" wrap={false} sx={{}}>
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
