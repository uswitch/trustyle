import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { TextInput } from './.'

storiesOf('Elements|Text Input', module).add('example', () => (
  <div>
    <TextInput
      onBlur={() => {}}
      onChange={() => {}}
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
      onBlur={() => {}}
      onChange={() => {}}
      name="example"
      value="Error!"
    />
  </div>
))
