import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { TextInput, TelInput } from './.'

storiesOf('Elements|Text Input', module).add('example', () => (
  <div>
    <TextInput
      name="example"
      value="Cascat"
    />
    <TextInput
      onBlur={() => {}}
      onChange={() => {}}
      name="example"
      placeholder="Placeholder"
      value=""
    />
    <TextInput
      hasError
      name="example"
      value="Error!"
    />
    <TelInput
      mask="99-99-99"
      name="example"
      value="Masked input"
    />
    <TelInput
      name="example"
      data-pii
      value="Data props"
    />
  </div>
))
