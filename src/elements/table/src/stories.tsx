/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

import Table from './'

storiesOf('Elements|Table', module).add('primary variant', () => (
  <div css={css({ padding: number('Padding', 10) })}>
    <Table.wrap>
      <Table.tr>
        <Table.td>First item</Table.td>
        <Table.td>Second item</Table.td>
        <Table.td>Third item</Table.td>
      </Table.tr>
      <Table.tr>
        <Table.td>First item</Table.td>
        <Table.td>Second item</Table.td>
        <Table.td>Third item</Table.td>
      </Table.tr>
    </Table.wrap>

    <Table.wrap>
      <Table.tr>
        <Table.th>First title</Table.th>
        <Table.th>Second title</Table.th>
        <Table.th>Third title</Table.th>
      </Table.tr>
      <Table.tr>
        <Table.td>First item</Table.td>
        <Table.td>Second item</Table.td>
        <Table.td>Third item</Table.td>
      </Table.tr>
      <Table.tr>
        <Table.td>First item</Table.td>
        <Table.td>Second item</Table.td>
        <Table.td>Third item</Table.td>
      </Table.tr>
    </Table.wrap>
  </div>
))
