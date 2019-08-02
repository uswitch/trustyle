import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { NumberInput } from './'

storiesOf('Elements|NumberInput', module).add('example', () => (
  <NumberInput
    name="example"
    onBlur={() => {}}
    onChange={() => {}}
    prefix={text('prefix', '')}
    suffix={text('suffix', '')}
    value={7.0}
  />
))
