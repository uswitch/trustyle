/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

const Table: React.FC = ({ children, ...props }) => {
  return <Styled.table {...props}>{children}</Styled.table>
}

const TableRow: React.FC = ({ children, ...props }) => {
  return <Styled.tr {...props}>{children}</Styled.tr>
}

const TableCell: React.FC = ({ children, ...props }) => {
  return <Styled.td {...props}>{children}</Styled.td>
}

const TableHeaderCell: React.FC = ({ children, ...props }) => {
  return <Styled.th {...props}>{children}</Styled.th>
}

export default {
  wrap: Table,
  td: TableCell,
  tr: TableRow,
  th: TableHeaderCell
}
