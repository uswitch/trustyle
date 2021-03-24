/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import LegacyProductTable, {
  CtaCell,
  DataCell,
  ImageCell,
  MoreInformationBlock,
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

const clickableRow = 'https://www.money.co.uk'

const productTableContents = [
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
  </ImageCell>,
  <CtaCell key="4" href={clickableRow} disabled>
    See Deal
  </CtaCell>
]

const eligibilityContent = (
  <MoreInformationBlock title="Eligibility">
    <MoreInformationTable
      boldFirstColumn
      backgroundColor="white"
      rows={[
        ['You must meet the following criteria in order to get this loan'],
        ['UK resident', 'Yes'],
        ['Guarantor Required', 'Yes'],
        ['Minimum age', '18 years'],
        ['Credit Rating Accepted', 'poor']
      ]}
    />
  </MoreInformationBlock>
)

const ratesContent = (
  <MoreInformationBlock title="Rate tiers">
    <MoreInformationTable
      backgroundColor="white"
      header={['', 'Gross rate', 'Gross rate', 'AER', 'AER']}
      rows={[
        [
          '',
          'Excluding bonus',
          'Including bonus',
          'Excluding bonus',
          'Including bonus'
        ],
        ['£1', '0.20%', '0.20%', '0.20%', '0.20%'],
        ['£1000', '0.20%', '0.20%', '0.20%', '0.20%'],
        ['£10,000', '0.20%', '0.20%', '0.20%', '0.20%'],
        ['£50,000', '0.20%', '0.20%', '0.20%', '0.20%']
      ]}
    />
  </MoreInformationBlock>
)

const feesContent = (
  <MoreInformationBlock title="Fees">
    <MoreInformationTable
      boldFirstColumn
      backgroundColor="white"
      rows={[
        ['Application fee', 'No fee'],
        ['Arrangement fee', 'No fee'],
        ['Booking fee', 'No fee'],
        ['Completion fee', '£1495 with an option to add to the loan'],
        ['Product fee', 'No fee']
      ]}
    />
  </MoreInformationBlock>
)

const additionalInformationContent = (
  <MoreInformationBlock title="Additional information">
    <MoreInformationText
      content={[
        'Early repayment charge',
        'If you pay all of your mortgage early you will be charged:',
        '- 3% of the original loan, in the first year',
        '- 2% of the original loan, in the second year',
        ' ',
        'Other fees may apply.'
      ]}
    />
  </MoreInformationBlock>
)

const moreInformationButtonClick = () => {
  console.log('More information clicked')
}

export const BadgeExample = () => {
  return (
    <LegacyProductTable
      representativeExample={representativeExample}
      info={info}
      title={title}
      clickableRow={clickableRow}
      moreInformationButtonClick={moreInformationButtonClick}
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
      moreInformationButtonClick={moreInformationButtonClick}
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
      moreInformationButtonClick={moreInformationButtonClick}
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
      moreInformationButtonClick={moreInformationButtonClick}
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
      clickableRow={clickableRow}
      disabled
    >
      {productTableContents}
    </LegacyProductTable>
  )
}

DisabledExample.story = {
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
    </AllThemes>
  )
}
