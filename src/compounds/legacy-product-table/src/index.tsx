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
        paddingLeft: [0, '145px'],
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

const Header: React.FC<React.HTMLAttributes<any>> = ({ children }) => {
  return (
    <header>
      <Styled.h5
        sx={{
          color: '#069',
          pl: ['15px', '145px'],
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
    padding: '5px 0 10px',
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
        maxWidth: 130,
        margin: 'auto'
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
          color: borderBottomColor
        }}
      >
        {label}
      </strong>

      {children}
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
        marginLeft: '15px'
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
          display: 'block',
          margin: 0
        }}
      >
        <div sx={{ padding: '15px 20px 10px' }}>
          <div
            sx={{
              fontSize: '14px',
              color: '#858f94',
              marginBottom: '5px'
            }}
          >
            Eligibility
          </div>

          {children}
        </div>

        <CtaCell styles={{ width: '100%', fontSize: '14px' }}>See Deal</CtaCell>
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
      {children}
    </div>
  )
}

interface EligibilityContentRowProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  value?: string
}

const EligibilityContentRow: React.FC<EligibilityContentRowProps> = ({
  label,
  value
}) => {
  return (
    <div
      sx={{
        fontSize: '13px',
        display: 'flex',
        width: '100%'
      }}
    >
      <label
        sx={{
          width: '40%',
          borderBottom: '2px solid #f7f7f7',
          borderRight: '1px solid #f7f7f7',
          background: '#fff',
          fontFamily: 'Open Sans,Arial,sans-serif',
          fontSize: '13px',
          color: '#333',
          display: 'block'
        }}
      >
        {label}
      </label>
      <div
        sx={{
          width: '60%',
          borderBottom: '2px solid #f7f7f7',
          color: '#924a8b',
          fontWeight: 600,
          background: '#fff'
        }}
      >
        {value}
      </div>
    </div>
  )
}

interface EligibilityProps extends React.HTMLAttributes<HTMLDivElement> {
  hover: boolean
}

const Eligibility: React.FC<EligibilityProps> = ({ children, hover }) => {
  return (
    <div>
      <MobileEligibility sx={{ display: ['block', 'none'] }}>
        {children}
      </MobileEligibility>
      <DesktopEligibility sx={{ display: ['none', 'block'] }} hover={hover}>
        {children}
      </DesktopEligibility>
    </div>
  )
}
interface LegacyProductTableProps extends React.HTMLAttributes<HTMLDivElement> {
  representativeExample: string
  info: string[]
}

const LegacyProductTable: React.FC<LegacyProductTableProps> = ({
  children,
  representativeExample,
  info
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
        <Header>Lowest representative APR</Header>

        <div
          sx={{
            display: ['initial', 'flex'],
            width: '100%',
            padding: ['0 15px 10px', '0 15px 10px'],
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

      <Eligibility hover={hover}>
        <EligibilityContentRow label="UK resident" value="Yes" />
        <EligibilityContentRow label="Guarantor Required" value="Yes" />
        <EligibilityContentRow label="Minimum age" value="18 years" />
        <EligibilityContentRow label="Credit Rating Accepted" value="poor" />
      </Eligibility>
    </article>
  )
}

export default LegacyProductTable
