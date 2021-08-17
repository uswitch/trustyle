/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { CtaCell } from '@uswitch/trustyle.legacy-product-table'

import AllThemes from '../../../utils/all-themes'

import {
  Eligibility,
  MoreInformationBlock,
  MoreInformationList,
  MoreInformationTable,
  MoreInformationText
} from './'

export default {
  title: 'Compounds/InformationPanel'
}

const clickableRow = 'https://www.money.co.uk'
const moreInfoLabel = 'Custom More Info Label'
const moreInformationButtonClick = () => {
  console.log('More information clicked')
}

const list = (
  <MoreInformationList
    rows={[
      {
        value: 'You must meet the following criteria in order to get this loan:'
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
)

const table = (
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
)

const infoText = (
  <MoreInformationText
    content={[
      '<b>Early repayment charge</b><br/>If you pay all or part of your mortgage early you will be charged: <br/>- 2.00% of amount paid, before 30 Jun 2022<br/>- then 1.00% of amount paid, until 30 Jun 2023<p>Other fees may apply.</p>'
    ]}
  />
)

const eligibilityContent = (
  <MoreInformationBlock title="Eligibility" key="key-1">
    {list}
  </MoreInformationBlock>
)

const ratesContent = (
  <MoreInformationBlock title="Rate tiers" key="key-2">
    {table}
  </MoreInformationBlock>
)

const textContent = (
  <MoreInformationBlock title="Repayment" key="key-3">
    {infoText}
  </MoreInformationBlock>
)

const moreInformationButton = (
  <CtaCell
    styles={{
      width: '100%',
      fontSize: '14px',
      marginBottom: 0
    }}
    onClick={moreInformationButtonClick}
    href={clickableRow}
    variant="eligibility"
  >
    See Deal
  </CtaCell>
)

const eligibity = (
  <Eligibility
    moreInformationPanel={[eligibilityContent, ratesContent]}
    moreInformationLabel={moreInfoLabel}
    moreInformationButton={moreInformationButton}
  />
)

const eligibityWithText = (
  <Eligibility
    moreInformationPanel={[eligibilityContent, textContent]}
    moreInformationLabel={moreInfoLabel}
    moreInformationButton={moreInformationButton}
  />
)

export const ExampleWithEligibility = () => (
  <React.Fragment>{eligibity}</React.Fragment>
)

export const ExampleWithText = () => (
  <React.Fragment>{eligibityWithText}</React.Fragment>
)

ExampleWithText.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <ExampleWithEligibility />
      <ExampleWithText />
    </AllThemes>
  )
}
