/** @jsx jsx */

import * as React from 'react'
import { jsx, Themed } from 'theme-ui'

const Table: React.FC = ({ children, ...props }) => {
  return (
    <div
      sx={{
        overflowX: ['scroll' as const, 'visible' as const, 'visible' as const],
        '&::-webkit-scrollbar': { display: 'none' },
        '&::-ms-overflow-style': { display: 'none' }
      }}
    >
      <Themed.table {...props}>{children}</Themed.table>
    </div>
  )
}

const TableRow: React.FC = ({ children, ...props }) => {
  return <Themed.tr {...props}>{children}</Themed.tr>
}

const TableCell: React.FC = ({ children, ...props }) => {
  return <Themed.td {...props}>{children}</Themed.td>
}

const TableHeaderCell: React.FC = ({ children, ...props }) => {
  return <Themed.th {...props}>{children}</Themed.th>
}

export default {
  wrap: Table,
  td: TableCell,
  tr: TableRow,
  th: TableHeaderCell
}
