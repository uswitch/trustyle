/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface MoreInformationTextProps {
  content: string[]
}

export const MoreInformationText: React.FC<MoreInformationTextProps> = ({
  content
}) => (
  <React.Fragment>
    {content.map((chunk: string, i: number) => {
      if (chunk === null) {
        return
      }

      if (chunk.includes('<ul>')) {
        return (
          <div
            key={i}
            sx={{ variant: 'compounds.information-panel.text' }}
            dangerouslySetInnerHTML={{ __html: chunk }}
          ></div>
        )
      }

      return (
        <React.Fragment key={i}>
          {chunk
            .replace(/<\/p>/g, '')
            .split('<br/>')
            .map(line => line.split('<p>'))
            .reduce((acc, val) => acc.concat(val), [])
            .map((line: string, j: number) => {
              return (
                <p
                  key={j}
                  sx={{ variant: 'compounds.information-panel.text' }}
                  dangerouslySetInnerHTML={{ __html: line }}
                ></p>
              )
            })}
        </React.Fragment>
      )
    })}
  </React.Fragment>
)

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
      borderCollapse: 'collapse' as const,
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

interface MoreInformationTableProps {
  rows: any
}

export const MoreInformationTable: React.FC<MoreInformationTableProps> = ({
  rows
}) => (
  <table
    sx={{
      border: 'none',
      borderCollapse: 'collapse' as const,
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

interface MoreInformationBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

export const MoreInformationBlock: React.FC<MoreInformationBlockProps> = ({
  title,
  children
}) => (
  <div
    sx={{
      background: '#fff',
      color: '#333',
      alignItems: 'center' as const,
      fontSize: '14px',
      boxSizing: 'border-box' as const,
      display: 'block',
      width: ['auto', '50%'],
      marginTop: 'sm',
      marginBottom: [0, 'sm'],
      marginLeft: 'sm',
      marginRight: 'sm',
      ':nth-of-type(even)': {
        marginLeft: ['sm', '0']
      }
    }}
  >
    <div
      sx={{
        padding: '15px 20px 20px',
        lineHeight: ['1.618em', 'inherit']
      }}
    >
      <div sx={{ variant: 'compounds.information-panel.block.title' }}>
        {title}
      </div>

      <div sx={{ background: '#fff', overflow: 'auto' }}>{children}</div>
    </div>
  </div>
)

interface EligibilityProps extends React.HTMLAttributes<HTMLDivElement> {
  moreInformationPanel: React.ReactNode[]
  moreInformationButton?: React.ReactNode
  moreInformationLabel?: string
  variant?: string
}

export const Eligibility: React.FC<EligibilityProps> = ({
  moreInformationPanel,
  moreInformationButton,
  moreInformationLabel = 'More information',
  variant = ''
}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div
      sx={{
        marginTop: [variant === 'LegacyMobileCards' ? 2 : 0, 0],
        padding: [variant === 'LegacyMobileCards' ? '0 15px' : 0, 0]
      }}
    >
      <div
        sx={{
          display: 'block',
          background: '#f2f3f4',
          margin: 'auto',
          height: open ? 'auto' : '0px',
          transition: 'height .4s ease-in-out',
          overflow: 'hidden'
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: ['column' as const, 'row' as const],
            alignItems: 'stretch',
            background: '#f2f3f4',
            justifyContent: 'center'
          }}
        >
          {moreInformationPanel}
        </div>

        <div
          sx={{
            padding: ['15px 20px 20px', '0 20px'],
            maxWidth: '420px',
            margin: '0 auto'
          }}
        >
          {moreInformationButton}
        </div>
      </div>

      <button
        sx={{
          background: '#f2f3f4',
          border: 'none',
          borderBottom: [
            variant === 'LegacyMobileCards' ? 'none' : '1px dashed #b1b1b1',
            'none'
          ],
          width: '100%',
          margin: 'auto',
          marginBottom: [variant === 'LegacyMobileCards' ? '15px' : '0', '0'],
          padding: '8px',
          lineHeight: '1.618em',
          color: '#34454E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '13px',
          boxSizing: 'border-box' as const,
          outline: 'none'
        }}
        onClick={() => setOpen(!open)}
      >
        <div sx={{ pr: '15px' }}>{moreInformationLabel}</div>
        <Icon
          color="#34454E"
          glyph={'caret'}
          direction={open ? 'up' : 'down'}
          size={10}
        />
      </button>
    </div>
  )
}
