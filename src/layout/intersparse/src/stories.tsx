/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { Intersparse } from './index'
import { colors, typography } from '@uswitch/trustyle.styles'

import { css } from '@emotion/core'

const exampleRow = css({
  backgroundColor: colors.battleshipGrey,
  border: `${colors.lightGreyBlue} 1px solid`,
  fontFamily: typography.defaultFontFamily,
  borderRadius: '1px',
  width: '100%'
})

storiesOf('Layout|Intersparse', module).add('Example 1', () => (
  <Intersparse spacing={[8, 16]}>
    <div css={exampleRow}>full width row 1</div>
    <div css={exampleRow}>full width row 2</div>
    <div css={exampleRow}>full width row 3</div>
    <div css={exampleRow}>full width row 4</div>
    <div css={exampleRow}>full width row 5</div>
    <div css={exampleRow}>full width row 6</div>
  </Intersparse>
))
