/** @jsx jsx */
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

import { TelInput, TextInput } from './.'
import { css, jsx } from '@emotion/core'

const Spacer = ({ height }: { height: number }) => (
  <div css={css({ minHeight: height })} />
)

storiesOf('Elements|Text Input', module).add('example', () => {
  const spaceBetween = number("Space Between", 10)
  return (
    <div css={css({ padding: number('Padding', 10) })}>
      <TextInput name="example" defaultValue="Cascat" />
      <Spacer height={spaceBetween} />
      <TextInput
        name="example"
        placeholder="Placeholder"
      />
      <Spacer height={spaceBetween} />
      <TextInput hasError name="example" defaultValue="Error!" />
      <Spacer height={spaceBetween} />
      <TelInput mask="99-99-99" name="example" placeholder="XX-XX-XX" />
      <Spacer height={spaceBetween} />
      <TextInput name="example" freezable defaultValue="Prefilled" />
      <Spacer height={spaceBetween} />
      <TextInput name="example" prefix="£" type="tel" />
      <Spacer height={spaceBetween} />
      <TextInput name="example" suffix=".00" type="tel" />
    </div>
  )
})
