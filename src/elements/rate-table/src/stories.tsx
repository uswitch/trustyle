/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { number, select, text } from '@storybook/addon-knobs'

import { ButtonLink } from '../../button-link/src'

import RateTable from './'

export default {
  title: 'Elements|RateTable'
}

type Column =
  | 'Placeholder'
  | 'Image'
  | 'Simple Content'
  | 'Content'
  | 'Split Placeholder'
  | 'Split Content'
  | 'None'
const columns = [
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

  const firstCol = select('First column', columns, 'Image') as Column
  const secondCol = select('Second column', columns, 'Split Content') as Column
  const thirdCol = select('Third column', columns, 'Content') as Column
  const fourthCol = select('Fourth column', columns, 'None') as Column

  const splitCount = number('Split count', 2, {
    range: true,
    min: 2,
    max: 3,
    step: 1
  })

  const buttonText = text('Button text', 'Apply now')
  const linkText = text('Link text', 'More details')

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

  return (
    <RateTable.Row preTitle={preTitle} rowTitle={rowTitle} subtitle={subtitle}>
      {getColumn(firstCol)}
      {getColumn(secondCol)}
      {getColumn(thirdCol)}
      {getColumn(fourthCol)}
      <RateTable.cells.Cta
        button={<ButtonLink variant="primary">{buttonText}</ButtonLink>}
        linkButton={<ButtonLink variant="link">{linkText}</ButtonLink>}
      />
    </RateTable.Row>
  )
}

export const Example1 = () => {
  return (
    <RateTable.Row
      // badges={[<Badge>Cashback</Badge>, <Badge>Award Winner</Badge>]}
      // preTitle="Sponsored"
      rowTitle="Santander Standard Loan (Online)"
      subtitle="Personal Loan"
      disclaimer="Representative example: Assumed borrowing of £10,000 over..."
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
    <RateTable.Row
      // badges={[<Badge>Cashback</Badge>, <Badge>Award Winner</Badge>]}
      preTitle="Sponsored"
      rowTitle="Super Saver April 2021"
      // subtitle="Personal Loan"
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
  )
}

export const ExampleWithAddons = () => {
  return (
    <RateTable.Row
      // badges={[<Badge>Cashback</Badge>, <Badge>Award Winner</Badge>]}
      // preTitle="Sponsored"
      rowTitle="Santander Standard Loan (Online)"
      subtitle="Personal Loan"
      disclaimer="Representative example: Assumed borrowing of £10,000 over..."
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
