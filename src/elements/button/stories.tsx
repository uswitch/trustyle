import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { Button } from './'

storiesOf('Elements|Button', module)
  .add('primary variant', () => (
    <Button label={text('label', 'Find cheaper deals')} variant="primary" />
  ))
  .add('secondary variant', () => (
    <Button label={text('label', 'Continue')} variant="secondary" />
  ))
  .add('disabled variant', () => (
    <Button disabled label={text('label', 'Loading...')} variant="secondary" />
  ))
