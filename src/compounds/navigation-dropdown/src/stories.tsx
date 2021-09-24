/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'
import Billboard from '../../billboard/src'
import Breadcrumbs from '../../../elements/breadcrumbs/src'

import NavigationDropdown from '.'

export default {
  title: 'Compounds/NavigationDropdown'
}

const navigationList = (
  <ul>
    <li>
      <a href="#0">Please select</a>
    </li>
    <li>
      <a href="https://www.uswitch.com/mortgages/remortgaging/">Remortgaging</a>
    </li>
    <li>
      <a href="https://www.uswitch.com/mortgages/buy-to-let/">Buy to let</a>
    </li>
    <li>
      <a href="https://www.uswitch.com/mortgages/first-time-buyer/">
        First time buyer
      </a>
    </li>
    <li>
      <a href="https://www.uswitch.com/mortgages/moving-home/">Moving home</a>
    </li>
  </ul>
)

const navigationDropdown = (
  <NavigationDropdown
    title="Why are you looking for a mortgage?"
    pathName="Moving home"
  >
    {navigationList}
  </NavigationDropdown>
)

const crumbs = [
  {
    fields: {
      path: '/',
      displayText: 'Home'
    }
  },
  {
    fields: {
      path: '/gas-electricity/',
      displayText: 'Gas & Electricity'
    }
  },
  {
    fields: {
      path: '/gas-electricity/guides',
      displayText: 'Guides'
    }
  }
]

const breadcrumbs = (
  <Breadcrumbs
    crumbs={crumbs}
    title="Understanding energy bills and electricity bills"
  />
)

const primaryContent = (
  <div>
    <h3>Compare 10 year fixed rate mortgages</h3>
    <p>
      You could find a low fixed rate mortgage deal that offers you peace of
      mind by fixing your repayments for 10 years.
    </p>
  </div>
)

export const ExampleWithKnobs = () => {
  return (
    <Billboard
      breadcrumbs={breadcrumbs}
      primaryContent={primaryContent}
      primarySlot={navigationDropdown}
    />
  )
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <ExampleWithKnobs />
    </AllThemes>
  )
}
