/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { ButtonLink } from '@uswitch/trustyle.button-link'
import { Button } from '@uswitch/trustyle.button'
import { Icon } from '@uswitch/trustyle.icon'

import RowWrapper from './rowWrapper'

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

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
}

const Footer: React.FC<FooterProps> = ({ children, label }) => {
  return (
    <footer
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
      {label}
      {children}
    </footer>
  )
}

export const Header: React.FC<React.HTMLAttributes<any>> = ({ children }) => {
  return (
    <header>
      <Styled.h5
        sx={{
          color: '#069',
          pl: ['15px', '160px'],
          pr: ['15px', 0],
          py: '15px',
          mb: 0,
          fontSize: '18px',
          fontFamily: 'Varela Round,Arial,sans-serif'
        }}
      >
        {children}
      </Styled.h5>
    </header>
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

interface EligibilityContentRowProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  value?: string
  key?: string
}

export const EligibilityContentRow: React.FC<EligibilityContentRowProps> = ({
  label,
  value,
  key = ''
}) => {
  const formatValue = (value: string | boolean | undefined) => {
    if (
      value === true ||
      value === 'Yes' ||
      value === 'yes' ||
      value === 'true'
    ) {
      return <Icon glyph="check" color={'#6bab51'} size={18} />
    } else {
      return value
    }
  }
  return (
    <div
      key={key}
      sx={{
        fontSize: '13px',
        display: 'flex',
        width: '100%',
        textAlign: 'left'
      }}
    >
      <label
        sx={{
          width: ['40%', '75%'],
          borderBottom: '2px solid #f7f7f7',
          borderRight: '1px solid #f7f7f7',
          fontFamily: 'Open Sans,Arial,sans-serif',
          fontSize: '13px',
          color: '#333',
          display: 'block',
          padding: '5px 10px'
        }}
      >
        {label}
      </label>
      <div
        sx={{
          width: ['60%', '25%'],
          borderBottom: '2px solid #f7f7f7',
          color: '#924a8b',
          fontWeight: 600,
          padding: '5px 10px',
          fontSize: '13px'
        }}
      >
        {formatValue(value)}
      </div>
    </div>
  )
}

interface EligibilityProps extends React.HTMLAttributes<HTMLDivElement> {
  eligibilityContent: React.ReactNode[]
  clickableRow?: string
  onClickEligibility?: (addon?: object) => void
  eligibilityAddon?: object
}

const Eligibility: React.FC<EligibilityProps> = ({
  eligibilityContent,
  clickableRow,
  onClickEligibility,
  eligibilityAddon
}) => {
  const [open, setOpen] = React.useState(false)
  const onClick = () => {
    onClickEligibility && onClickEligibility(eligibilityAddon)
  }

  return (
    <div sx={{ background: '#f2f3f4' }}>
      <div sx={{ display: 'block', maxWidth: '420px', margin: 'auto' }}>
        <div
          sx={{
            background: '#f2f3f4',
            alignItems: 'center',
            height: open ? 'auto' : '0px',
            transition: 'height .4s ease-in-out',
            fontSize: '14px',
            overflow: 'hidden',
            boxSizing: 'border-box',
            display: 'block'
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
                fontSize: '14px',
                color: '#858f94',
                marginBottom: '5px',
                textAlign: 'left',
                fontWeight: 300
              }}
            >
              Eligibility
            </div>

            <div sx={{ background: '#fff' }}>{eligibilityContent}</div>
          </div>

          <div sx={{ padding: ['15px 20px 20px', '0 20px'] }}>
            <CtaCell
              styles={{
                width: '100%',
                fontSize: '14px'
              }}
              href={clickableRow}
              onClick={onClick}
              variant="eligibility"
            >
              See Deal
            </CtaCell>
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
    </div>
  )
}

interface LegacyProductTableProps extends React.HTMLAttributes<HTMLDivElement> {
  representativeExample: string
  repExampleLabel?: string
  info: string[]
  title: string
  eligibilityContent: React.ReactNode[]
  clickableRow?: string
  onClickEligibility?: (addon?: object) => void
  eligibilityAddon?: object
  onRowClick?: () => void
  disabled?: boolean
}

const LegacyProductTable: React.FC<LegacyProductTableProps> = ({
  children,
  representativeExample,
  repExampleLabel,
  info,
  title,
  eligibilityContent,
  clickableRow,
  onClickEligibility,
  eligibilityAddon,
  onRowClick,
  disabled,
  badges,
  ...props
}) => {
  const badge = badges[0] || ''

  return (
    <article
      sx={{
        border: [
          badge ? '2px solid #34454E' : 'none',
          `2px solid ${badge ? '#34454E' : '#DADADB'}`
        ],
        marginBottom: '24px',
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
        {!!badge && (
          <div
            sx={{
              position: 'absolute',
              top: 0,
              transform: 'translateY(-50%)',
              padding: '0 6px',
              backgroundColor: '#fff',
              marginLeft: 'sm'
            }}
          >
            <div
              sx={{
                padding: '5.5px 16px',
                backgroundColor: '#34454E',
                color: '#fff',
                borderRadius: '3px'
              }}
            >
              {badge}
            </div>
          </div>
        )}
        <Header>{title}</Header>

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

        {representativeExample.length > 0 && (
          <Footer label={repExampleLabel}>{representativeExample}</Footer>
        )}
      </RowWrapper>

      {eligibilityContent.length > 0 && !disabled && (
        <Eligibility
          eligibilityContent={eligibilityContent}
          clickableRow={clickableRow}
          onClickEligibility={onClickEligibility}
          eligibilityAddon={eligibilityAddon}
        />
      )}
    </article>
  )
}

export default LegacyProductTable
