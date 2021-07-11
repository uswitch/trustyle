/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { Input } from '@uswitch/trustyle.input'
import { Button } from '@uswitch/trustyle.button'
import { DropDown } from '@uswitch/trustyle.drop-down'

interface Props {
  buttonText?: string
  onSelect: (address: string) => void
  lookup: (postcode: string, setAddresses: any) => void
}

export interface Address {
  summaryline: string
  organisation: string
  number: string
  premise: string
  street: string
  posttown: string
  county: string
  postcode: string
}

export const AddressLookup: React.FC<Props> = ({
  buttonText = 'Find address',
  onSelect,
  lookup
}) => {
  const [postcode, setPostcode] = React.useState('')
  const [addresses, setAddresses] = React.useState<Address[]>([])
  const [addressIndex, setAddressIndex] = React.useState<number|null>(null)

  const handleAddressSelect = (i: string) => {
    if (i === '') {
      setAddressIndex(null)
      onSelect('')
    }

    const n = parseInt(i)

    setAddressIndex(n)
    const address = addresses[n]
    if (address) {
      onSelect(address.summaryline)
    }
  }

  return (
    <div sx={{ variant: 'elements.address-lookup.container'}}>
      <div sx={{ variant: 'elements.address-lookup.postcode-row' }}>
        <Input
          name={'postcode'}
          onChange={(e: any) => setPostcode(e.currentTarget.value)}
        />
        <Button
          onClick={() => lookup(postcode, setAddresses)}
          variant={'primary'}
        >
          {buttonText}
        </Button>
      </div>

      {addresses.length > 0 && (
        <DropDown
          name={'addresslist'}
          options={
            [
              { text: 'Please select your address', value: '' },
              { text: 'My address isn\'t listed', value: '-1' },
              ...addresses.map((address: Address, i: number) => {
                return { text: address.summaryline, value: i.toString() }
              })
            ]
          }
          onChange={handleAddressSelect}
          onBlur={() => {}}
          value={null}
        />
      )}
    </div>
  )
}
