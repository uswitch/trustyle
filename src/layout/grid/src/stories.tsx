/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { Container, Column, Row } from './index'
import { colors, typography } from '@uswitch/trustyle.styles'

import { css } from '@emotion/core'

const exampleColumnStyle = css({
  backgroundColor: colors.battleshipGrey,
  border: `${colors.lightGreyBlue} 1px solid`,
  fontFamily: typography.defaultFontFamily,
  padding: '8px',
  borderRadius: '1px',
  color: colors.offWhite
})

const exampleRowStyle = css({
  padding: '8px 0',
  fontFamily: typography.defaultFontFamily
})

storiesOf('Layout|Grid', module).add('Example 1 - basics', () => (
  <Container css={{ backgroundColor: colors.offWhite }}>
    <Row css={exampleRowStyle}>
      <Column>
        <p>Here is an example of a grid which will turn into 100% width columns on mobile.</p>
      </Column>
    </Row>
    <Row css={exampleRowStyle}>
      <Column css={exampleColumnStyle} sizes={[4,4,2,2]}>.us-col-md-2</Column>
      <Column css={exampleColumnStyle} sizes={[4,4,2,2]}>.us-col-md-2</Column>
      <Column css={exampleColumnStyle} sizes={[4,4,2,4]}>.us-col-md-4</Column>
      <Column css={exampleColumnStyle} sizes={[4,4,2,4]}>.us-col-md-4</Column>
    </Row>
    <Row css={exampleRowStyle}>
      <Column css={exampleColumnStyle} sizes={[4,4,4,8]}>.us-col-md-2</Column>
      <Column css={exampleColumnStyle} sizes={[4,4,4,4]}>.us-col-md-4</Column>
    </Row>
    <Row css={exampleRowStyle}>
      <Column css={exampleColumnStyle} sizes={[2,2,4,6]}>.us-col-md-2</Column>
      <Column css={exampleColumnStyle} sizes={[2,2,4,6]}>.us-col-md-4</Column>
    </Row>
  </Container>
))

storiesOf('Layout|Grid', module).add('Example 2 - center', () => (
  <Container css={{ backgroundColor: colors.offWhite }}>
    <Row css={exampleRowStyle} centerX centerY>
      <Column sizes={[4,4,4,6]}>
        <p>Here is an example of a grid which will turn into 100% width columns on mobile.</p>
      </Column>
    </Row>
  </Container>
))
