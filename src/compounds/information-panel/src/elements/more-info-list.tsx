/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface MoreInformationListRow {
  label?: string
  value: string | boolean | number
}

interface MoreInformationListProps {
  rows: MoreInformationListRow[]
}

const format = (data: string | boolean | number) => {
  if (data === true || data === 'Yes' || data === 'yes' || data === 'true') {
    return (
      <span sx={{ display: 'inline-block' }}>
        <Icon glyph="check" color={'#6bab51'} size={18} />
      </span>
    )
  } else {
    return data
  }
}

export const MoreInformationList: React.FC<MoreInformationListProps> = ({
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
      {rows.map(({ label, value }, i: number) => {
        if (value === '' || value === null) {
          return
        }

        if (!label) {
          return (
            <tr
              key={i}
              sx={{ variant: 'compounds.information-panel.list.trSx' }}
            >
              <td
                sx={{ variant: 'compounds.information-panel.list.tdSx' }}
                colSpan={2}
              >
                {format(value)}
              </td>
            </tr>
          )
        }

        return (
          <tr key={i} sx={{ variant: 'compounds.information-panel.list.trSx' }}>
            <td
              sx={{ variant: 'compounds.information-panel.list.tdSxWithLabel' }}
            >
              {label}
            </td>
            <td
              sx={{ variant: 'compounds.information-panel.list.tdSxWithValue' }}
            >
              {format(value)}
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)
