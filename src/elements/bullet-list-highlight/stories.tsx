import React from 'react'
import { storiesOf } from '@storybook/react'

import { BulletListHighlight } from './'

storiesOf('Elements|Bullet List Highlight', module).add('Example', () => (
  <BulletListHighlight
    highlights={[
      <span key="example">
        You will pay £82.15 a month by Direct Debit to British Gas.
      </span>,
      <span key="example2">
        Your first payment will be taken on or shortly after your supply start
        date.
      </span>
    ]}
  />
))
