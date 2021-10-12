/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'
import { ButtonLink } from '../../../elements/button-link/src'

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

const infoTextWithList = (
  <MoreInformationText
    content={[
      '<ul><li>Earn 0.25% cashback on the first £4,000 of purchases per calendar year. Earn 0.5% cashback on further purchases once you have made over £4,000 of purchases per calendar year</li><li>There is no limit to the amount of cashback you can earn in a year</li><li>Cashback will be paid automatically into the credit card account every January</li><li>New Customers : £20 cashback bonus on your balance, if you make £1,000 of purchases within 90 days of the account opening</li></ul>'
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

const textContentWithBulletPoints = (
  <MoreInformationBlock title="Repayment" key="key-3">
    {infoTextWithList}
  </MoreInformationBlock>
)

const moreInformationButton = (
  <ButtonLink
    sx={{
      width: '100%',
      fontSize: '14px',
      marginBottom: 0
    }}
    variant="primary"
    href={clickableRow}
    target="_blank"
    onClick={moreInformationButtonClick}
  >
    See Deal
  </ButtonLink>
)

const eligibility = (
  <Eligibility
    moreInformationPanel={[eligibilityContent, ratesContent]}
    moreInformationLabel={moreInfoLabel}
    moreInformationButton={moreInformationButton}
  />
)

const eligibilityWithText = (
  <Eligibility
    moreInformationPanel={[eligibilityContent, textContent]}
    moreInformationLabel={moreInfoLabel}
    moreInformationButton={moreInformationButton}
  />
)

const eligibilityWithBulletPoints = (
  <Eligibility
    moreInformationPanel={[textContentWithBulletPoints, textContent]}
    moreInformationLabel={moreInfoLabel}
  />
)

export const ExampleWithEligibility = () => (
  <React.Fragment>{eligibility}</React.Fragment>
)

export const ExampleWithText = () => (
  <React.Fragment>{eligibilityWithText}</React.Fragment>
)

ExampleWithText.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const ExampleWithBulletPoints = () => (
  <React.Fragment>{eligibilityWithBulletPoints}</React.Fragment>
)

ExampleWithBulletPoints.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <ExampleWithEligibility />
      <ExampleWithText />
      <ExampleWithBulletPoints />
    </AllThemes>
  )
}
