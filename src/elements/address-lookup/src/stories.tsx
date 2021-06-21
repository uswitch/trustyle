/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import AddressLookup from './'

export default {
  title: 'Elements/AddressLookup'
}

const addresses = [
  {
    summaryline:
      'Londent Oral Care, 1 Copper Row, London, Greater London, SE1 2LH',
    organisation: 'Londent Oral Care',
    number: '1',
    premise: '1',
    street: 'Copper Row',
    posttown: 'London',
    county: 'Greater London',
    postcode: 'SE1 2LH'
  },
  {
    summaryline: 'Sopexa UK, 11-12 Copper Row, London, Greater London, SE1 2LH',
    organisation: 'Sopexa UK',
    number: '11-12',
    premise: '11-12',
    street: 'Copper Row',
    posttown: 'London',
    county: 'Greater London',
    postcode: 'SE1 2LH'
  },
  {
    summaryline: 'Uswitch Ltd, 5 Copper Row, London, Greater London, SE1 2LH',
    organisation: 'Uswitch Ltd',
    number: '5',
    premise: '5',
    street: 'Copper Row',
    posttown: 'London',
    county: 'Greater London',
    postcode: 'SE1 2LH'
  },
  {
    summaryline:
      'Zoopla Property Group, 5 Copper Row, London, Greater London, SE1 2LH',
    organisation: 'Zoopla Property Group',
    number: '5',
    premise: '5',
    street: 'Copper Row',
    posttown: 'London',
    county: 'Greater London',
    postcode: 'SE1 2LH'
  }
]

export const AddressLookupExample = () => {
  const lookup = (_postcode, setAddresses) => {
    setAddresses(addresses)
  }
  const onSelect = address => {
    alert(`You've selected: ${address}`)
  }

  return <AddressLookup onSelect={onSelect} lookup={lookup} />
}

AddressLookupExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <AddressLookupExample />
    </AllThemes>
  )
}
