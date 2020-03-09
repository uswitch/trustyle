/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import theme from '../../../utils/theme-selector'
import AllThemes from '../../../utils/all-themes'
import { Icon } from '../../icon/src'

import { Button, Variant } from './'

const Spacer = () => <div css={css({ minHeight: 20 })} />

export default {
  title: 'Elements|Button'
}

const sizeOptions = {
  Large: 'large',
  Small: 'small'
}

export const AllVariants = () => (
  <div css={css({ padding: number('Padding', 10) })}>
    {theme() &&
      Object.keys(theme().buttons.variants).map((key, index) => (
        <React.Fragment key={index}>
          <Button
            variant={key as Variant}
            disabled={boolean('Disabled', false)}
            onClick={action(`${key}-click`)}
            size={select('Sizes', sizeOptions, 'large')}
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
            size={select('Sizes', sizeOptions, 'large')}
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
            size={select('Sizes', sizeOptions, 'large')}
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
          <Button
            variant={key as Variant}
            inverse
            disabled={boolean('Disabled', false)}
            onClick={action(`${key}-click`)}
          >
            {`inverse ${key} button`}
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
        </React.Fragment>
      ))}
  </div>
)

export const Percy = () => (
  <AllThemes>
    <Button variant="primary">Primary button</Button>
    <Spacer />
    <Button variant="primary" disabled>
      Primary button disabled
    </Button>
    <Spacer />
    <Button variant="secondary">Secondary button</Button>
    <Spacer />
    <Button variant="secondary" disabled>
      Secondary button disabled
    </Button>
  </AllThemes>
)
