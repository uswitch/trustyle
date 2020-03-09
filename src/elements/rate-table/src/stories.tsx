/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import { ButtonLink } from '../../button-link/src'

import RateTable from './'

export default {
  title: 'Elements|RateTable'
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
        link={<a>More details</a>}
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
        <RateTable.cells.Primary label="Fixed rate contract">
          14 months
        </RateTable.cells.Primary>
        <RateTable.cells.Primary label="Early exit fee">
          £30 per fuel
        </RateTable.cells.Primary>
      </RateTable.cells.Split>
      <RateTable.cells.Primary label="Annual saving" highlighted>
        <RateTable.Data.Range from="£30" to="£260" />
        <a>Clickable link</a>
        {/* <p sx={{ margin: 0, fontSize: 'xxxl', fontWeight: 'bold' }}>£288.60</p> */}
      </RateTable.cells.Primary>
      <RateTable.cells.Cta
        button={<ButtonLink variant="primary">Button</ButtonLink>}
        link={<a>Plan info</a>}
      />
    </RateTable.Row>
  )
}
