/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { action } from '@storybook/addon-actions'

import AllThemes from '../../../utils/all-themes'
import Billboard from '../../billboard/src'
import Breadcrumbs from '../../../elements/breadcrumbs/src'
import { ButtonLink } from '../../../elements/button-link'

import NavigationDropdown from '.'

export default {
  title: 'Compounds/NavigationDropdown'
}

const navConfig = {
  '/current-accounts?tracking=false': 'Please select',
  '/current-accounts/cashback/?tracking=false': 'Cashback',
  '/current-accounts/high-interest/?tracking=false': 'High Interest',
  '/current-accounts/most-popular/?tracking=false': 'Most popular',
  '/current-accounts/packaged/?tracking=false': 'Packaged',
  '/current-accounts/standard/?tracking=false': 'Standard'
}

const moneyConfig = {
  '/credit-cards.htm': 'Credit cards',
  '/credit-cards/0-money-transfer-credit-cards.htm': 'Money Transfers',
  '/credit-cards/0-purchases-credit-cards.htm': 'Purchases',
  '/credit-cards/air-miles-credit-cards.htm': 'Air miles',
  '/credit-cards/balance-transfers-credit-cards.htm': 'Balance transfers',
  '/credit-cards/business-credit-cards.htm': 'Business',
  '/credit-cards/cashback-credit-cards.htm': 'Cashback',
  '/credit-cards/credit-building-credit-cards.htm': 'Credit building',
  '/credit-cards/credit-cards-with-no-foreign-transaction-fees.htm':
    'Travel Credit Cards',
  '/credit-cards/most-popular-credit-cards.htm': 'Most popular credit cards',
  '/credit-cards/reward-credit-cards.htm': 'Rewards',
  '/credit-cards/student-credit-cards.htm': 'Student',
  '/credit-cards/guides.htm': 'Credit card guides'
}

const navContent = (
  <div>
    <ul>
      <li>
        <p>
          <a href="/credit-cards/most-popular-credit-cards.htm">
            Most popular credit cards
          </a>
        </p>
      </li>
      <li>
        <p>
          <a href="/credit-cards.htm">Credit cards</a>
        </p>
      </li>
      <li>
        <p>
          <a href="/credit-cards/balance-transfers-credit-cards.htm">
            Balance transfers
          </a>
        </p>
      </li>
      <li>
        <p>
          <a href="/credit-cards/0-purchases-credit-cards.htm">Purchases</a>
        </p>
      </li>
      <li>
        <p>
          <a href="/credit-cards/cashback-credit-cards.htm">Cashback</a>
        </p>
      </li>
      <li>
        <p>
          <a href="/credit-cards/reward-credit-cards.htm">Rewards</a>
        </p>
      </li>
      <li>
        <p>
          <a href="/credit-cards/credit-building-credit-cards.htm">
            Credit building
          </a>
        </p>
      </li>
    </ul>
  </div>
)

const CustomLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string
}> = ({ to, children, ...rest }) => (
  <a onClick={action(`Custom link component: ${to}`)} {...rest}>
    {children}
  </a>
)

const content = (
  <div>
    <h6>Most popular</h6>
    <ul>
      <li>
        <p>
          <a href="/credit-cards/most-popular-credit-cards.htm">
            Most popular credit cards
          </a>
        </p>
      </li>
      <li>
        <p>
          <a href="/credit-cards.htm">Credit cards</a>
        </p>
      </li>
      <li>
        <p>
          <a href="/credit-cards/balance-transfers-credit-cards.htm">
            Balance transfers
          </a>
        </p>
      </li>
      <li>
        <p>
          <a href="/credit-cards/0-purchases-credit-cards.htm">Purchases</a>
        </p>
      </li>
      <li>
        <p>
          <a href="/credit-cards/cashback-credit-cards.htm">Cashback</a>
        </p>
      </li>
      <li>
        <p>
          <a href="/credit-cards/reward-credit-cards.htm">Rewards</a>
        </p>
      </li>
      <li>
        <p>
          <a href="/credit-cards/credit-building-credit-cards.htm">
            Credit building
          </a>
        </p>
      </li>
    </ul>
    <h6>More from credit cards</h6>
    <ul>
      <li>
        <p>
          <a href="/credit-cards/air-miles-credit-cards.htm">Air miles</a>
        </p>
      </li>
      <li>
        <p>
          <a href="/credit-cards/business-credit-cards.htm">Business</a>
        </p>
      </li>
      <li>
        <p>
          <a href="/credit-cards/0-money-transfer-credit-cards.htm">
            Money Transfers
          </a>
        </p>
      </li>
      <li>
        <p>
          <a href="/credit-cards/student-credit-cards.htm">Student</a>
        </p>
      </li>
      <li>
        <p>
          <a href="/credit-cards/credit-cards-with-no-foreign-transaction-fees.htm">
            Travel Credit Cards
          </a>
        </p>
      </li>
    </ul>
    <ButtonLink variant="primary" as={CustomLink} to="/credit-cards/guides.htm">
      Credit Cards Guides
    </ButtonLink>
    <ButtonLink
      variant="secondary"
      as={CustomLink}
      to="/credit-cards/credit-card-companies.htm"
    >
      Who We Compare
    </ButtonLink>
  </div>
)

const creditCardsDropdown = (
  <NavigationDropdown pathName="Purchase" navConfig={moneyConfig}>
    {content}
  </NavigationDropdown>
)

const navigationDropdown = (
  <NavigationDropdown
    title="Why are you looking for a mortgage?"
    pathName="Purchase"
    navConfig={navConfig}
  >
    {navContent}
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

export const ExampleWithCreditCards = () => {
  return (
    <Billboard
      breadcrumbs={breadcrumbs}
      primaryContent={primaryContent}
      primarySlot={creditCardsDropdown}
    />
  )
}

ExampleWithCreditCards.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <ExampleWithKnobs />
      <ExampleWithCreditCards />
    </AllThemes>
  )
}
