/** @jsx jsx */

import React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { boolean, radios } from '@storybook/addon-knobs'
import { colors } from '@uswitch/trustyle.styles'

import { Drawer } from './'

const LoremIpsum = () => (
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Aenean vel arcu non magna varius sagittis vel at elit.</p>
    <p>Vivamus et orci pretium, commodo eros vitae, tincidunt purus.</p>
    <p>Nunc consequat condimentum porttitor.</p>
    <p>Cras at mi sed quam hendrerit bibendum ac a lorem.</p>
    <p>Mauris a sapien vitae massa lacinia malesuada.</p>
  </section>
)

const Padding = ({ children }: { children: React.ReactNode }) => (
  <div css={css({ padding: 20 })}>{children}</div>
)

const triggerButton = css({
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  color: colors.cerulean,
  cursor: 'pointer',
  textAlign: 'left',
  textDecoration: 'underline'
})

const ExampleDrawer = () => {
  const trigger = <button css={triggerButton}>Click to learn more</button>
  return (
    <Drawer
      ariaLabel="An example modal element"
      disableScrolling={boolean('Is mobile?', true)}
      side={radios('Side', { Left: 'left', Right: 'right' }, 'right', 'side')}
      triggerElement={trigger}
    >
      <Padding>
        <h2>Helpful Content</h2>
        <p>
          This space will be used to give help to users. We’ll try to explain
          solutions to most common problems users encounter when trying to
          complete a comparison.
        </p>
      </Padding>
    </Drawer>
  )
}

storiesOf('Elements/Drawer', module).add('Example', () => {
  return (
    <Padding>
      <LoremIpsum />
      <br />
      <br />
      <br />
      <p>
        Modal trigger is in the middle <ExampleDrawer /> of some text.
      </p>
      <br />
      <br />
      <br />
      <LoremIpsum />
      <br />
      <br />
      <br />
      <LoremIpsum />
    </Padding>
  )
})
