/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { boolean, select, text } from '@storybook/addon-knobs'

import { Col, Container, Row } from '../../../layout/flex-grid/src'

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

  const iconImg = (
    <img src={require(`../../../../static/money-icons/${icon}.svg`)} />
  )
  const justTile = <IconTile icon={iconImg}>{tileText}</IconTile>

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
