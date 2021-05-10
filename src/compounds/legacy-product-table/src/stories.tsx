/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import LegacyProductTable, {
  CtaCell,
  DataCell,
  ImageCell,
  MoreInformationBlock,
  MoreInformationButton,
  MoreInformationList,
  MoreInformationTable,
  MoreInformationText
} from '.'

export default {
  title: 'Compounds/Legacy Product Table'
}

const representativeExample = `The representative rate is 29% APR (fixed) so
if you borrow £4,000 over 3 years at a rate of 17% p.a. (fixed) plus a service
fee of 8.74% p.a. you will repay £160.61 per month & £5,781.96 in total.`

const info = [
  'Both applicant and guarantor must be homeowners.',
  'You must be a homeowner to apply for this loan.'
]
const title = 'Lowest representative APR'

const moreInfoLabel = 'Custom More Info Label'

const clickableRow = 'https://www.money.co.uk'

const baseTableContents = [
  <DataCell
    backgroundColor="#fef6ed"
    borderBottomColor="#fcdbb7"
    label="Loan amount"
    key="0"
  >
    £1,000 to £10,000
  </DataCell>,
  <DataCell
    backgroundColor="#fef1ec"
    borderBottomColor="#fac9b0"
    label="Representative APR"
    key="1"
  >
    29% APR (£1,000 to £10,000)
  </DataCell>,
  <DataCell
    backgroundColor="#fbedf1"
    borderBottomColor="#f0b9c8"
    label="Loan term"
    key="2"
  >
    1 year to 5 years
  </DataCell>,
  <ImageCell key="3">
    <img src="https://placekitten.com/42/75?image=9" alt="Salman" />
  </ImageCell>
]

const productTableContents = [
  ...baseTableContents,
  <CtaCell key="4" href={clickableRow}>
    See Deal
  </CtaCell>
]

const productTableContentsDisabled = [
  ...baseTableContents,
  <CtaCell key="4" href={clickableRow} disabled>
    See Deal
  </CtaCell>
]

const eligibilityContent = (
  <MoreInformationBlock title="Eligibility">
    <MoreInformationList
      rows={[
        {
          value:
            'You must meet the following criteria in order to get this loan:'
        },
        {
          label: 'UK Resident',
          value: true
        },
        {
          label: 'Guarantor Required',
          value: true
        },
        {
          label: 'Minimum age',
          value: 18
        },
        {
          label: 'Maximum age',
          value: 70
        },
        {
          label: 'Credit Rating Accepted',
          value: 'Good'
        }
      ]}
    />
  </MoreInformationBlock>
)

const ratesContent = (
  <MoreInformationBlock title="Rate tiers">
    <MoreInformationTable
      rows={[
        [
          {
            type: 'th',
            value: ''
          },
          {
            type: 'th',
            value: 'Gross rate'
          },
          {
            type: 'th',
            value: 'Gross rate'
          },
          {
            type: 'th',
            value: 'AER'
          },
          {
            type: 'th',
            value: 'AER'
          }
        ],
        [
          {
            type: 'td',
            value: ''
          },
          {
            type: 'td',
            value: 'Excluding bonus'
          },
          {
            type: 'td',
            value: 'Including bonus'
          },
          {
            type: 'td',
            value: 'Excluding bonus'
          },
          {
            type: 'td',
            value: 'Including bonus'
          }
        ],
        [
          {
            type: 'td',
            value: '£1'
          },
          {
            type: 'td',
            value: '0.20%'
          },
          {
            type: 'td',
            value: '0.20%'
          },
          {
            type: 'td',
            value: '0.20%'
          },
          {
            type: 'td',
            value: '0.20%'
          }
        ],
        [
          {
            type: 'td',
            value: '£1,000'
          },
          {
            type: 'td',
            value: '0.65%'
          },
          {
            type: 'td',
            value: '0.65%'
          },
          {
            type: 'td',
            value: '0.65%'
          },
          {
            type: 'td',
            value: '0.65%'
          }
        ],
        [
          {
            type: 'td',
            value: '£10,000'
          },
          {
            type: 'td',
            value: '0.95%'
          },
          {
            type: 'td',
            value: '0.95%'
          },
          {
            type: 'td',
            value: '0.95%'
          },
          {
            type: 'td',
            value: '0.95%'
          }
        ],
        [
          {
            type: 'td',
            value: '£50,000'
          },
          {
            type: 'td',
            value: '1.00%'
          },
          {
            type: 'td',
            value: '1.00%'
          },
          {
            type: 'td',
            value: '1.00%'
          },
          {
            type: 'td',
            value: '1.00%'
          }
        ]
      ]}
    />
  </MoreInformationBlock>
)

const feesContent = (
  <MoreInformationBlock title="Fees">
    <MoreInformationList
      rows={[
        { label: 'Application fee', value: 'No fee' },
        { label: 'Arrangement fee', value: 'No fee' },
        { label: 'Booking fee', value: 'No fee' },
        {
          label: 'Completion fee',
          value: '£1495 with an option to add to the loan'
        },
        { label: 'Product fee', value: 'No fee' }
      ]}
    />
  </MoreInformationBlock>
)

const additionalInformationContent = (
  <MoreInformationBlock title="Additional information">
    <MoreInformationText
      content={[
        '<b>Early repayment charge</b><br/>If you pay all or part of your mortgage early you will be charged: <br/>- 2.00% of amount paid, before 30 Jun 2022<br/>- then 1.00% of amount paid, until 30 Jun 2023<p>Other fees may apply.</p>'
      ]}
    />
  </MoreInformationBlock>
)

const moreInformationButtonClick = () => {
  console.log('More information clicked')
}

const moreInformationButton = (
  <MoreInformationButton
    onClick={moreInformationButtonClick}
    href={clickableRow}
  >
    See Deal
  </MoreInformationButton>
)

export const BadgeExample = () => {
  return (
    <LegacyProductTable
      representativeExample={representativeExample}
      info={info}
      title={title}
      clickableRow={clickableRow}
      moreInformationButton={moreInformationButton}
      badges={[
        'Fairer Finance Gold Customer Experience Ribbon Winner Autumn 2020',
        'Fab!'
      ]}
    >
      {productTableContents}
    </LegacyProductTable>
  )
}

export const EligibilityExample = () => {
  return (
    <LegacyProductTable
      representativeExample={representativeExample}
      info={info}
      title={title}
      clickableRow={clickableRow}
      moreInformationPanel={[eligibilityContent, ratesContent]}
      moreInformationButton={moreInformationButton}
      moreInformationLabel={moreInfoLabel}
    >
      {productTableContents}
    </LegacyProductTable>
  )
}

EligibilityExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const SingleMoreInformationExample = () => {
  return (
    <LegacyProductTable
      representativeExample={representativeExample}
      info={info}
      title={title}
      clickableRow={clickableRow}
      moreInformationPanel={[eligibilityContent]}
      moreInformationButton={moreInformationButton}
    >
      {productTableContents}
    </LegacyProductTable>
  )
}

SingleMoreInformationExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const FeesExample = () => {
  return (
    <LegacyProductTable
      info={info}
      title={title}
      clickableRow={clickableRow}
      moreInformationPanel={[feesContent, additionalInformationContent]}
      moreInformationButton={moreInformationButton}
    >
      {productTableContents}
    </LegacyProductTable>
  )
}

FeesExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const DisabledExample = () => {
  return (
    <LegacyProductTable
      representativeExample={representativeExample}
      info={info}
      title={title}
      moreInformationPanel={[eligibilityContent, ratesContent]}
      moreInformationButton={moreInformationButton}
      clickableRow={clickableRow}
      disabled
    >
      {productTableContentsDisabled}
    </LegacyProductTable>
  )
}

DisabledExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const TelephoneExample = () => {
  const phoneNumber = {
    phoneNumber: '0808 296 6568',
    logoUrl: 'https://placekitten.com/200/200?image=9',
    logoDescription: 'kitten',
    url: 'https://www.money.co.uk/',
    termsAndConditions:
      'Your calls may be recorded for monitoring purposes. You must be a UK resident aged 18+. Terms & Conditions apply. Please see our General Lending Criteria.',
    complianceText: [
      'An early repayment charge applies during any fixed or discount rate period.',
      'Your home may be repossessed if you do not keep up repayments on your mortgage.'
    ],
    openingTimes: [
      'Lines are open:',
      'Monday to Saturday: 8am-8pm',
      'Sunday: 9am-8pm'
    ]
  }

  return (
    <LegacyProductTable
      representativeExample={representativeExample}
      info={info}
      title={title}
      moreInformationPanel={[eligibilityContent, ratesContent]}
      clickableRow={clickableRow}
      phoneNumber={phoneNumber}
    >
      {productTableContents}
    </LegacyProductTable>
  )
}

TelephoneExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <BadgeExample />
      <DisabledExample />
      <EligibilityExample />
      <TelephoneExample />
    </AllThemes>
  )
}
