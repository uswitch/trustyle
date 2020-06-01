/** @jsx jsx */

import React, { useState } from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { Col, Container, Row } from '@uswitch/trustyle.flex-grid'
import { Glyph, Icon } from '@uswitch/trustyle.icon'
import get from '@uswitch/trustyle-utils.get'

interface StepTabLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string
  isActive: boolean
  description?: string
  icon?: Glyph
}

const StepTabLink: React.FC<StepTabLinkProps> = ({
  title,
  isActive,
  description,
  icon,
  ...props
}) => {
  const { theme }: any = useThemeUI()
  const activeIcon = get(
    theme,
    'compounds.collectionStepTabs.variants.isActive.iconColor',
    'black'
  )
  const idleIcon = get(
    theme,
    'compounds.collectionStepTabs.variants.base.iconColor',
    '#72727C'
  )
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
          px: 'md',
          mb: 'lg',
          display: 'flex',
          flexDirection: 'row',
          variant: isActive
            ? 'compounds.collectionStepTabs.variants.isActive.container'
            : 'compounds.collectionStepTabs.base.container'
        }}
      >
        {icon && (
          <div sx={{ mt: 'sm', mr: 'md' }}>
            <Icon
              color={isActive ? activeIcon : idleIcon}
              glyph={icon}
              size={21}
            />
          </div>
        )}

        <div sx={{ mt: 'sm', mb: ['md', 0, 'lg'] }}>
          <Styled.h5>{title}</Styled.h5>
          <Styled.p>{description}</Styled.p>
        </div>
      </div>
    </a>
  )
}

interface StepTabContentProps extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean
}

const StepTabContent: React.FC<StepTabContentProps> = ({
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

interface StepTabProps {
  title: string
  description?: string
  icon?: Glyph
  children: React.ReactNode
}

export const StepTab: React.FC<StepTabProps> = () => null

interface StepTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<StepTabProps>[]
}

export const StepTabs: React.FC<StepTabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <Container>
      <Row cols={[1, 2, 2]} sx={{}}>
        <Col span={1}>
          {React.Children.map(children, (child, index) => (
            <StepTabContent key={index} active={index === activeTab}>
              {child.props.children}
            </StepTabContent>
          ))}
        </Col>
        <Col span={1} sx={{}}>
          {React.Children.map(children, (child, index) => (
            <StepTabLink
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
  )
}
