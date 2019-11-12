/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { number, text } from '@storybook/addon-knobs'
import { colors } from '@uswitch/trustyle.styles'

import { Icon } from '../../icon/src'

import { ButtonLink } from './'

const Spacer = () => <div css={css({ minHeight: 20 })} />

storiesOf('Elements|ButtonLink', module).add('primary variant', () => (
  <div css={css({ padding: number('Padding', 10) })}>
    <ButtonLink href="https://www.uswitch.com" variant="primary">This is a Button Link</ButtonLink>
  </div>
))
