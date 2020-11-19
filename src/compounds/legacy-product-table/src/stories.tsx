/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import LegacyProductTable, {
  CtaCell,
  DataCell,
  EligibilityContentRow,
  ImageCell
} from '.'

export default {
  title: 'Compounds/Legacy Product Table'
}

const repExample = `Representative Example: The representative rate is 29% APR (fixed) so
if you borrow £4,000 over 3 years at a rate of 17% p.a. (fixed) plus a
service fee of 8.74% p.a. you will repay £160.61 per month & £5,781.96
in total.`

const info = [
  'Both applicant and guarantor must be homeowners.',
  'You must be a homeowner to apply for this loan.'
]
const title = 'Lowest representative APR'

const eligibilityContent = [
  <EligibilityContentRow label="UK resident" value="Yes" key="0" />,
  <EligibilityContentRow label="Guarantor Required" value="Yes" key="1" />,
  <EligibilityContentRow label="Minimum age" value="18 years" key="2" />,
  <EligibilityContentRow label="Credit Rating Accepted" value="poor" key="3" />
]

const ExampleProductTable = () => {
  return (
    <LegacyProductTable
      representativeExample={repExample}
      info={info}
      title={title}
      eligibilityContent={eligibilityContent}
    >
      <DataCell
        backgroundColor="#fef6ed"
        borderBottomColor="#fcdbb7"
        label="Loan amount"
      >
        £1,000 to £10,000
      </DataCell>

      <DataCell
        backgroundColor="#fef1ec"
        borderBottomColor="#fac9b0"
        label="Representative APR"
      >
        29% APR (£1,000 to £10,000)
      </DataCell>

      <DataCell
        backgroundColor="#fbedf1"
        borderBottomColor="#f0b9c8"
        label="Loan term"
      >
        1 year to 5 years
      </DataCell>

      <ImageCell>
        <img src="https://placekitten.com/42/75?image=9" alt="Salman" />
      </ImageCell>

      <CtaCell>See Deal</CtaCell>
    </LegacyProductTable>
  )
}

export const Example = () => {
  return (
    <div>
      <ExampleProductTable />
      <ExampleProductTable />
      <ExampleProductTable />
      <ExampleProductTable />
      <ExampleProductTable />
      <ExampleProductTable />
      <ExampleProductTable />
    </div>
  )
}

Example.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <Example />
    </AllThemes>
  )
}
