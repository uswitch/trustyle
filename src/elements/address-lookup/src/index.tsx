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

const AddressLookup: React.FC<Props> = ({
  buttonText = 'Find address',
  onSelect,
  lookup
}) => {
  const [postcode, setPostcode] = React.useState('')
  const [addresses, setAddresses] = React.useState([])

  return (
    <div>
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

      {addresses.length > 0 && (
        <DropDown
          name={'addresslist'}
          options={addresses.map((address: any) => address.summaryline)}
          onChange={onSelect}
          onBlur={() => {}}
          value={null}
        />
      )}
    </div>
  )
}

export default AddressLookup
