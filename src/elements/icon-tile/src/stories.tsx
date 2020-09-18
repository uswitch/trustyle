/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { boolean, select, text } from '@storybook/addon-knobs'

import { Col, Container, Row } from '../../../layout/flex-grid/src'
import AllThemes from '../../../utils/all-themes'

import IconTile from './'

export default {
  title: 'Elements|Icon Tile'
}

export const ExampleWithKnobs = () => {
  const layoutStory = boolean('Add container + bg?', true)
  const tileText = text('Tile text', 'Cat insurance')
  const icon = select(
    'Icon',
    ['carInsurance', 'creditCards', 'loans', 'mortgages'],
    'carInsurance'
  )
  const displayVariant = select(
    'Display Variant',
    ['horizontal', 'vertical'],
    'horizontal'
  )

  const iconImg = (
    <img src={require(`../../../../static/money-icons/${icon}.svg`)} />
  )
  const justTile = (
    <IconTile icon={iconImg} displayVariant={displayVariant}>
      {tileText}
    </IconTile>
  )

  return layoutStory ? (
    <div sx={{ margin: -10, backgroundColor: '#924A8B', paddingY: 'md' }}>
      <Container>
        <Row>
          <Col span={[6, 4]} offset={[3, 4]}>
            {justTile}
          </Col>
        </Row>
      </Container>
    </div>
  ) : (
    justTile
  )
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  const iconImg = (icon: string) => (
    <img src={require(`../../../../static/money-icons/${icon}.svg`)} />
  )
  const getTile = (icon: string, text: string) => (
    <IconTile icon={iconImg(icon)}>{text}</IconTile>
  )

  return (
    <AllThemes themes={['uswitch', 'money']}>
      <div sx={{ margin: -10, backgroundColor: '#924A8B', paddingY: 'md' }}>
        <Container>
          <Row direction="row">
            <Col span={4} offset={2}>
              {getTile('carInsurance', 'Cat insurance')}
            </Col>
            <Col span={4}>{getTile('creditCards', 'Credit cards')}</Col>
          </Row>
        </Container>
      </div>
    </AllThemes>
  )
}
