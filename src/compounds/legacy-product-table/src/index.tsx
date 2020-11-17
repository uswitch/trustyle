/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Button } from '@uswitch/trustyle.button'

const AdditionalInfo: React.FC<React.HTMLAttributes<any>> = ({ children }) => {
  return (
    <div
      sx={{
        margin: '15px 0',
        paddingLeft: [0, '145px']
      }}
    >
      {children}
    </div>
  )
}

const RepresentativeExample: React.FC<React.HTMLAttributes<any>> = ({
  children
}) => {
  return (
    <footer
      sx={{
        marginTop: '5px',
        padding: '5px 20px 10px',
        backgroundColor: '#f7f7f7',
        fontSize: '14px',
        fontWeight: 600,
        color: '#924a8b',
        textlign: 'center',
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
          mb: 0
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
}

export const DataCell: React.FC<DataCellProps> = ({
  children,
  backgroundColor,
  borderBottomColor
}) => {
  return (
    <BaseCell
      sx={{
        borderWidth: '0 0 5px',
        borderStyle: 'solid',
        backgroundColor,
        borderBottomColor,
        margin: '2px',
        '> strong': {
          background: 'none'
        }
      }}
    >
      {children}
    </BaseCell>
  )
}

export const CtaCell: React.FC<React.HTMLAttributes<any>> = ({ children }) => {
  return (
    <BaseCell
      sx={{
        flex: 0,
        flexBasis: 'auto',
        margin: 'auto'
      }}
    >
      <Button variant="primary">{children}</Button>
    </BaseCell>
  )
}

const Eligibility: React.FC<React.HTMLAttributes<any>> = ({ children }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div sx={{ display: ['block', 'none'] }}>
      <button onClick={() => setOpen(!open)}>More information</button>
      {open && <div>{children}</div>}
    </div>
  )
}

const LegacyProductTable: React.FC<React.HTMLAttributes<any>> = ({
  children
}) => {
  return (
    <article
      sx={{
        border: '1px solid #dadadb',
        marginBottom: '60px',
        background: '#fff'
      }}
    >
      <a href="#" sx={{ textDecoration: 'none' }}>
        <Header>Lowest representative APR</Header>

        <div
          sx={{
            display: ['initial', 'flex'],
            width: '100%',
            padding: '0 15px 10px',
            boxSizing: 'border-box'
          }}
        >
          {children}
        </div>

        <AdditionalInfo>
          Both applicant and guarantor must be homeowners.
          <br />
          You must be a homeowner to apply for this loan.
        </AdditionalInfo>

        <RepresentativeExample>
          Representative Example: The representative rate is 29% APR (fixed) so
          if you borrow £4,000 over 3 years at a rate of 17% p.a. (fixed) plus a
          service fee of 8.74% p.a. you will repay £160.61 per month & £5,781.96
          in total.
        </RepresentativeExample>
      </a>

      <Eligibility>hello</Eligibility>
    </article>
  )
}

export default LegacyProductTable
