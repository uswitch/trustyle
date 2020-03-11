/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import { Global } from '@emotion/core'

import { ButtonLink } from '../../button-link/src'
import Badge from '../../badge/src'

import RateTable from './'

export default {
  title: 'Elements|Rate Table'
}

type Column =
  | 'Placeholder'
  | 'Image'
  | 'Simple Content'
  | 'Content'
  | 'Split Placeholder'
  | 'Split Content'
  | 'None'
const columns: Column[] = [
  'Placeholder',
  'Image',
  // 'Simple Content',
  'Content',
  'Split Placeholder',
  'Split Content',
  'None'
]

export const ExampleWithKnobs = () => {
  const preTitle = text('Pretitle', '')
  const rowTitle = text('Row title', 'Santander Standard Loan (Online)')
  const subtitle = text('Subtitle', 'Personal loan')

  const badgeText = text('Badge text', 'Award Winner')

  const unsplitColumns = columns.filter(col => !col.includes('Split'))
  const headerAddon = select('Header addon', unsplitColumns, 'Placeholder')
  const footerAddon = boolean('Show footer via addon?', true)

  const firstCol = select('First column', columns, 'Image')
  const secondCol = select('Second column', columns, 'Split Content')
  const thirdCol = select('Third column', columns, 'Content')
  const fourthCol = select('Fourth column', columns, 'None')

  const splitCount = number('Split count', 2, {
    range: true,
    min: 2,
    max: 3,
    step: 1
  })

  const buttonText = text('Button text', 'Apply now')
  const linkText = text('Link text', 'More details')
  const badges = badgeText
    ? [<Badge key="award-winner">{badgeText}</Badge>]
    : []

  const getColumn = (col: Column): React.ReactNode => {
    if (col === 'Placeholder') {
      return <RateTable.cells.Placeholder />
    }

    if (col === 'Image') {
      return (
        <RateTable.cells.Image>
          <img
            src="https://placekitten.com/200/75?image=9"
            alt="Salman"
            sx={{ height: 75, width: '100%', objectFit: 'cover' }}
          />
        </RateTable.cells.Image>
      )
    }

    if (col === 'Content') {
      return (
        <RateTable.cells.Content label="Annual saving" primary>
          <RateTable.Data.Range from="£30" to="£260" />
          <a>Clickable link</a>
        </RateTable.cells.Content>
      )
    }

    if (col === 'Simple Content') {
      return (
        <RateTable.cells.Content label="Fixed rate contract">
          14 months
        </RateTable.cells.Content>
      )
    }

    if (col === 'Split Placeholder') {
      return (
        <RateTable.cells.Split>
          {getColumn('Placeholder')}
          {getColumn('Placeholder')}
          {splitCount === 3 && getColumn('Placeholder')}
        </RateTable.cells.Split>
      )
    }

    if (col === 'Split Content') {
      return (
        <RateTable.cells.Split>
          {getColumn('Simple Content')}
          {getColumn('Simple Content')}
          {splitCount === 3 && getColumn('Simple Content')}
        </RateTable.cells.Split>
      )
    }

    return null
  }

  const addons = []

  if (headerAddon !== 'None') {
    addons.push(
      <RateTable.addons.Header key="header-addon">
        {getColumn(headerAddon === 'Content' ? 'Simple Content' : headerAddon)}
      </RateTable.addons.Header>
    )
  }

  if (footerAddon) {
    addons.push(
      <RateTable.addons.Footer key="footer">
        <RateTable.cells.Base sx={{ display: 'block' }} mobileOrder={100}>
          <small sx={{ fontSize: 'xs' }}>
            Representative example: Assumed borrowing of £10,000 over...
          </small>
        </RateTable.cells.Base>
      </RateTable.addons.Footer>
    )
  }

  return (
    <React.Fragment>
      <Global
        styles={{
          body: {
            marginTop: 25
          }
        }}
      />
      <RateTable.Row
        badges={badges}
        preTitle={preTitle}
        rowTitle={rowTitle}
        subtitle={subtitle}
        addons={addons}
      >
        {getColumn(firstCol)}
        {getColumn(secondCol)}
        {getColumn(thirdCol)}
        {getColumn(fourthCol)}
        <RateTable.cells.Cta
          button={<ButtonLink variant="primary">{buttonText}</ButtonLink>}
          linkButton={<ButtonLink variant="link">{linkText}</ButtonLink>}
        />
      </RateTable.Row>
    </React.Fragment>
  )
}

export const Example1 = () => {
  return (
    <RateTable.Row
      // badges={[<Badge>Cashback</Badge>, <Badge>Award Winner</Badge>]}
      // preTitle="Sponsored"
      rowTitle="Santander Standard Loan (Online)"
      subtitle="Personal Loan"
    >
      <RateTable.cells.Image>
        <img
          src="https://placekitten.com/200/75?image=9"
          alt="Salman"
          sx={{ height: 75, width: '100%', objectFit: 'cover' }}
        />
      </RateTable.cells.Image>
      <RateTable.cells.Split>
        <RateTable.cells.Placeholder />
        <RateTable.cells.Placeholder />
        <RateTable.cells.Placeholder />
      </RateTable.cells.Split>
      <RateTable.cells.Split>
        <RateTable.cells.Placeholder />
        <RateTable.cells.Placeholder />
      </RateTable.cells.Split>
      <RateTable.cells.Placeholder />
      <RateTable.cells.Cta
        button={<ButtonLink variant="primary">Apply now</ButtonLink>}
        linkButton={<ButtonLink variant="link">More details</ButtonLink>}
      />
    </RateTable.Row>
  )
}

export const Example2 = () => {
  return (
    <React.Fragment>
      <Global
        styles={{
          body: {
            marginTop: 25
          }
        }}
      />
      <RateTable.Row
        badges={[
          <Badge key="cashback">Cashback</Badge>,
          <Badge key="award-winner">Award Winner</Badge>
        ]}
        preTitle="Sponsored"
        rowTitle="Super Saver April 2021"
      >
        <RateTable.cells.Image>
          <img
            src="https://placekitten.com/200/75?image=12"
            alt="Salman"
            sx={{ height: 75, width: '100%', objectFit: 'cover' }}
          />
        </RateTable.cells.Image>
        <RateTable.cells.Split>
          <RateTable.cells.Content label="Fixed rate contract">
            14 months
          </RateTable.cells.Content>
          <RateTable.cells.Content label="Early exit fee">
            £30 per fuel
          </RateTable.cells.Content>
        </RateTable.cells.Split>
        <RateTable.cells.Content label="Annual saving" primary>
          <RateTable.Data.Range from="£30" to="£260" />
          <a>Clickable link</a>
        </RateTable.cells.Content>
        <RateTable.cells.Cta
          button={<ButtonLink variant="primary">Button</ButtonLink>}
          linkButton={<ButtonLink variant="link">Plan info</ButtonLink>}
        />
      </RateTable.Row>
    </React.Fragment>
  )
}

export const ExampleWithAddons = () => {
  return (
    <RateTable.Row
      rowTitle="Santander Standard Loan (Online)"
      subtitle="Personal Loan"
      addons={[
        <RateTable.addons.Header key="header-placeholder">
          <RateTable.cells.Placeholder />
        </RateTable.addons.Header>,
        <RateTable.addons.Footer key="footer">
          <RateTable.cells.Base sx={{ display: 'block' }} mobileOrder={100}>
            <small sx={{ fontSize: 'xs' }}>
              Representative example: Assumed borrowing of £10,000 over...
            </small>
          </RateTable.cells.Base>
        </RateTable.addons.Footer>
      ]}
    >
      <RateTable.cells.Image>
        <img
          src="https://placekitten.com/200/75?image=9"
          alt="Salman"
          sx={{ height: 75, width: '100%', objectFit: 'cover' }}
        />
      </RateTable.cells.Image>
      <RateTable.cells.Split>
        <RateTable.cells.Placeholder />
        <RateTable.cells.Placeholder />
      </RateTable.cells.Split>
      <RateTable.cells.Placeholder />
      <RateTable.cells.Cta
        button={<ButtonLink variant="primary">Apply now</ButtonLink>}
        linkButton={<ButtonLink variant="link">More details</ButtonLink>}
      />
    </RateTable.Row>
  )
}
