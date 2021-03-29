/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { ButtonLink } from '@uswitch/trustyle.button-link'
import { Button } from '@uswitch/trustyle.button'
import { Icon } from '@uswitch/trustyle.icon'

import RowWrapper from './row-wrapper'

const AdditionalInfo: React.FC<React.HTMLAttributes<any>> = ({ children }) => {
  return (
    <div
      sx={{
        margin: ['15px', '15px 0'],
        paddingLeft: [0, '160px'],
        fontSize: '12px',
        color: '#858f94',
        fontWeight: '300'
      }}
    >
      {children}
    </div>
  )
}

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div
      sx={{
        position: 'absolute',
        top: 0,
        transform: 'translateY(-50%)',
        padding: '0 6px',
        backgroundColor: '#fff',
        marginLeft: ['4px', 'sm']
      }}
    >
      <div
        sx={{
          padding: ['2.5px 8px', '5.5px 16px'],
          backgroundColor: '#34454E',
          color: '#fff',
          borderRadius: '3px',
          fontSize: ['14px', '16px'],
          lineHeight: ['normal', 'inherit'],
          fontWeight: [400, 600]
        }}
      >
        {text}
      </div>
    </div>
  )
}

interface MoreInformationButtonProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  onClick: () => void
  href: string
}

export const MoreInformationButton: React.FC<MoreInformationButtonProps> = ({
  onClick,
  children,
  href
}) => {
  return (
    <CtaCell
      styles={{
        width: '100%',
        fontSize: '14px',
        marginBottom: '0'
      }}
      href={href}
      onClick={onClick}
      variant="eligibility"
    >
      {children}
    </CtaCell>
  )
}

interface RepresentativeExampleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string
}

const RepresentativeExample: React.FC<RepresentativeExampleProps> = ({
  text
}) => {
  return (
    <div
      sx={{
        marginTop: '5px',
        padding: ['5px 20px 10px', '5px 40px 10px'],
        backgroundColor: '#f7f7f7',
        fontSize: '14px',
        fontWeight: 600,
        color: '#924a8b',
        textAlign: 'center',
        lineHeight: 'normal'
      }}
    >
      Representative Example: {text}
    </div>
  )
}

const BaseCell: React.FC<React.HTMLAttributes<any>> = ({
  children,
  className
}) => {
  const styles = {
    flex: 1,
    transition: 'background-color 1s ease',
    textAlign: 'center',
    order: 2
  }

  return (
    <div sx={styles} className={className}>
      {children}
    </div>
  )
}

export const ImageCell: React.FC<React.HTMLAttributes<any>> = ({
  children
}) => {
  return (
    <BaseCell
      sx={{
        order: 1,
        maxWidth: ['120px', '130px'],
        margin: 'auto',
        marginRight: ['auto', '15px'],
        py: ['10px', 0],
        '>:first-child': {
          margin: 'auto',
          display: 'block',
          maxWidth: '130px',
          maxHeight: '90px'
        }
      }}
    >
      {children}
    </BaseCell>
  )
}

interface DataCellProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string
  borderBottomColor?: string
  color?: string
  label?: string
}

export const DataCell: React.FC<DataCellProps> = ({
  children,
  backgroundColor,
  borderBottomColor,
  color,
  label
}) => {
  return (
    <BaseCell
      sx={{
        borderWidth: '0 0 5px',
        borderStyle: 'solid',
        backgroundColor,
        borderBottomColor,
        padding: '5px 0px 10px',
        margin: ['4px 0', '2px'],
        marginX: ['15px', '2px'],
        fontFamily: 'Varela Round,Arial,sans-serif',
        color: '#191919'
      }}
    >
      <span
        sx={{
          fontFamily: 'Open Sans,Arial,sans-serif',
          fontSize: '11px',
          display: 'flex',
          justifyContent: 'center',
          padding: '5px 5px 0px',
          color
        }}
      >
        {label}
      </span>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '5px'
        }}
      >
        {children}
      </div>
    </BaseCell>
  )
}

interface CtaCellProps extends React.HTMLAttributes<HTMLDivElement> {
  styles?: any
  href?: string
  onClick?: (event?: any) => void
  disabled?: boolean
  variant?: string
}

export const CtaCell: React.FC<CtaCellProps> = ({
  children,
  styles,
  href,
  onClick,
  disabled,
  variant
}) => {
  const props = {
    variant: 'primary',
    target: '_blank',
    rel: 'noopener noreferrer',
    size: 'small',
    sx: {
      background: 'linear-gradient(90deg, #924A8B 5%, #DB4D75 95%)',
      color: '#fff',
      fontSize: '16px',
      fontWeight: 300,
      ':hover': {
        opacity: 1
      },
      ...styles
    },
    onClick
  }

  return (
    <BaseCell
      sx={{
        flex: 0,
        flexBasis: 'auto',
        margin: 'auto',
        marginLeft: variant === 'eligibility' ? 0 : ['auto', '15px'],
        visibility: disabled && 'hidden'
      }}
    >
      {href ? (
        <ButtonLink href={href} {...props}>
          {children}
        </ButtonLink>
      ) : (
        <Button {...props}>{children}</Button>
      )}
    </BaseCell>
  )
}

interface MoreInformationBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

export const MoreInformationBlock: React.FC<MoreInformationBlockProps> = ({
  title,
  children
}) => {
  return (
    <div
      sx={{
        background: '#fff',
        color: '#333',
        alignItems: 'center',
        fontSize: '14px',
        boxSizing: 'border-box',
        display: 'block',
        width: ['auto', '50%'],
        marginTop: 'sm',
        marginBottom: [0, 'sm'],
        marginLeft: 'sm',
        marginRight: 'sm',
        ':nth-child(even)': {
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
        <div
          sx={{
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontFamily: 'Nunito',
            color: '#29335C',
            marginBottom: '5px',
            textAlign: 'left'
          }}
        >
          {title}
        </div>

        <div sx={{ background: '#fff', overflow: 'auto' }}>{children}</div>
      </div>
    </div>
  )
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

interface MoreInformationTableProps {
  rows: any
}

export const MoreInformationTable = ({ rows }: MoreInformationTableProps) => {
  const tdSx = {
    backgroundColor: 'white',
    fontSize: '13px',
    fontFamily: 'Open Sans,Arial,sans-serif',
    padding: 'sm',
    ':first-child': {
      paddingLeft: 0
    },
    ':last-child': {
      paddingRight: 0
    }
  }
  return (
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
              sx={{
                borderBottom: '1px solid',
                borderColor: 'grey-20',
                ':last-child': {
                  borderBottom: '0px'
                }
              }}
              key={i}
            >
              {row.map((cell: any, j) => {
                return cell.type === 'th' ? (
                  <th key={j} colSpan={cell.colspan} sx={{ ...tdSx }}>
                    {cell.value}
                  </th>
                ) : (
                  <td colSpan={cell.colspan} sx={{ ...tdSx }} key={j}>
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
}

interface MoreInformationTextProps {
  content: string
}

export const MoreInformationText = ({ content }: MoreInformationTextProps) => {
  return (
    <React.Fragment>
      {content.map((chunk: string, i: number) => {
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
                    sx={{
                      fontSize: 'xs',
                      my: 'xxs',
                      mx: '0'
                    }}
                    dangerouslySetInnerHTML={{ __html: line }}
                  ></p>
                )
              })}
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}

interface MoreInformationListRow {
  label?: string
  value: string | boolean | number
}

interface MoreInformationListProps {
  rows: MoreInformationListRow[]
}

export const MoreInformationList: React.FC<MoreInformationListProps> = ({
  rows
}) => {
  const tdSx = {
    backgroundColor: 'white',
    fontSize: '13px',
    fontFamily: 'Open Sans,Arial,sans-serif',
    px: 0,
    py: 'xs'
  }

  const trSx = {
    borderBottom: '1px solid',
    borderBottomColor: 'grey-20',
    ':last-child': {
      borderBottom: 0
    }
  }

  return (
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
          if (!label) {
            return (
              <tr key={i} sx={trSx}>
                <td sx={{ ...tdSx }} colSpan={2}>
                  {format(value)}
                </td>
              </tr>
            )
          }

          return (
            <tr key={i} sx={trSx}>
              <td sx={{ ...tdSx, fontWeight: 600, paddingRight: 'xs' }}>
                {label}
              </td>
              <td sx={{ ...tdSx, paddingLeft: 'xs', textAlign: 'right' }}>
                {format(value)}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

interface EligibilityProps extends React.HTMLAttributes<HTMLDivElement> {
  moreInformationPanel: React.ReactNode[]
  moreInformationButton?: React.ReactNode
}

const Eligibility: React.FC<EligibilityProps> = ({
  moreInformationPanel,
  moreInformationButton
}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div sx={{ background: '#f2f3f4' }}>
      <div
        sx={{
          display: 'block',
          margin: 'auto',
          height: open ? 'auto' : '0px',
          transition: 'height .4s ease-in-out',
          overflow: 'hidden'
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
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
          borderBottom: ['1px dashed #b1b1b1', 'none'],
          width: '100%',
          margin: 'auto',
          padding: '8px',
          lineHeight: '1.618em',
          color: '#34454E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '13px',
          boxSizing: 'border-box',
          outline: 'none'
        }}
        onClick={() => setOpen(!open)}
      >
        <div sx={{ pr: '15px' }}>More information</div>
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

interface LegacyProductTableProps extends React.HTMLAttributes<HTMLDivElement> {
  info: string[]
  title: string
  representativeExample?: string
  moreInformationPanel?: React.ReactNode[]
  clickableRow?: string
  moreInformationButton?: React.ReactNode
  onRowClick?: () => void
  disabled?: boolean
  badges?: string[]
}

const LegacyProductTable: React.FC<LegacyProductTableProps> = ({
  children,
  info,
  title,
  representativeExample,
  moreInformationPanel,
  clickableRow,
  moreInformationButton,
  onRowClick,
  disabled,
  badges = [],
  ...props
}) => {
  const badge = badges[0]

  return (
    <article
      sx={{
        border: [
          badge ? '2px solid #34454E' : 'none',
          `2px solid ${badge ? '#34454E' : '#DADADB'}`
        ],
        marginBottom: '24px',
        marginTop: badge ? '8px' : 0,
        background: '#fff',
        position: 'relative',
        ':first-of-type': {
          marginTop: '10px'
        },
        opacity: disabled ? '0.4' : 1
      }}
      {...props}
    >
      <RowWrapper
        link={clickableRow}
        onRowClick={onRowClick}
        disabled={disabled}
      >
        {badge && <Badge text={badge} />}

        <header>
          <Styled.h5
            sx={{
              color: '#069',
              pl: ['15px', '160px'],
              pr: ['15px', 0],
              py: '15px',
              mb: 0,
              mt: badge ? ['30px', '15px'] : 0,
              fontSize: '18px',
              fontFamily: 'Varela Round,Arial,sans-serif'
            }}
          >
            {title}
          </Styled.h5>
        </header>

        <div
          sx={{
            display: ['initial', 'flex'],
            width: '100%',
            paddingX: ['0', '15px'],
            boxSizing: 'border-box'
          }}
        >
          {children}
        </div>

        {info.length > 0 && (
          <AdditionalInfo>
            {info.map((item, key) => {
              return <div key={key}>{item}</div>
            })}
          </AdditionalInfo>
        )}

        {representativeExample && (
          <RepresentativeExample text={representativeExample} />
        )}
      </RowWrapper>

      {moreInformationPanel && moreInformationPanel.length > 0 && !disabled && (
        <Eligibility
          moreInformationPanel={moreInformationPanel}
          moreInformationButton={moreInformationButton}
        />
      )}
    </article>
  )
}

export default LegacyProductTable
