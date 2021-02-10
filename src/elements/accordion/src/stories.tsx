/** @jsx jsx */
import * as React from 'react'
// import { jsx } from '@emotion/core'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import { ButtonLink } from '../../button-link'
import AllThemes from '../../../utils/all-themes'

import Accordion from './'

export default {
  title: 'Elements/Accordion'
}

export const SingleAccordion = () => {
  const title = text('Title', 'This is an example title')
  const content = text('Content', 'This is some example content')
  return (
    <Accordion title={title}>
      <p>{content}</p>
    </Accordion>
  )
}

SingleAccordion.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const ReverseAccordion = () => {
  const scrollToRef = React.useRef<HTMLHeadingElement>(null)
  return (
    <React.Fragment>
      <h3 ref={scrollToRef}>Recommendation 1</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
        fringilla quam. Fusce vulputate sit amet nisl quis cursus. Proin
        vehicula lacinia elit quis pretium. Proin eget pellentesque dolor. Nulla
        volutpat sapien placerat, ultrices libero ut, ornare dui. Donec a est
        facilisis odio faucibus pretium vitae nec justo. Curabitur gravida diam
        at sodales maximus. Nulla gravida luctus felis, ac sodales elit.
      </p>
      <Accordion
        title={'Show more recommendations'}
        openedTitle={'Show less'}
        variant="reverse"
        scrollToRef={scrollToRef}
      >
        <h3 style={{ marginTop: 0 }}>Recommendation 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
          fringilla quam. Fusce vulputate sit amet nisl quis cursus. Proin
          vehicula lacinia elit quis pretium. Proin eget pellentesque dolor.
          Nulla volutpat sapien placerat, ultrices libero ut, ornare dui. Donec
          a est facilisis odio faucibus pretium vitae nec justo. Curabitur
          gravida diam at sodales maximus. Nulla gravida luctus felis, ac
          sodales elit.
        </p>
        <h3>Recommendation 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
          fringilla quam. Fusce vulputate sit amet nisl quis cursus. Proin
          vehicula lacinia elit quis pretium. Proin eget pellentesque dolor.
          Nulla volutpat sapien placerat, ultrices libero ut, ornare dui. Donec
          a est facilisis odio faucibus pretium vitae nec justo. Curabitur
          gravida diam at sodales maximus. Nulla gravida luctus felis, ac
          sodales elit.
        </p>
      </Accordion>
      <h3>Content below</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
        fringilla quam. Fusce vulputate sit amet nisl quis cursus. Proin
        vehicula lacinia elit quis pretium. Proin eget pellentesque dolor. Nulla
        volutpat sapien placerat, ultrices libero ut, ornare dui. Donec a est
        facilisis odio faucibus pretium vitae nec justo. Curabitur gravida diam
        at sodales maximus. Nulla gravida luctus felis, ac sodales elit.
      </p>
      <p>
        Nullam eu sem nec tellus luctus luctus. Proin ullamcorper pretium ante
        ut viverra. In in sapien nec ipsum consequat pulvinar eget feugiat
        lorem. Ut purus ex, porttitor quis eros nec, efficitur mattis neque. Ut
        aliquet sed lacus vitae fringilla. Nullam non pellentesque erat. Sed
        rutrum eget mi at fringilla. Praesent efficitur tortor ac placerat
        semper. Suspendisse rhoncus placerat ultricies. Donec accumsan nisi non
        urna posuere, et accumsan eros congue. Proin quis imperdiet quam. Nulla
        sodales et magna luctus dignissim. Integer in maximus ligula, eget
        lacinia risus. Nam justo nulla, efficitur ac purus sed, molestie
        faucibus enim.
      </p>
    </React.Fragment>
  )
}

ReverseAccordion.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const SingleAccordionWithVariant = () => {
  const title = text('Title', 'This is an example title')
  const content = text('Content', 'This is some example content')
  const variant = text('Variant', 'eligibility-criteria')
  return (
    <Accordion title={title} variant={variant}>
      <p>{content}</p>
    </Accordion>
  )
}

SingleAccordionWithVariant.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AccordionGroup = () => {
  const groupTitle = text('Group title', 'Example group title')
  const title = text('First title', 'This is an example title')
  const content = text('First content', 'This is some example content')

  return (
    <Accordion.Group>
      <Accordion.Title as="h2">{groupTitle}</Accordion.Title>
      <Accordion title={title}>
        <p>{content}</p>
      </Accordion>
      <Accordion title="Second accordion">
        <p>Hello World</p>
      </Accordion>
      <Accordion title="Third accordion">
        <p>Hello</p>
        <p>World</p>
      </Accordion>
    </Accordion.Group>
  )
}

AccordionGroup.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AccordionGroupWithIcons = () => {
  const groupTitle = text('Group title', 'Example group title')
  const title = text('First title', 'This is an example title')
  const content = text('First content', 'This is some example content')

  return (
    <Accordion.Group iconClosed="plus" iconOpen="minus">
      <Accordion.Title as="h2">{groupTitle}</Accordion.Title>
      <Accordion title={title}>
        <p>{content}</p>
      </Accordion>
      <Accordion title="Second accordion">
        <p>Hello World</p>
      </Accordion>
      <Accordion title="Third accordion">
        <p>Hello</p>
        <p>World</p>
      </Accordion>
    </Accordion.Group>
  )
}

AccordionGroupWithIcons.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AccordionGroupWithTitleIcons = () => {
  const groupTitle = text('Group title', 'Example group title')
  const title = text('First title', 'Banking')
  const content = text('First content', 'This is some example content')
  const icon = text(
    'icon url',
    'https://uswitch-contentful.imgix.net/t014ej9w3ur1/6zc6CVHzsVn3xs0N8loxl9/763a957760ec5b183cf4f5a05fa9e4ae/Banking.svg'
  )

  const mortgagesIcon =
    'https://uswitch-contentful.imgix.net/t014ej9w3ur1/5pFgZgswDdVCcPXyXB83Iq/aab9f93ca6b1940186b548c443fb7026/mortgages.svg'
  const motoringIcon =
    'https://uswitch-contentful.imgix.net/t014ej9w3ur1/1aMIa9HTc8Lj61Jux1WTfc/a695decb14508cfe239e53e45ad3ddc3/Group_137.svg'
  const travelIcon =
    'https://uswitch-contentful.imgix.net/t014ej9w3ur1/1Ruz9BZ8aLaThxgyjUO1QL/3d19715177a7e1c5d81ddac7becea350/travel_money.svg'

  return (
    <Accordion.Group>
      <Accordion.Title as="h2">{groupTitle}</Accordion.Title>
      <Accordion title={title} icon={icon}>
        <p>{content}</p>
      </Accordion>
      <Accordion title="Motoring" icon={motoringIcon}>
        <p>Hello World</p>
      </Accordion>
      <Accordion title="Home" icon={mortgagesIcon}>
        <p>Hello World</p>
      </Accordion>
      <Accordion title="Travel" icon={travelIcon}>
        <p>Hello World</p>
      </Accordion>
    </Accordion.Group>
  )
}

AccordionGroupWithTitleIcons.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const LegacyAccordion = () => {
  const title = text('First title', 'This is an example title')

  return (
    <div sx={{ bg: '#f1f1f1', padding: '20px' }}>
      <Accordion title={title} variant="legacy">
        <div>
          <p>Most popular</p>
          <ul>
            <li>
              <a>Loans</a>
            </li>
            <li>
              <a>Personal</a>
            </li>
            <li>
              <a>Bad credit</a>
            </li>
            <li>
              <a>Secured</a>
            </li>
            <li>
              <a>Guarantor</a>
            </li>
            <li>
              <a>Secured debt consolidation</a>
            </li>
          </ul>
        </div>
        <ButtonLink variant="primary">Loans guides</ButtonLink>
        <ButtonLink variant="secondary">Who we compare</ButtonLink>
      </Accordion>
    </div>
  )
}

LegacyAccordion.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes
      themes={[
        'uswitch',
        'money',
        'bankrate',
        'broadband-deals',
        'journey',
        'save-on-energy'
      ]}
    >
      <SingleAccordion />
      <ReverseAccordion />
      <SingleAccordionWithVariant />
      <AccordionGroup />
      <AccordionGroupWithIcons />
      <AccordionGroupWithTitleIcons />
      <SingleAccordionWithIcon />
      <LegacyAccordion />
    </AllThemes>
  )
}

export const SingleAccordionWithIcon = () => {
  const title = text('Title', 'What is ‘Checked’ by Uswitch?')
  const content = text(
    'Content',
    'The only way you can be confident the speeds you see are available at your home is to look for the ‘Checked by Uswitch’ label.'
  )
  return (
    <Accordion.Group>
      <Accordion
        title={title}
        variant={'true-speeds'}
        isInitiallyOpen
        glyph={'checkmark'}
        glyphColor={'#2AAA5B'}
      >
        <div sx={{ marginX: 'sm', fontSize: ['16px', '18px', '18px'] }}>
          <p>{content}</p>
          <p>
            Other deals show an average speed that might not be available to
            you.
          </p>
        </div>
      </Accordion>
    </Accordion.Group>
  )
}
