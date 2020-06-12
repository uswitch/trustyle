/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'
import { Col, Container, Row } from '../../../layout/flex-grid/src'
import { Button } from '../../button/src'
import Breadcrumbs from '../../breadcrumbs/src'
import IconTile from '../../icon-tile/src'

import HeroWithBackgroundImage from './'

const images = {
  wallet: require('../../../../static/hero-with-background-image/wallet.png')
}

export default {
  title: 'Elements|HeroWithBackgroundImage'
}

const crumbs = [
  {
    fields: {
      path: '/',
      displayText: 'Home'
    }
  },
  {
    fields: {
      path: '/gas-electricity/',
      displayText: 'Gas & Electricity'
    }
  },
  {
    fields: {
      path: '/gas-electricity/guides',
      displayText: 'Guides'
    }
  }
]

const breadcrumbs = (
  <Breadcrumbs
    crumbs={crumbs}
    title="Understanding energy bills and electricity bills - FAQs and more"
    variant="light"
  />
)

interface PanelHelperProps extends React.HTMLAttributes<any> {
  icon: string
}
const IconPanelHelper: React.FC<PanelHelperProps> = ({ icon, children }) => {
  const iconImg = (
    <img src={require(`../../../../static/money-icons/${icon}.svg`)} />
  )
  return <IconTile icon={iconImg}>{children}</IconTile>
}

const content = (
  <React.Fragment>
    <Row>
      <Col span={[12, 6]}>
        <Styled.h1 sx={{ marginTop: 0 }}>
          Get a headstart on your savings goals and take out an investment ISA
        </Styled.h1>
        <Button variant="primary">Compare investment ISAs</Button>
      </Col>
    </Row>
    <Styled.h2>Compare and find the deal that&apos;s right for you</Styled.h2>
    <Row wrap direction="row">
      <Col span={[6, 3]}>
        <IconPanelHelper icon="creditCards">Credit cards</IconPanelHelper>
      </Col>
      <Col span={[6, 3]}>
        <IconPanelHelper icon="mortgages">Mortgages</IconPanelHelper>
      </Col>
      <Col span={[6, 3]}>
        <IconPanelHelper icon="loans">Loans</IconPanelHelper>
      </Col>
      <Col span={[6, 3]}>
        <IconPanelHelper icon="savingAccounts">
          Savings accounts
        </IconPanelHelper>
      </Col>
      <Col span={[6, 3]}>
        <IconPanelHelper icon="travelMoney">Travel money</IconPanelHelper>
      </Col>
      <Col span={[6, 3]}>
        <IconPanelHelper icon="currentAccounts">
          Current accounts
        </IconPanelHelper>
      </Col>
      <Col span={[6, 3]}>
        <IconPanelHelper icon="carInsurance">Car insurance</IconPanelHelper>
      </Col>
      <Col span={[6, 3]}>
        <IconPanelHelper icon="investments">Investments</IconPanelHelper>
      </Col>
    </Row>
  </React.Fragment>
)

export const HeroWithCustomContainer = () => {
  const Container: React.FC = ({ children }) => (
    <div sx={{ width: 600, margin: 'auto' }}>{children}</div>
  )

  return (
    <HeroWithBackgroundImage
      imageUrl={images.wallet}
      container={Container}
      breadcrumbs={breadcrumbs}
    >
      {content}
    </HeroWithBackgroundImage>
  )
}

HeroWithCustomContainer.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const HeroWithFlexGridContainer = () => {
  return (
    <HeroWithBackgroundImage
      imageUrl={images.wallet}
      container={Container}
      breadcrumbs={breadcrumbs}
    >
      {content}
    </HeroWithBackgroundImage>
  )
}

HeroWithFlexGridContainer.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <HeroWithBackgroundImage />
    </AllThemes>
  )
}
