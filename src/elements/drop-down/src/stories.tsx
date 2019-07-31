import React from 'react'
import { storiesOf } from '@storybook/react'

import { DropDown } from './'

const options = [
  { value: 'red', text: 'Red' },
  { value: 'blue', text: 'Blue' },
  { value: 'yellow', text: 'Yellow' }
]

storiesOf('Elements|DropDown', module).add('example', () => (
  <DropDown
    name="example"
    onBlur={() => {}}
    onChange={() => {}}
    options={options}
    value={null}
  />
))
