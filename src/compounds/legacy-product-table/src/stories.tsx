/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import LegacyProductTable, { CtaCell, DataCell, ImageCell } from '.'

export default {
  title: 'Compounds/Legacy Product Table'
}

export const Example = () => {
  return (
    <LegacyProductTable>
      <DataCell
        backgroundColor="#fef6ed"
        borderBottomColor="#fcdbb7"
        label="Loan amount"
      >
        <br />
        £1,000 to £10,000
      </DataCell>

      <DataCell
        backgroundColor="#fef1ec"
        borderBottomColor="#fac9b0"
        label="Representative APR"
      >
        <br />
        29% APR (£1,000 to £10,000)
      </DataCell>

      <DataCell
        backgroundColor="#fbedf1"
        borderBottomColor="#f0b9c8"
        label="Loan term"
      >
        <br />1 year to 5 years
      </DataCell>

      <ImageCell>
        <img src="https://placekitten.com/42/75?image=9" alt="Salman" />
      </ImageCell>

      <CtaCell>See Deal</CtaCell>
    </LegacyProductTable>
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
