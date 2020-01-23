/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { boolean, number, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import theme from '../../../utils/theme-selector'
import { Icon } from '../../icon/src'

import { Button, Variant } from './'

const Spacer = () => <div css={css({ minHeight: 20 })} />

export default {
  title: 'Elements|Button'
}

export const AllVariants = () => (
  <div css={css({ padding: number('Padding', 10) })}>
    {theme() &&
      Object.keys(theme().buttons).map((key, index) => (
        <React.Fragment key={index}>
          <Button
            variant={key as Variant}
            disabled={boolean('Disabled', false)}
            onClick={action(`${key}-click`)}
          >
            {text(`${key} label`, `${key} button`)}
            {key.match('icon') && (
              <Icon
                color={theme().colors.primary}
                direction="right"
                glyph="caret"
                size={20}
              />
            )}
          </Button>
          <Spacer />
          <Button
            variant={key as Variant}
            disabled={boolean('Disabled', false)}
            onClick={action(`${key}-click`)}
            iconPosition="right"
          >
            {text(`${key} label`, `${key} button`)}

            <Icon
              color={theme().colors.primary}
              direction="right"
              glyph="caret"
              size={20}
            />
          </Button>
          <Spacer />
          <Button
            variant={key as Variant}
            disabled={boolean('Disabled', false)}
            onClick={action(`${key}-click`)}
            iconPosition="left"
          >
            <Icon
              color={theme().colors.primary}
              direction="right"
              glyph="caret"
              size={20}
            />
            {text(`${key} label`, `${key} button`)}
          </Button>
          <Spacer />
        </React.Fragment>
      ))}
  </div>
)

export const PrimaryVariantSnapshot = () => (
  <Button variant="primary">Primary button</Button>
)

export const SecondaryVariantSnapshot = () => (
  <Button variant="secondary">Primary button</Button>
)

export const PrimaryDisabledVariantSnapshot = () => (
  <Button variant="primary" disabled>
    Primary button
  </Button>
)

export const SecondaryDisabledVariantSnapshot = () => (
  <Button variant="secondary" disabled>
    Primary button
  </Button>
)
