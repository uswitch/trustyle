/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import PhoneNumberModal from './'

export default {
  title: 'Compounds/PhoneNumberModal'
}

const ExampleLogoImage = text(
  'optional additional image',
  'https://placekitten.com/200/200?image=9'
)

const ExampleLogoImageTag = text('optional additional image alt tag', 'Salman')

const ExamplePhoneNumber = text('example phone number', '0808 296 6568')

const ExampleOpeningTimes = (
  <div>
    <h5>Lines are open:</h5>
    <p>Monday to Saturday: 8am-8pm</p>
    <p>Sunday: 9am-8pm</p>
  </div>
)

const ExampleTermsAndConditions = text(
  'example terms and conditions',
  'Your calls may be recorded for monitoring purposes. You must be a UK resident aged 18+. Terms & Conditions apply. Please see our General Lending Criteria.'
)

const ExampleUrl = text('example url', 'https://www.money.co.uk/')

const ExampleComplianceText = (
  <div>
    <p>
      An early repayment charge applies during any fixed or discount rate
      period.
    </p>
    <p sx={{ fontWeight: 'bold' }}>
      Your home may be repossessed if you do not keep up repayments on your
      mortgage.
    </p>
  </div>
)

export const ExampleWithUrl = () => (
  <PhoneNumberModal
    logo={ExampleLogoImage}
    logoDescription={ExampleLogoImageTag}
    phoneNumber={ExamplePhoneNumber}
    openingTimes={ExampleOpeningTimes}
    termsAndConditions={ExampleTermsAndConditions}
    url={ExampleUrl}
    complianceText={ExampleComplianceText}
  />
)

ExampleWithUrl.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const ExampleWithoutUrl = () => (
  <PhoneNumberModal
    logo={ExampleLogoImage}
    logoDescription={ExampleLogoImageTag}
    phoneNumber={ExamplePhoneNumber}
    openingTimes={ExampleOpeningTimes}
    termsAndConditions={ExampleTermsAndConditions}
    complianceText={ExampleComplianceText}
  />
)

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
