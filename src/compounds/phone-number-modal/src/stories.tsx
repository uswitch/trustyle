/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import PhoneNumberModal from './'

export default {
  title: 'Compounds/PhoneNumberModal'
}

const exampleAriaLabel = 'An example phone number modal'

const ExamplePhoneNumberWithoutUrl = {
  phoneNumber: '0808 296 6568',
  logoUrl: 'https://placekitten.com/200/200?image=9',
  logoDescription: 'kitten',
  termsAndConditions:
    'Your calls may be recorded for monitoring purposes. You must be a UK resident aged 18+. Terms & Conditions apply. Please see our General Lending Criteria.',
  complianceText: [
    'An early repayment charge applies during any fixed or discount rate period.',
    'Your home may be repossessed if you do not keep up repayments on your mortgage.'
  ],
  openingTimes: [
    'Lines are open:',
    'Monday to Saturday: 8am-8pm',
    'Sunday: 9am-8pm'
  ]
}

const ExamplePhoneNumberWithUrl = {
  url: 'https://www.money.co.uk/',
  ...ExamplePhoneNumberWithoutUrl
}

export const ExampleWithUrl = () => {
  const [isOpen, setStateIsOpen] = useState(false)
  const openModal = () => {
    setStateIsOpen(true)
  }

  return (
    <React.Fragment>
      <button onClick={openModal}>Open Modal</button>
      <PhoneNumberModal
        phoneNumberModalInfo={ExamplePhoneNumberWithUrl}
        isOpen={isOpen}
        modalAriaLabel={exampleAriaLabel}
        setStateClosed={() => setStateIsOpen(false)}
      />
    </React.Fragment>
  )
}

ExampleWithUrl.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const ExampleWithoutUrl = () => {
  const [isOpen, setStateIsOpen] = useState(false)
  const openModal = () => {
    setStateIsOpen(true)
  }

  return (
    <React.Fragment>
      <button onClick={openModal}>Open Modal</button>
      <PhoneNumberModal
        phoneNumberModalInfo={ExamplePhoneNumberWithoutUrl}
        isOpen={isOpen}
        modalAriaLabel={exampleAriaLabel}
        setStateClosed={() => setStateIsOpen(false)}
      />
    </React.Fragment>
  )
}

ExampleWithoutUrl.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <ExampleWithUrl />
      <ExampleWithoutUrl />
    </AllThemes>
  )
}
