import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { TextInput, TelInput } from './.'

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
    <TelInput
      mask="99-99-99"
      name="example"
      onBlur={() => {}}
      onChange={() => {}}
      value="Masked input"
    />
    <TelInput
      name="example"
      onBlur={() => {}}
      onChange={() => {}}
      dataProps={{
        pii: true,
        text: 'some-text',
        nullable: null
      }}
      value="Data props"
    />
  </div>
))
