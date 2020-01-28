import * as React from 'react'

import { BulletListHighlight } from './'

export default {
  title: 'Elements|Bullet List Highlight'
}

export const Example = () => (
  <BulletListHighlight
    highlights={[
      <span key="example">
        You will pay £83.15 a month by Direct Debit to British Gas.
      </span>,
      <span key="example2">
        Your first payment will be taken on or shortly after your supply start
        date. Bump.
      </span>
    ]}
  />
)
