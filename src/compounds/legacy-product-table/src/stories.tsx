/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'
import Table from '../../../elements/table/src'

import LegacyProductTable, {
  CtaCell,
  DataCell,
  RepresentativeExample,
  ImageCell,
  MoreInformationBlock,
  MoreInformationRow
} from '.'


export default {
  title: 'Compounds/Legacy Product Table'
}

const repTextExample = `The representative rate is 29% APR (fixed) so
if you borrow £4,000 over 3 years at a rate of 17% p.a. (fixed) plus a service
fee of 8.74% p.a. you will repay £160.61 per month & £5,781.96 in total.`

const RepExample = <RepresentativeExample text={repTextExample} />

const info = [
  'Both applicant and guarantor must be homeowners.',
  'You must be a homeowner to apply for this loan.'
]
const title = 'Lowest representative APR'

const eligibilityContent = (
  <MoreInformationBlock title="Eligibility">
    <MoreInformationRow label="UK resident" value="Yes" key="0" />
    <MoreInformationRow label="Guarantor Required" value="Yes" key="1" />
    <MoreInformationRow label="Minimum age" value="18 years" key="2" />
    <MoreInformationRow label="Credit Rating Accepted" value="poor" key="3" />
  </MoreInformationBlock>
)

const ratesContent = (
  <MoreInformationBlock title="Rates">
    <Table.wrap>
      <Table.tr>
        <Table.th>First item</Table.th>
        <Table.th>Second item</Table.th>
        <Table.th>Third item</Table.th>
      </Table.tr>
      <Table.tr>
        <Table.td>First item</Table.td>
        <Table.td>Second item</Table.td>
        <Table.td>Third item</Table.td>
      </Table.tr>
      <Table.tr>
        <Table.td>First item</Table.td>
        <Table.td>Second item</Table.td>
        <Table.td>Third item</Table.td>
      </Table.tr>
      <Table.tr>
        <Table.td>First item</Table.td>
        <Table.td>Second item</Table.td>
        <Table.td>Third item</Table.td>
      </Table.tr>
    </Table.wrap>
  </MoreInformationBlock>
)

const moreInformationButtonClick = () => { console.log('More information clicked') }

export const EligibilityExample = () => {
  return (
    <LegacyProductTable
      representativeExample={RepExample}
      info={info}
      title={title}
      clickableRow={clickableRow}
      moreInformationPanel={[eligibilityContent, ratesContent]}
      moreInformationButtonClick={moreInformationButtonClick}
      badges={[
        'Fairer Finance Gold Customer Experience Ribbon Winner Autumn 2020',
        'Fab!'
      ]}
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

      <CtaCell href={''}>See Deal</CtaCell>
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

const DisabledProductTable = () => {
  return (
    <LegacyProductTable
      representativeExample={RepExample}
      info={info}
      title={title}
      eligibilityContent={eligibilityContent}
      clickableRow={clickableRow}
      disabled
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

      <CtaCell href={clickableRow} disabled>
        See Deal
      </CtaCell>
    </LegacyProductTable>
  )
}

export const DisabledExample = () => {
  return (
    <div>
      <DisabledProductTable />
    </div>
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
      <Example />
      <DisabledExample />
    </AllThemes>
  )
}
