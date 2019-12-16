/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

import { ButtonLink } from './'

storiesOf('Elements|ButtonLink', module).add('primary variant', () => (
  <div css={css({ padding: number('Padding', 10) })}>
    <ButtonLink href="https://www.uswitch.com" variant="primary">
      This is a Button Link
    </ButtonLink>
  </div>
))
