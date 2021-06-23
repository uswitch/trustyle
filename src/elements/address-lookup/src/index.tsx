/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import {
  Button,
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  Input,
  Select
} from '@uswitch/spark'

interface Props {
  buttonText?: string
  placeholder?: string
  onSelect: (address: string) => void
  lookup: (postcode: string, setAddresses: any) => void
}

const AddressLookup: React.FC<Props> = ({
  buttonText = 'Find address',
  placeholder = 'Please select your address',
  onSelect,
  lookup
}) => {
  const [postcode, setPostcode] = React.useState('')
  const [addresses, setAddresses] = React.useState([])

  return (
    <div sx={{ variant: 'elements.address-lookup.container' }}>
      <div sx={{ variant: 'elements.address-lookup.postcode-row' }}>
        <Input
          onChangeHandler={(e: any) => setPostcode(e.currentTarget.value)}
        />
        <Button
          onClick={() => lookup(postcode, setAddresses)}
          variant={'primary'}
        >
          {buttonText}
        </Button>
      </div>

      {addresses.length > 0 && (
        <Dropdown>
          <DropdownButton
            as={Select}
            placeholder={placeholder}
            onSelect={onSelect}
          />
          <DropdownMenu>
            {addresses.map((address: any, key: number) => {
              const line = address.summaryline

              return (
                <DropdownItem value={line} key={key}>
                  {line}
                </DropdownItem>
              )
            })}
          </DropdownMenu>
        </Dropdown>
      )}
    </div>
  )
}

export default AddressLookup
