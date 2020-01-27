/** @jsx jsx */

import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { colors, typography } from '@uswitch/trustyle.styles'

import { Inline, Stack } from './index'

const exampleRow = css({
  backgroundColor: colors.battleshipGrey,
  border: `${colors.lightGreyBlue} 1px solid`,
  fontFamily: typography.defaultFontFamily,
  borderRadius: '1px'
})

storiesOf('Layout|Arrangement', module).add('Stacking elements', () => (
  <Stack spacing={[8, 16]}>
    <div css={exampleRow}>full width row 1</div>
    <div css={exampleRow}>full width row 2</div>
    <div css={exampleRow}>full width row 3</div>
    <div css={exampleRow}>full width row 4</div>
    <div css={exampleRow}>full width row 5</div>
    <div css={exampleRow}>full width row 6</div>
  </Stack>
))

storiesOf('Layout|Arrangement', module).add('Stacking inlines', () => (
  <Stack spacing={[8, 16]}>
    <span css={exampleRow}>full width row 1</span>
    <span css={exampleRow}>full width row 2</span>
    <span css={exampleRow}>full width row 3</span>
    <span css={exampleRow}>full width row 4</span>
    <span css={exampleRow}>full width row 5</span>
    <span css={exampleRow}>full width row 6</span>
  </Stack>
))

storiesOf('Layout|Arrangement', module).add('Inlining elements', () => (
  <Inline spacing={[8, 16]}>
    <div css={exampleRow}>full width row 1</div>
    <div css={exampleRow}>full width row 2</div>
    <div css={exampleRow}>full width row 3</div>
    <div css={exampleRow}>full width row 4</div>
    <div css={exampleRow}>full width row 5</div>
    <div css={exampleRow}>full width row 6</div>
  </Inline>
))
