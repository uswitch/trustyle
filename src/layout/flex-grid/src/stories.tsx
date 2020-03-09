/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { storiesOf } from '@storybook/react'

import { Container, Row, Col } from './index'

storiesOf('Layout|Flex Grid', module).add('Basic Example', () => (
  <div sx={{ bg: 'light-grey', color: 'white' }}>
    <Container>
      <Row 
        direction={['column', 'column', 'row']}
        cols={[4, 8, 12]}
      >
        <Col>Col 1</Col>
        <Col>Col 2</Col>
        <Col>Col 3</Col>
        <Col>Col 4</Col>
      </Row>
      <Row direction='row'>
        <Col span={[2, 6, 3]}><div sx={{ height: 100 }}>Col 1</div></Col>
        <Col span={[2, 2, 3]}>Col 2</Col>
        <Col span={[6, 2, 3]}>Col 3</Col>
        <Col span={[2, 2, 3]}>Col 4</Col>
      </Row>
    </Container>
  </div>
))
