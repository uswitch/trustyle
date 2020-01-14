/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { number, text } from '@storybook/addon-knobs'

import theme from '../../../utils/theme-selector'

import { ButtonLink } from './'

const Spacer = () => <div css={css({ minHeight: 20 })} />

storiesOf('Elements|ButtonLink', module)
  .add('all variants', () => (
    <div css={css({ padding: number('Padding', 10) })}>
      {theme() &&
        Object.keys(theme().buttons).map((key, index) => (
          <React.Fragment key={index}>
            <ButtonLink
              variant={key}
              href="https://www.uswitch.com"
              target="_blank"
            >
              {text(`${key} label`, `${key} link button`)}
            </ButtonLink>
            <Spacer />
          </React.Fragment>
        ))}
    </div>
  ))
