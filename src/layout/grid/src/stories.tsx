/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { Container, Column, Row } from './index'

storiesOf('Layout|Grid', module).add('Example 1', () => (
  <Container>
    <Row>
      <Column sizes={[4,4,12]}>full mobile -> half tablet -> full desktop</Column>
      <Column sizes={[2,4,6]}>test</Column>
      <Column>Automatically grows</Column>
      <Column>Automatically grows</Column>
    </Row>
    <Row>test</Row>
    <Row>test</Row>
    <Row>test</Row>
  </Container>
))
