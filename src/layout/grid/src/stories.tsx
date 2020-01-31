/** @jsx jsx */

import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { colors, typography } from '@uswitch/trustyle.styles'

import { Column, Container, Row } from './index'

const exampleColumnStyle = css({
  backgroundColor: colors.battleshipGrey,
  border: `${colors.lightGreyBlue} 1px solid`,
  fontFamily: typography.defaultFontFamily,
  borderRadius: '1px',
  color: colors.offWhite
})

const exampleRowStyle = css({
  fontFamily: typography.defaultFontFamily
})

storiesOf('Layout|Grid', module).add('Example 1 - basics', () => (
  <Container
    outerMargin={['0 8px', '0 auto']}
    css={{ backgroundColor: colors.offWhite }}
  >
    <Row css={exampleRowStyle} topSpacing={[8, 16]}>
      <Column>
        <p>
          Here is an example of a grid which will turn into 100% width columns
          on mobile.
        </p>
      </Column>
    </Row>
    <Row css={exampleRowStyle} topSpacing={[8, 16]}>
      <Column hide-s m={1 / 4} l={1 / 6} css={exampleColumnStyle}>
        .us-col-md-2
      </Column>
      <Column m={1 / 4} l={1 / 6} css={exampleColumnStyle}>
        .us-col-md-2
      </Column>
      <Column m={1 / 4} l={1 / 3} css={exampleColumnStyle}>
        .us-col-md-4
      </Column>
      <Column m={1 / 4} l={1 / 3} css={exampleColumnStyle}>
        .us-col-md-4
      </Column>
    </Row>
    <Row css={exampleRowStyle} topSpacing={[8, 16]}>
      <Column m={1 / 2} l={2 / 3} css={exampleColumnStyle}>
        .us-col-md-2
      </Column>
      <Column m={1 / 2} l={1 / 3} css={exampleColumnStyle}>
        .us-col-md-4
      </Column>
    </Row>
    <Row css={exampleRowStyle} topSpacing={[8, 16]}>
      <Column s={1 / 2} m={1 / 2} l={1 / 2} css={exampleColumnStyle}>
        .us-col-md-2
      </Column>
      <Column s={1 / 2} m={1 / 2} l={1 / 2} css={exampleColumnStyle}>
        .us-col-md-4
      </Column>
    </Row>
  </Container>
))

storiesOf('Layout|Grid', module).add('Example 2 - center', () => (
  <Container css={{ backgroundColor: colors.offWhite }}>
    <Row css={exampleRowStyle} centerX>
      <Column m={1 / 2} l={1 / 2}>
        <p>
          Here is an example of a grid which will turn into 100% width columns
          on mobile.
        </p>
      </Column>
    </Row>
  </Container>
))

storiesOf('Layout|Grid', module).add('Example 3 - nested grids', () => (
  <Container css={{ backgroundColor: colors.offWhite }}>
    <Row css={exampleRowStyle}>
      <Column>
        <Row>
          <Column m={6 / 8} l={8 / 12}>
            <h2>A little header</h2>
          </Column>
        </Row>
        <Row>
          <Column s={1 / 2} m={1 / 2} l={1 / 2}>
            <div css={exampleColumnStyle}>Something</div>
          </Column>
          <Column s={1 / 2} m={1 / 2} l={1 / 2}>
            <div css={exampleColumnStyle}>Something else</div>
          </Column>
        </Row>
      </Column>
    </Row>
  </Container>
))

storiesOf('Layout|Grid', module).add('Example 4 - passing screen sizes', () => (
  <Container css={{ backgroundColor: colors.offWhite }} containerWidths={['100%', 740, 990]} gutterWidths={[8, 8, 8]}>
    <Row css={exampleRowStyle} gutterWidths={[8, 8, 8]}>
      <Column gutterWidths={[8, 8, 8]}>
        <Row gutterWidths={[8, 8, 8]}>
          <Column m={6 / 8} l={8 / 12}>
            <h2>A little header</h2>
          </Column>
        </Row>
        <Row gutterWidths={[8, 8, 8, 8]}>
          <Column s={1 / 3} m={1 / 3} l={1 / 3} gutterWidths={[8, 8, 8]}>
            <div css={exampleColumnStyle}>Something</div>
          </Column>
          <Column s={1 / 3} m={1 / 3} l={1 / 3} gutterWidths={[8, 8, 8]}>
            <div css={exampleColumnStyle}>Something</div>
          </Column>
          <Column s={1 / 3} m={1 / 3} l={1 / 3} gutterWidths={[8, 8, 8]}>
            <div css={exampleColumnStyle}>Something else</div>
          </Column>
        </Row>
      </Column>
    </Row>
  </Container>
))
