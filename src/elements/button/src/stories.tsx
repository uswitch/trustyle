/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import theme from '../../../utils/theme-selector'
import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'
import { Icon } from '../../icon/src'

import { Button, Variant } from './'

const Spacer = () => <div css={css({ minHeight: 20 })} />

export default {
  title: 'Elements/Button'
}

const sizeOptions = {
  Large: 'large',
  Small: 'small'
}

export const AllVariants = () => {
  return (
    <div css={css({ padding: number('Padding', 10) })}>
      <Button
        variant={'true-speeds'}
        size={'small'}
        onClick={action('true-speeds-click')}
      >
        <div
          css={css({
            display: 'flex'
          })}
        >
          <Icon color={'green'} glyph={'checkmark'} size={20} />
          <span css={css({ padding: '0px 5px' })}>Checked by Uswitch</span>
          <Icon color={'black'} glyph={'question'} size={20} />
        </div>
      </Button>
      <Spacer />
      {theme() &&
        Object.keys(theme().elements.buttons.variants).map((key, index) => (
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
}

AllVariants.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  const permutations = permutationsGenerator({
    variant: ['primary', 'secondary'],
    size: ['large', 'small'],
    disabled: [false, true],
    inverse: [false, true]
  })

  return (
    <AllThemes>
      {permutations.map((p, i) => (
        <React.Fragment key={i}>
          <Button
            variant={p.variant}
            inverse={p.inverse}
            disabled={p.disabled}
            size={p.size}
          >
            {p.variant}, {p.inverse && 'inverted, '}
            {p.disabled && 'disabled, '} {p.size}
          </Button>
          <Spacer />
        </React.Fragment>
      ))}
    </AllThemes>
  )
}
