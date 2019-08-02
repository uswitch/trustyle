import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { Button } from './'

storiesOf('Elements|Button', module)
  .add('primary variant', () => (
    <Button variant="primary">{text('label', 'Find cheaper deals')}</Button>
  ))
  .add('secondary variant', () => (
    <Button variant="secondary">{text('label', 'Continue')} </Button>
  ))
  .add('disabled variant', () => (
    <Button disabled variant="secondary">
      {text('label', 'Loading...')}
    </Button>
  ))
