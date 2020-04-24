/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import { Global } from '@emotion/core'

import { ButtonLink } from '../../../elements/button-link/src'
import Badge from '../../../elements/badge/src'
import { ProgressBar } from '../../../elements/progress-bar/src'

import ProductTable, { AddonArg } from './index'

export default {
  title: 'Compounds|Product Table'
}

type Column =
  | 'Placeholder'
  | 'Image'
  | 'Simple Content'
  | 'Content from knob'
  | 'Split Placeholder'
  | 'Split Content'
  | 'None'
const columns: Column[] = [
  'Placeholder',
  'Image',
  'Simple Content',
  'Content from knob',
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
  const headerAddon = select('Header addon', unsplitColumns, 'None')
  const footerAddon = boolean('Show footer via addon?', true)

  const firstCol = select('First column', columns, 'Image')
  const secondCol = select('Second column', columns, 'Split Content')
  const thirdCol = select('Third column', columns, 'Content from knob')
  const fourthCol = select('Fourth column', columns, 'None')

  const formatters = {
    Range: <ProductTable.data.Range from={30} to={260} unit="pounds" />,
    TextSubscript: (
      <ProductTable.data.TextSubscript text="£121" subscript="/ month" />
    ),
    Value: (
      <ProductTable.data.Value value={300} unit="pounds" subscript="/ month" />
    )
  }

  const dataFormatterKey = select(
    'Data formatter for content',
    Object.keys(formatters),
    'Range'
  )

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
      return <ProductTable.cells.Placeholder />
    }

    if (col === 'Image') {
      return (
        <ProductTable.cells.Image>
          <img
            src="https://placekitten.com/200/75?image=9"
            alt="Salman"
            sx={{ height: 75, width: '100%', objectFit: 'cover' }}
          />
        </ProductTable.cells.Image>
      )
    }

    if (col === 'Content from knob') {
      return (
        <ProductTable.cells.Content label="Annual saving" accent>
          {
            // @ts-ignore
            formatters[dataFormatterKey]
          }
        </ProductTable.cells.Content>
      )
    }

    if (col === 'Simple Content') {
      return (
        <ProductTable.cells.Content label="Fixed rate contract">
          14 months
        </ProductTable.cells.Content>
      )
    }

    if (col === 'Split Placeholder') {
      return (
        <ProductTable.cells.Split>
          {getColumn('Placeholder')}
          {getColumn('Placeholder')}
          {splitCount === 3 && getColumn('Placeholder')}
        </ProductTable.cells.Split>
      )
    }

    if (col === 'Split Content') {
      return (
        <ProductTable.cells.Split>
          {getColumn('Simple Content')}
          {getColumn('Simple Content')}
          {splitCount === 3 && getColumn('Simple Content')}
        </ProductTable.cells.Split>
      )
    }

    return null
  }

  const addons: AddonArg[] = []

  if (headerAddon !== 'None') {
    addons.push({
      addon: ProductTable.addons.responsive,
      component: getColumn(
        headerAddon === 'Content from knob' ? 'Simple Content' : headerAddon
      )
    })
  }

  if (footerAddon) {
    addons.push({
      addon: ProductTable.addons.footer,
      component: (
        <ProductTable.cells.Base sx={{ display: 'block' }} mobileOrder={100}>
          <small sx={{ fontSize: 'xs' }}>
            Representative example: Assumed borrowing of £10,000 over...
          </small>
        </ProductTable.cells.Base>
      )
    })
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
      <ProductTable.Row
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
        <ProductTable.cells.Cta
          primary={<ButtonLink variant="primary">{buttonText}</ButtonLink>}
          secondary={<ButtonLink variant="link">{linkText}</ButtonLink>}
        />
      </ProductTable.Row>
    </React.Fragment>
  )
}

export const Example1 = () => {
  return (
    <ProductTable.Row
      // badges={[<Badge>Cashback</Badge>, <Badge>Award Winner</Badge>]}
      // preTitle="Sponsored"
      rowTitle="Santander Standard Loan (Online)"
      subtitle="Personal Loan"
    >
      <ProductTable.cells.Image>
        <img
          src="https://placekitten.com/200/75?image=9"
          alt="Salman"
          sx={{ height: 75, width: '100%', objectFit: 'cover' }}
        />
      </ProductTable.cells.Image>
      <ProductTable.cells.Split>
        <ProductTable.cells.Placeholder />
        <ProductTable.cells.Placeholder />
        <ProductTable.cells.Placeholder />
      </ProductTable.cells.Split>
      <ProductTable.cells.Split>
        <ProductTable.cells.Placeholder />
        <ProductTable.cells.Placeholder />
      </ProductTable.cells.Split>
      <ProductTable.cells.Placeholder />
      <ProductTable.cells.Cta
        primary={<ButtonLink variant="primary">Apply now</ButtonLink>}
        secondary={<ButtonLink variant="link">More details</ButtonLink>}
      />
    </ProductTable.Row>
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
      <ProductTable.Row
        badges={[
          <Badge key="cashback">Cashback</Badge>,
          <Badge key="award-winner">Award Winner</Badge>
        ]}
        preTitle="Sponsored"
        rowTitle="Super Saver April 2021"
      >
        <ProductTable.cells.Image>
          <img
            src="https://placekitten.com/200/75?image=12"
            alt="Salman"
            sx={{ height: 75, width: '100%', objectFit: 'cover' }}
          />
        </ProductTable.cells.Image>
        <ProductTable.cells.Split>
          <ProductTable.cells.Content label="Fixed rate contract">
            14 months
          </ProductTable.cells.Content>
          <ProductTable.cells.Content label="Early exit fee">
            £30 per fuel
          </ProductTable.cells.Content>
        </ProductTable.cells.Split>
        <ProductTable.cells.Content label="Annual saving" accent>
          <ProductTable.data.Range from={30} to={260} unit="pounds" />
        </ProductTable.cells.Content>
        <ProductTable.cells.Cta
          primary={<ButtonLink variant="primary">Button</ButtonLink>}
          secondary={<ButtonLink variant="link">Plan info</ButtonLink>}
        />
      </ProductTable.Row>
    </React.Fragment>
  )
}

export const ExampleWithAddons = () => {
  return (
    <ProductTable.Row
      rowTitle="Santander Standard Loan (Online)"
      subtitle="Personal Loan"
      addons={[
        {
          addon: ProductTable.addons.responsive,
          component: (
            <ProductTable.cells.Content label="Eligibility">
              <div
                sx={{
                  textAlign: 'center',
                  maxWidth: 300,
                  minWidth: [0, 200],
                  marginLeft: 'auto'
                }}
              >
                <span
                  sx={{ display: 'block', fontSize: 14, marginBottom: 'xs' }}
                >
                  <strong>70%</strong> chance of approval
                </span>
                <ProgressBar current={70} max={100} />
              </div>
            </ProductTable.cells.Content>
          ),
          options: {
            bodyOrder: 1
          }
        },
        {
          addon: ProductTable.addons.responsive,
          component: (
            <ProductTable.cells.Image>
              <img
                src="https://placekitten.com/200/75?image=9"
                alt="Salman"
                sx={{ height: 75, width: '100%', objectFit: 'cover' }}
              />
            </ProductTable.cells.Image>
          ),
          options: {
            headerOrder: -1,
            gridOrder: -1,
            positions: ['header', 'grid']
          }
        },
        {
          addon: ProductTable.addons.footer,
          component: (
            <ProductTable.cells.Base sx={{ display: 'block' }}>
              <small sx={{ fontSize: 'xs' }}>
                Representative example: Assumed borrowing of £10,000 over...
              </small>
            </ProductTable.cells.Base>
          )
        }
      ]}
    >
      <ProductTable.cells.Split>
        <ProductTable.cells.Content label="Fixed rate contract">
          14 months
        </ProductTable.cells.Content>
        <ProductTable.cells.Content label="Early exit fee">
          £30 per fuel
        </ProductTable.cells.Content>
      </ProductTable.cells.Split>
      <ProductTable.cells.Content label="Annual saving" accent>
        <ProductTable.data.Range from={30} to={260} unit="pounds" />
      </ProductTable.cells.Content>
      <ProductTable.cells.Content label="Annual saving" accent>
        <ProductTable.data.Range from={30} to={260} unit="pounds" />
      </ProductTable.cells.Content>
      <ProductTable.cells.Cta
        primary={<ButtonLink variant="primary">Apply now</ButtonLink>}
        secondary={<ButtonLink variant="link">More details</ButtonLink>}
      />
    </ProductTable.Row>
  )
}

export const ExampleWithNumberFormatters = () => {
  return (
    <React.Fragment>
      <Global
        styles={{
          body: {
            marginTop: 25
          }
        }}
      />
      <ProductTable.Row
        badges={[
          <Badge key="cashback">Cashback</Badge>,
          <Badge key="award-winner">Award Winner</Badge>
        ]}
        preTitle="Sponsored"
        rowTitle="Super Saver April 2021"
      >
        <ProductTable.cells.Split>
          <ProductTable.cells.Content label="Download Speed">
            <ProductTable.data.Value
              value={number('Download speed (Kbps)', 10000)}
              unit="data-transfer"
              subscript=""
            />
          </ProductTable.cells.Content>
          <ProductTable.cells.Content label="Data">
            <ProductTable.data.Value
              value={number('Data (Mb)', 100000)}
              unit="data"
              subscript=""
            />
          </ProductTable.cells.Content>
          <ProductTable.cells.Content label="Upfront cost (free)">
            <ProductTable.data.Value
              value="No setup cost"
              unit="pounds"
              subscript="setup cost"
            />
          </ProductTable.cells.Content>
        </ProductTable.cells.Split>
        <ProductTable.cells.Content label="Upfront cost" accent>
          <ProductTable.data.Value
            value={9.99}
            unit="pounds"
            subscript="setup cost"
          />
        </ProductTable.cells.Content>
        <ProductTable.cells.Content label="No formatter" accent>
          <ProductTable.data.Value value={1000} unit={null} subscript="" />
        </ProductTable.cells.Content>
      </ProductTable.Row>
    </React.Fragment>
  )
}

export const ExampleWithMultipleAccents = () => {
  return (
    <ProductTable.Row preTitle="Sponsored" rowTitle="Super Saver April 2021">
      <ProductTable.cells.Image>
        <img
          src="https://placekitten.com/200/75?image=1"
          alt="Salman"
          sx={{ height: 75, width: '100%', objectFit: 'cover' }}
        />
      </ProductTable.cells.Image>
      <ProductTable.cells.Split>
        <ProductTable.cells.Content label="Fixed rate contract">
          14 months
        </ProductTable.cells.Content>
        <ProductTable.cells.Content label="Early exit fee">
          £30 per fuel
        </ProductTable.cells.Content>
      </ProductTable.cells.Split>
      <ProductTable.cells.Content label="Annual saving" accent>
        <ProductTable.data.Range from={30} to={260} unit="pounds" />
      </ProductTable.cells.Content>
      <ProductTable.cells.Content label="Annual saving" accent>
        <ProductTable.data.Range from={30} to={260} unit="pounds" />
      </ProductTable.cells.Content>
      <ProductTable.cells.Cta
        primary={<ButtonLink variant="primary">Button</ButtonLink>}
        secondary={<ButtonLink variant="link">Plan info</ButtonLink>}
      />
    </ProductTable.Row>
  )
}
