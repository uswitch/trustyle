/** @jsx jsx */
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import { css, jsx } from '@emotion/core'

import { Input } from './.'

const Spacer = ({ height }: { height: number }) => (
  <div css={css({ minHeight: height })} />
)

storiesOf('Elements|Text Input', module).add('example', () => {
  const spaceBetween = number('Space Between', 10)
  return (
    <div css={css({ padding: number('Padding', 10) })}>
      <Input name="example" defaultValue="Cascat" type="text" />
      <Spacer height={spaceBetween} />
      <Input name="example" placeholder="Placeholder" type="text" />
      <Spacer height={spaceBetween} />
      <Input hasError name="example" defaultValue="Error!" type="text" />
      <Spacer height={spaceBetween} />
      <Input mask="99-99-99" name="example" placeholder="XX-XX-XX" type="tel" />
      <Spacer height={spaceBetween} />
      <Input name="example" freezable defaultValue="Prefilled" type="text" />
      <Spacer height={spaceBetween} />
      <Input name="example" prefix="£" type="tel" />
      <Spacer height={spaceBetween} />
      <Input name="example" suffix=".00" type="tel" />
      <Spacer height={spaceBetween} />
      <Input name="password" type="password" defaultValue="swordfish" />
    </div>
  )
})
