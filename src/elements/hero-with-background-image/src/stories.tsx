/** @jsx jsx */
import * as React from 'react'
import { jsx, Themed } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'
import { Col, Row } from '../../../layout/flex-grid/src'
import { Button } from '../../button/src'
import IconTile from '../../icon-tile/src'

import HeroWithBackgroundImage from './'

const images = {
  wallet: '/hero-with-background-image/wallet.png',
  bbDeals: '/hero-with-background-image/bb-deals.png'
}

export default {
  title: 'Elements/HeroWithBackgroundImage'
}

interface PanelHelperProps extends React.HTMLAttributes<any> {
  icon: string
}
const IconPanelHelper: React.FC<PanelHelperProps> = ({ icon, children }) => {
  const iconImg = <img src={`/money-icons/${icon}.svg`} />
  return <IconTile icon={iconImg}>{children}</IconTile>
}

const content = (
  <React.Fragment>
    <Row>
      <Col span={[12, 6]}>
        <Themed.h1 sx={{ marginTop: 0 }}></Themed.h1>
        <Button variant="primary">Compare investment ISAs</Button>
      </Col>
    </Row>
    <Themed.h2
      sx={{
        color: 'white'
      }}
    >
      Compare and find the deal that&apos;s right for you
    </Themed.h2>
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
          <Themed.h1>
            Find the right broadband for you using real reviews
          </Themed.h1>
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
      <HeroWithBackgroundImage />
    </AllThemes>
  )
}
