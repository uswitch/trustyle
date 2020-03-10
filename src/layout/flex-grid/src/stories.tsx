/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { storiesOf } from '@storybook/react'

import { Container, Row, Col } from './index'

const bigCenteredSX = { height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }

storiesOf('Layout|Flex Grid', module).add('Basic Example', () => (
  <React.Fragment>
    <Container sx={{ bg: '#eee', color: 'white' }}>
      <Row 
        sx={{ textAlign: 'center' }}
      >
        <Col sx={bigCenteredSX}>Col 1</Col>
        <Col sx={bigCenteredSX}>Col 2</Col>
        <Col sx={bigCenteredSX}>Col 3</Col>
        <Col sx={bigCenteredSX}>Col 4</Col>
      </Row>
    </Container>
  </React.Fragment>
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
      <Col span={[1, 1, 6]} sx={{ ...bigCenteredSX }}>Col 4</Col>
    </Row>
  </Container>
))

storiesOf('Layout|Flex Grid', module).add('Change flow of columns responsively', () => (
  <Container sx={{ bg: '#eee', color: 'white' }}>
    <Row
      direction={['column-reverse', 'row', 'row-reverse']}
      sx={{ textAlign: 'center' }}
    >
      <Col sx={{ ...bigCenteredSX, bg: 'red' }}>Col 1</Col>
      <Col sx={{ ...bigCenteredSX, bg: 'green' }}>Col 2</Col>
      <Col sx={{ ...bigCenteredSX, bg: 'blue' }}>Col 3</Col>
      <Col sx={{ ...bigCenteredSX, bg: 'pink' }}>Col 4</Col>
    </Row>
  </Container>
))

storiesOf('Layout|Flex Grid', module).add('Create containers based upon cols', () => (
  <React.Fragment>
    <Container 
      cols={12}
      span={8}
      sx={{ bg: '#eee', color: 'white' }}
    >
      <Row sx={{ textAlign: 'center' }}>
        <Col>Container at 8 out of 12 cols width</Col>
      </Row>
    </Container>
    <Container sx={{ bg: '#eee', color: 'white' }}>
      <Row
        direction='row'
        sx={{ textAlign: 'center' }}
        cols={[4, 12, 12]}
        >
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
      </Row>
    </Container>
  </React.Fragment>
))

storiesOf('Layout|Flex Grid', module).add('Offset columns', () => (
  <React.Fragment>
    <Container sx={{ bg: '#eee', color: 'white' }}>
      <Row 
        sx={{ textAlign: 'center' }}
        cols={12}
      >
        <Col offset={3} span={6} sx={bigCenteredSX}>Offset column</Col>
      </Row>
    </Container>
    <Container sx={{ bg: '#eee', color: 'white' }}>
      <Row
        direction='row'
        sx={{ textAlign: 'center' }}
        cols={[4, 12, 12]}
        >
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
        <Col span={[1, 1, 1]}>x</Col>
      </Row>
    </Container>
  </React.Fragment>
))