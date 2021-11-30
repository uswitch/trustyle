/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { number, select } from '@storybook/addon-knobs'
import { Glyph, Icon } from '@uswitch/trustyle.icon'

import AllThemes from '../../../utils/all-themes'
import { FilledArrow } from '../../call-out/node_modules/@uswitch/trustyle.icon/src/filled-arrow'
import { ButtonLink } from '../../button-link/src'
import themeSelector from '../../../utils/theme-selector'

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

  const iconImg = (icon: string) => <img src={`/money-icons/${icon}.svg`} />

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

export const LinkBlock = () => {
  const theme = themeSelector()
  const iconName = select(
    'Link Block Icon',
    [
      'banking',
      'car-insurance',
      'credit-card',
      'current-account',
      'piggy-bank',
      'investments',
      'loans',
      'mortgages',
      'travel-money'
    ],
    'credit-card'
  )
  const color = select('Icon Color', theme.colors, theme.colors['primary'])

  return (
    <div css={css({ padding: number('Padding', 10) })}>
      <LinkList
        title="Credit Cards"
        icon={<Icon glyph={iconName as Glyph} color={color} />}
        variant="linkBlock"
        subtitle="Compare all cards"
        subtitleUrl="https://money.co.uk"
      >
        <LinkListItem href="https://money.co.uk">
          0% balance transfer
        </LinkListItem>
        <LinkListItem href="https://money.co.uk">
          0% purchase cards
        </LinkListItem>
        <LinkListItem href="https://money.co.uk">
          Cards for bad credit
        </LinkListItem>
      </LinkList>
    </div>
  )
}

LinkBlock.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <PrimaryVariant />
      <QuickLinks />
      <LinkBlock />
    </AllThemes>
  )
}
