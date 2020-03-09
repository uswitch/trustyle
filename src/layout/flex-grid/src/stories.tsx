/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { storiesOf } from '@storybook/react'

import { Container, Row, Col } from './index'

storiesOf('Layout|Flex Grid', module).add('Basic Example', () => (
  <div sx={{ bg: 'light-grey', color: 'white' }}>
    <Container>
      <Row>
        <Col>Col 1</Col>
        <Col>Col 2</Col>
        <Col>Col 3</Col>
        <Col>Col 4</Col>
      </Row>
      <Row>
        <Col span={2}>Col 1</Col>
        <Col span={2}>Col 2</Col>
        <Col span={6}>Col 3</Col>
        <Col span={2}>Col 4</Col>
      </Row>
    </Container>
  </div>
))
