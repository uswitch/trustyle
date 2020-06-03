/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import Table from './'

export default {
  title: 'Elements|Table'
}

export const Example = () => (
  <div>
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
)

Example.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes themes={['uswitch', 'money']}>
      <Example />
    </AllThemes>
  )
}
