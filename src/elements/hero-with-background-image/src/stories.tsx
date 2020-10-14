/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'
import { Col, Row } from '../../../layout/flex-grid/src'
import { Button } from '../../button/src'
import IconTile from '../../icon-tile/src'

import HeroWithBackgroundImage from './'

const images = {
  wallet: require('../../../../static/hero-with-background-image/wallet.png'),
  bbDeals: require('../../../../static/hero-with-background-image/bb-deals.png')
}

export default {
  title: 'Elements/HeroWithBackgroundImage'
}

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
        <Styled.h1 sx={{ marginTop: 0 }}></Styled.h1>
        <Button variant="primary">Compare investment ISAs</Button>
      </Col>
    </Row>
    <Styled.h2
      sx={{
        color: 'white'
      }}
    >
      Compare and find the deal that&apos;s right for you
    </Styled.h2>
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

export const BBDealsHomepage = () => {
  return (
    <HeroWithBackgroundImage imageUrl={images.bbDeals}>
      <Row>
        <Col span={12}>
          <Styled.h1>
            Find the right broadband for you using real reviews
          </Styled.h1>
        </Col>
      </Row>
    </HeroWithBackgroundImage>
  )
}

BBDealsHomepage.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const HeroWithCustomContainer = () => {
  return (
    <HeroWithBackgroundImage imageUrl={images.wallet}>
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
    <HeroWithBackgroundImage imageUrl={images.wallet}>
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
      <HeroWithCustomContainer />
      <HeroWithFlexGridContainer />
    </AllThemes>
  )
}
