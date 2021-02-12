/** @jsx jsx */
import React, { RefObject, useEffect, useState } from 'react'
import { jsx, Styled } from 'theme-ui'
import { Col, Container, Row } from '@uswitch/trustyle.flex-grid'

const makeStyles = (variant?: string) => (element?: string) =>
  `compounds.collection-tabs${variant ? `.variants.${variant}` : `.base`}${
    element ? `.${element}` : ''
  }`
interface TabLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string
  isActive: boolean
  variant?: string
}

const TabLink: React.FC<TabLinkProps> = ({
  title,
  isActive,
  variant,
  ...props
}) => {
  const styles = makeStyles(variant)

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
            ? makeStyles('isActive')('container')
            : styles('container')
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
  variant?: string
}

const TabContent: React.FC<TabContentProps> = ({
  children,
  active,
  variant
}) => {
  const styles = makeStyles(variant || 'tabContentSpacing')

  return (
    <div
      sx={{
        variant: styles(!variant ? undefined : 'tabContentSpacing'),
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
  className?: string
}

export const Tab: React.FC<TabProps> = () => null

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<TabProps>[]
  variant?: string
}

export const Tabs: React.FC<TabsProps> = ({ children, className, variant }) => {
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
  const styles = makeStyles(variant)

  useEffect(() => {
    setPadding(tabs?.current?.offsetHeight || 0)
    setWidth(tabs?.current?.scrollWidth || 0)
  }, [tabs])

  useEffect(() => {
    setWrapWidth(tabWrap?.current?.offsetWidth || 0)

    if (width > wrapWidth && !scrollEnd) {
      setShowRightBorder(true)
    }

    if (left !== 0) {
      setShowLeftBorder(true)
    } else {
      setShowLeftBorder(false)
    }
  }, [tabWrap])

  const normalizeLeft = (left: number) => {
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

  const onTouchStart = (event: any) => {
    if (wrapWidth > width) return
    setLastX(event.touches[0].clientX)
    setIsPressed(true)
  }

  const onTouchEnd = () => {
    setIsPressed(false)
  }

  const onMove = (event: any) => {
    if (!isPressed) return

    let xPosition = 0

    if (!event.touches) {
      xPosition = event.clientX
    } else {
      xPosition = event.touches[0].clientX
    }

    if (lastX > xPosition) {
      const diff = lastX - xPosition
      normalizeLeft(left - diff)
    } else {
      const diff = xPosition - lastX
      normalizeLeft(left + diff)
    }

    setLastX(xPosition)
  }

  const onDragStart = (event: any) => {
    event.preventDefault()
  }

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('touchend', onTouchEnd)
  }, [])

  return (
    <Container
      className={className}
      sx={{ variant: makeStyles('containerPadding')() }}
    >
      <div
        ref={tabWrap}
        sx={{
          overflow: 'hidden',
          paddingTop: `${padding}px`,
          position: 'relative',
          pointer: 'grab',
          variant: makeStyles('borderBottom')(),
          '::after': {
            content: showRightBorder ? '""' : 'none',
            variant: makeStyles('overflowBorderRight')()
          },
          '::before': {
            content: showLeftBorder ? '""' : 'none',
            variant: makeStyles('overflowBorderLeft')()
          }
        }}
      >
        <div
          ref={tabs}
          onMouseMove={onMove}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onTouchMove={onMove}
          onDragStart={onDragStart}
          sx={{
            position: 'absolute',
            left: `${left}px`,
            top: 0,
            maxHeight: '56px'
          }}
        >
          <Row
            direction="row"
            wrap={false}
            sx={{ variant: styles('tabsContainer') }}
          >
            {React.Children.map(children, (child, index) => (
              <Col
                sx={{
                  variant: makeStyles('tabSpacing')()
                }}
                key={index}
              >
                <TabLink
                  title={child.props.title}
                  onClick={e => {
                    e.preventDefault()
                    setActiveTab(index)
                  }}
                  variant={variant}
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
            <TabContent
              key={index}
              active={index === activeTab}
              variant={variant}
            >
              {child.props.children}
            </TabContent>
          ))}
        </Col>
      </Row>
    </Container>
  )
}
