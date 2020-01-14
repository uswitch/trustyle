/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { boolean, number, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { colors } from '@uswitch/trustyle.styles'

import theme from '../../../utils/theme-selector'
import { Icon } from '../../icon/src'

import { Button } from './'

const Spacer = () => <div css={css({ minHeight: 20 })} />

storiesOf('Elements|Button', module)
  .add('primary variant', () => (
    <div css={css({ padding: number('Padding', 10) })}>
      {theme() &&
        Object.keys(theme().buttons).map((key, index) => (
          <React.Fragment key={index}>
            <Button
              variant={key}
              disabled={boolean('Disabled', false)}
              onClick={action(`${key}-click`)}
            >
              {text(`${key} label`, `${key} button`)}
              {key.match('icon') && (
                <Icon
                  color={colors.cobaltBlue}
                  direction="right"
                  glyph="caret"
                  size={20}
                />
              )}
            </Button>
            <Spacer />
          </React.Fragment>
        ))}
    </div>
  ))
