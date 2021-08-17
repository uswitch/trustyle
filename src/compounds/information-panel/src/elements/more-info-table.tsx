/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface MoreInformationTableProps {
  rows: any
}

export const MoreInformationTable: React.FC<MoreInformationTableProps> = ({
  rows
}) => (
  <table
    sx={{
      border: 'none',
      borderCollapse: 'collapse',
      overflow: 'scroll',
      margin: 0,
      width: '100%'
    }}
  >
    <tbody>
      {rows.map((row: any[], i: number) => {
        return (
          <tr
            sx={{ variant: 'compounds.information-panel.table.trSx' }}
            key={i}
          >
            {row.map((cell: any, j) => {
              return cell.type === 'th' ? (
                <th
                  key={j}
                  colSpan={cell.colspan}
                  sx={{ variant: 'compounds.information-panel.table.tdSx' }}
                >
                  {cell.value}
                </th>
              ) : (
                <td
                  colSpan={cell.colspan}
                  sx={{ variant: 'compounds.information-panel.table.tdSx' }}
                  key={j}
                >
                  {cell.value}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  </table>
)
