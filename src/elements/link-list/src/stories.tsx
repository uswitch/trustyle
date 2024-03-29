/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { number, select } from '@storybook/addon-knobs'
import { Glyph, Icon } from '@uswitch/trustyle.icon'

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
  const iconName = select(
    'Link Block Icon',
    [
      'arrow',
      'arrow-circle',
      'banking',
      'bill',
      'book',
      'book-closed',
      'bookmark',
      'bookmark-filled',
      'bullet',
      'calendar',
      'car',
      'caret',
      'caretFinal',
      'car-insurance',
      'check',
      'clock',
      'close',
      'check-circle',
      'checkmark',
      'conversation',
      'credit-card',
      'credit-card-outline',
      'cross',
      'current-account',
      'edit',
      'email',
      'email-filled',
      'error',
      'facebook',
      'facebook2',
      'filled-arrow',
      'filters',
      'four',
      'gas-electricity',
      'hamburger-simple',
      'heart-outline',
      'home',
      'house',
      'info',
      'information',
      'investments',
      'letter',
      'linkedIn',
      'loans',
      'location',
      'magnifier',
      'minus',
      'mobile',
      'money-filter',
      'mortgages',
      'mortgages-outline',
      'one',
      'other-outline',
      'pencil',
      'person',
      'person-bold',
      'person-circle',
      'people-bold',
      'phone',
      'phone-simple',
      'piggy-bank',
      'piggy-bank-outline',
      'plus',
      'pound-circle',
      'receipt-outline',
      'question',
      'question-filled',
      'smile',
      'sms',
      'sort',
      'sort-thin',
      'three',
      'tick',
      'travel-money',
      'tv',
      'two',
      'thumb-up',
      'thumb-down',
      'twitter',
      'star-outlined',
      'star-filled',
      'star-half-filled',
      'van',
      'warning',
      'edit-journey'
    ],
    'credit-card'
  )

  return (
    <div css={css({ padding: number('Padding', 10) })}>
      <LinkList
        title="Credit Cards"
        icon={<Icon glyph={iconName as Glyph} color="" />}
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

export const LinkBlockGroup = () => {
  const LinkListWrapper = () => (
    <div
      css={css({
        boxSizing: 'border-box',
        marginRight: '7.5px',
        marginBottom: '24px',
        flex: '0 0 auto',
        marginLeft: '7.5px',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        width: 'calc(25% - 15px)'
      })}
    >
      <LinkList
        title="Credit Cards"
        icon={<Icon glyph="travel-money" color="000" />}
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

  return (
    <div
      css={css({
        marginLeft: 'auto',
        marginRight: 'auto',
        boxSizing: 'border-box',
        paddingLeft: '15px',
        paddingRight: '15px',
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: 'column'
      })}
    >
      <div
        css={css({
          marginLeft: '-7.5px',
          marginRight: '-7.5px',
          display: 'flex',
          flexFlow: 'row wrap'
        })}
      >
        <LinkListWrapper />
        <LinkListWrapper />
        <LinkListWrapper />
        <LinkListWrapper />
      </div>
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
      <LinkBlockGroup />
    </AllThemes>
  )
}
