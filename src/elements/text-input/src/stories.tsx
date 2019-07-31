import React from 'react'
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
      hasError={true}
      onBlur={() => {}}
      onChange={() => {}}
      name="example"
      value="Error!"
    />
  </div>
))
