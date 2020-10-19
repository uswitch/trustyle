/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'
import { number, select } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'
import { FilledArrow } from '../../call-out/node_modules/@uswitch/trustyle.icon/src/filled-arrow'
import { ButtonLink } from '../../button-link/src'

import { LinkList, LinkListItem } from './'

export default {
  title: 'Elements/Link List'
}

export const PrimaryVariant = () => (
  <div css={css({ padding: number('Padding', 10) })}>
    <LinkList title="Link list">
      <LinkListItem href="https://www.jonathanfielding.com">
        Jonathans Blog
      </LinkListItem>
      <LinkListItem href="https://www.performancebudget.io">
        Performance Budget Tool
      </LinkListItem>
      <LinkListItem href="https://www.duckduckgo.com">
        Ethical search engine
      </LinkListItem>
    </LinkList>
  </div>
)

PrimaryVariant.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const QuickLinks = () => {
  const icon = select('Icon', ['creditCards', 'loans'], 'creditCards')

  const iconImg = (icon: string) => (
    <img src={require(`../../../../static/money-icons/${icon}.svg`)} />
  )

  const arrow = <FilledArrow color="" size={18} />

  return (
    <div css={css({ padding: number('Padding', 10) })}>
      <LinkList title="Quick Links" icon={iconImg(icon)} variant="quickLinks">
        <LinkListItem href="https://www.jonathanfielding.com" icon={arrow}>
          Jonathans Blog
        </LinkListItem>
        <LinkListItem href="https://www.performancebudget.io" icon={arrow}>
          Performance Budget Tool
        </LinkListItem>
        <LinkListItem href="https://www.duckduckgo.com" icon={arrow}>
          Ethical search engine
        </LinkListItem>
      </LinkList>
      <ButtonLink
        size="small"
        variant="primary"
        href="https://www.money.co.uk/savings-accounts/investment-isas.htm"
      >
        Compare ISAs
      </ButtonLink>
    </div>
  )
}

QuickLinks.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <PrimaryVariant />
      <QuickLinks />
    </AllThemes>
  )
}
