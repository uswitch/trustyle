/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { number, text } from '@storybook/addon-knobs'
import { colors } from '@uswitch/trustyle.styles'

import { Icon } from '../../icon/src'

import { Button } from './'

const Spacer = () => <div css={css({ minHeight: 20 })} />

storiesOf('Elements|Button', module).add('primary variant', () => (
  <div css={css({ padding: number('Padding', 10) })}>
    <Button variant="primary">{text('Primary Label', 'Primary Button')}</Button>

    <Spacer />

    <Button variant="secondary">{text('Secondary Label', 'Secondary')} </Button>

    <Spacer />

    <Button variant="outline">{text('Outline Label', 'Outline')}</Button>

    <Spacer />

    <Button disabled variant="outline">
      {text('Disabled Outline Label', 'Outline')}
    </Button>

    <Spacer />

    <Button disabled variant="secondary">
      {text('Disabled Label', 'Loading...')}
    </Button>

    <Spacer />

    <Button variant="primary" justifyContent="align-left">
      {text('Left Label', 'Left Aligned')}
    </Button>

    <Spacer />

    <Button variant="secondary" justifyContent="space-between">
      {text('Spaced Label', 'Space Between')}
      <Icon
        color={colors.cobaltBlue}
        direction="right"
        glyph="caret"
        size={20}
      />
    </Button>

    <Spacer />
  </div>
))
