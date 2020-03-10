/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { storiesOf } from '@storybook/react'

import { Container, Row, Col } from './index'

const bigCenteredSX = { height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }

storiesOf('Layout|Flex Grid', module).add('Basic Example', () => (
  <Container sx={{ bg: '#eee', color: 'white' }}>
    <Row 
      sx={{ textAlign: 'center' }}
    >
      <Col>Col 1</Col>
      <Col>Col 2</Col>
      <Col>Col 3</Col>
      <Col>Col 4</Col>
    </Row>
  </Container>
))

storiesOf('Layout|Flex Grid', module).add('Example of responsive number of columns and responsive column span', () => (
  <Container sx={{ bg: '#eee', color: 'white' }}>
    <Row
      direction='row'
      sx={{ textAlign: 'center' }}
      cols={[4, 8, 12]}
      >
      <Col span={[2, 5, 2]} sx={bigCenteredSX}>Col 1</Col>
      <Col span={[1, 1, 2]} sx={bigCenteredSX}>Col 2</Col>
      <Col span={[1, 1, 2]} sx={bigCenteredSX}>Col 3</Col>
      <Col span={[1, 1, 6]} sx={{ ...bigCenteredSX, display: ['none', 'flex', null] }}>Col 4</Col>
    </Row>
  </Container>
))

storiesOf('Layout|Flex Grid', module).add('Change flow of columns responsively', () => (
  <Container sx={{ bg: '#eee', color: 'white' }}>
    <Row
      direction={['column-reverse', 'row', 'row-reverse']}
      sx={{ textAlign: 'center' }}
    >
      <Col>Col 1</Col>
      <Col>Col 2</Col>
      <Col>Col 3</Col>
      <Col>Col 4</Col>
    </Row>
  </Container>
))