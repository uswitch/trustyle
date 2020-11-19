/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Button } from '@uswitch/trustyle.button'
import { Icon } from '@uswitch/trustyle.icon'

const AdditionalInfo: React.FC<React.HTMLAttributes<any>> = ({ children }) => {
  return (
    <div
      sx={{
        margin: '15px 0',
        paddingLeft: [0, '160px'],
        fontSize: '12px',
        color: '#858f94'
      }}
    >
      {children}
    </div>
  )
}

const Footer: React.FC<React.HTMLAttributes<any>> = ({ children }) => {
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
          maxWidth: '130px'
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
  label?: string
}

export const DataCell: React.FC<DataCellProps> = ({
  children,
  backgroundColor,
  borderBottomColor,
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
        margin: ['2px 0', '2px'],
        '> strong': {
          background: 'none'
        },
        fontFamily: 'Varela Round,Arial,sans-serif',
        color: '#191919'
      }}
    >
      <strong
        sx={{
          fontFamily: 'Open Sans,Arial,sans-serif',
          fontSize: '11px',
          display: 'flex',
          justifyContent: 'center',
          padding: '5px 5px 0px',
          color: borderBottomColor
        }}
      >
        {label}
      </strong>
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
}

export const CtaCell: React.FC<CtaCellProps> = ({ children, styles }) => {
  return (
    <BaseCell
      sx={{
        flex: 0,
        flexBasis: 'auto',
        margin: 'auto',
        marginLeft: ['auto', '15px']
      }}
    >
      <Button
        variant="primary"
        size="small"
        sx={{
          background: 'linear-gradient(90deg, #924A8B 5%, #DB4D75 95%)',
          color: '#fff',
          fontSize: '16px',
          fontWeight: 400,
          ...styles
        }}
      >
        {children}
      </Button>
    </BaseCell>
  )
}

const MobileEligibility: React.FC<React.HTMLAttributes<any>> = ({
  children,
  className
}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className={className}>
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
        <div sx={{ padding: '15px 20px 20px' }}>
          <div
            sx={{
              fontSize: '14px',
              color: '#858f94',
              marginBottom: '5px'
            }}
          >
            Eligibility
          </div>

          <div
            sx={{
              background: '#fff'
            }}
          >
            {children}
          </div>
        </div>

        <CtaCell
          styles={{
            width: '-webkit-fill-available',
            fontSize: '14px',
            mx: '20px',
            padding: '.9em 1.85em'
          }}
        >
          See Deal
        </CtaCell>
      </div>

      <button
        sx={{
          background: '#f2f3f4',
          border: 'none',
          borderBottom: '1px dashed #b1b1b1',
          width: '100%',
          margin: 'auto',
          padding: '8px',
          lineHeight: '1.618em',
          color: '#34454E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '13px',
          boxSizing: 'border-box'
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

interface DesktopEligibilityProps extends React.HTMLAttributes<HTMLDivElement> {
  hover: boolean
}

const DesktopEligibility: React.FC<DesktopEligibilityProps> = ({
  children,
  hover
}) => {
  return (
    <div
      sx={{
        display: ['none', hover ? 'block' : 'none'],
        position: 'absolute',
        top: '100%',
        width: '400px',
        left: '50%',
        marginLeft: '-200px',
        marginTop: '10px',
        border: '1px solid #000',
        padding: '5px',
        zIndex: 1,
        backgroundColor: 'white',
        '::before': {
          bottom: '100%',
          left: '50%',
          border: 'solid transparent',
          content: '""',
          height: '0',
          width: '0',
          position: 'absolute',
          pointerEvents: 'none',
          borderColor: 'rgba(255, 255, 255, 0)',
          borderBottomColor: '#fff',
          borderWidth: '10px',
          marginLeft: '-10px',
          zIndex: 1
        },
        '::after': {
          bottom: '100%',
          left: '50%',
          border: 'solid transparent',
          content: '""',
          height: '0',
          width: '0',
          position: 'absolute',
          pointerEvents: 'none',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderBottomColor: '#000',
          borderWidth: '11px',
          marginLeft: '-11px'
        }
      }}
    >
      <div
        sx={{
          color: '#924a8b',
          fontSize: '18px',
          px: '5px',
          py: '5px',
          fontWeight: 400,
          fontFamily: 'Open Sans,Arial,sans-serif'
        }}
      >
        Before you continue...
      </div>
      <div
        sx={{
          color: '#333',
          fontSize: '13px',
          px: '5px',
          pb: '10px',
          fontFamily: 'Open Sans,Arial,sans-serif'
        }}
      >
        Please make sure you meet the following criteria:
      </div>
      <div
        sx={{
          padding: '5px',
          '>:nth-child(odd)': {
            background: '#f2f3f4'
          }
        }}
      >
        {children}
      </div>
    </div>
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
      return <Icon glyph="tick" color={'#6bab51'} size={18} />
    }

    return value
  }

  return (
    <div
      key={key}
      sx={{
        fontSize: '13px',
        display: 'flex',
        width: '100%'
      }}
    >
      <label
        sx={{
          width: ['40%', '75%'],
          borderBottom: ['2px solid #f7f7f7', 'none'],
          borderRight: ['1px solid #f7f7f7', 'none'],
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
          borderBottom: ['2px solid #f7f7f7', 'none'],
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
  hover: boolean
  eligibilityContent: React.ReactNode[]
}

const Eligibility: React.FC<EligibilityProps> = ({
  hover,
  eligibilityContent
}) => {
  return (
    <div>
      <MobileEligibility sx={{ display: ['block', 'none'] }}>
        {eligibilityContent.map(item => {
          return item
        })}
      </MobileEligibility>
      <DesktopEligibility sx={{ display: ['none', 'block'] }} hover={hover}>
        {eligibilityContent.map(item => {
          return item
        })}
      </DesktopEligibility>
    </div>
  )
}
interface LegacyProductTableProps extends React.HTMLAttributes<HTMLDivElement> {
  representativeExample: string
  info: string[]
  title: string
  eligibilityContent: React.ReactNode[]
}

const LegacyProductTable: React.FC<LegacyProductTableProps> = ({
  children,
  representativeExample,
  info,
  title,
  eligibilityContent
}) => {
  const [hover, setHover] = React.useState(false)

  return (
    <article
      sx={{
        border: ['none', '1px solid #dadadb'],
        marginBottom: '24px',
        background: '#fff',
        position: 'relative'
      }}
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
    >
      <a
        href="#"
        sx={{
          textDecoration: 'none',
          ':hover:not(:disabled)': {
            button: {
              background: '#db4d75'
            },
            header: {
              textDecoration: 'underline',
              textDecorationColor: '#069'
            }
          }
        }}
      >
        <Header>{title}</Header>

        <div
          sx={{
            display: ['initial', 'flex'],
            width: '100%',
            padding: ['0', '0 15px 10px'],
            boxSizing: 'border-box'
          }}
        >
          {children}
        </div>

        <AdditionalInfo>
          {info.map((item, key) => {
            return <div key={key}>{item}</div>
          })}
        </AdditionalInfo>

        <Footer>{representativeExample}</Footer>
      </a>

      <Eligibility hover={hover} eligibilityContent={eligibilityContent} />
    </article>
  )
}

export default LegacyProductTable
