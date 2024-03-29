/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import { Global } from '@emotion/react'

import { ButtonLink } from '../../../elements/button-link/src'
import Badge from '../../../elements/badge/src'
import { ProgressBar } from '../../../elements/progress-bar/src'
import AllThemes from '../../../utils/all-themes'

import ProductTable, { AddonArg } from './index'

export default {
  title: 'Compounds/Product Table'
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
  const infoAddon = boolean('Show info via addon?', true)

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
    ),
    Auto: <ProductTable.data.Auto text="£10 - £20/month" />
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

  const card = boolean('Card', false)

  const getColumn = (col: Column): React.ReactNode => {
    if (col === 'Placeholder') {
      return <ProductTable.cells.Placeholder />
    }

    if (col === 'Image') {
      return (
        <ProductTable.cells.Image>
          <img src="https://placekitten.com/42/75?image=9" alt="Salman" />
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
          <div sx={{ fontSize: ['xxs', 'xs'] }}>
            Representative example: Assumed borrowing of £10,000 over...
          </div>
        </ProductTable.cells.Base>
      )
    })
  }

  if (infoAddon) {
    addons.push({
      addon: ProductTable.addons.info,
      component: (
        <ProductTable.cells.Base sx={{ display: 'block' }} mobileOrder={100}>
          <div sx={{ fontSize: ['xxs', 'xs'] }}>
            Here&apos;s some extra info...
          </div>
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
        id="deal-1"
        badges={badges}
        preTitle={preTitle}
        rowTitle={rowTitle}
        subtitle={subtitle}
        addons={addons}
        card={card}
      >
        {getColumn(firstCol)}
        {getColumn(secondCol)}
        {getColumn(thirdCol)}
        {getColumn(fourthCol)}
        <ProductTable.cells.Cta
          primary={
            <ButtonLink variant="primary" size="small">
              {buttonText}
            </ButtonLink>
          }
          secondary={
            <ButtonLink variant="link" size="small">
              {linkText}
            </ButtonLink>
          }
        />
      </ProductTable.Row>
    </React.Fragment>
  )
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
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
          sx={{ height: 75, width: '100%', objectFit: 'cover' as const }}
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

Example1.story = {
  parameters: {
    percy: { skip: true }
  }
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
            sx={{ height: 75, width: '100%', objectFit: 'cover' as const }}
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

Example2.story = {
  parameters: {
    percy: { skip: true }
  }
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
                  textAlign: 'center' as const,
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
                sx={{
                  height: 75,
                  width: '100%',
                  objectFit: 'cover' as const
                }}
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
              <div sx={{ fontSize: ['xxs', 'xs'] }}>
                Representative example: Assumed borrowing of £10,000 over...
              </div>
            </ProductTable.cells.Base>
          )
        },
        {
          addon: ProductTable.addons.accordion,
          component: (
            <ProductTable.cells.Base sx={{ display: 'block' }}>
              <div sx={{ fontSize: ['xxs', 'xs'] }}>More info</div>
            </ProductTable.cells.Base>
          )
        }
      ]}
    >
      <ProductTable.cells.Split>
        <ProductTable.cells.Content label="Fixed rate contract">
          14 months
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

ExampleWithAddons.story = {
  parameters: {
    percy: { skip: true }
  }
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
          <ProductTable.data.Value value={1000} unit="" subscript="" />
        </ProductTable.cells.Content>
      </ProductTable.Row>
    </React.Fragment>
  )
}

ExampleWithNumberFormatters.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const ExampleWithMultipleAccents = () => {
  return (
    <ProductTable.Row preTitle="Sponsored" rowTitle="Super Saver April 2021">
      <ProductTable.cells.Image>
        <img
          src="https://placekitten.com/200/75?image=1"
          alt="Salman"
          sx={{ height: 75, width: '100%', objectFit: 'cover' as const }}
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

ExampleWithMultipleAccents.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const ExampleStacked = () => {
  return (
    <React.Fragment>
      <ProductTable.Row preTitle="Sponsored" rowTitle="Super Saver April 2021">
        <ProductTable.cells.Image>
          <img
            src="https://placekitten.com/200/75?image=1"
            alt="Salman"
            sx={{ height: 75, width: '100%', objectFit: 'cover' as const }}
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
        />
      </ProductTable.Row>

      <ProductTable.Row preTitle="Sponsored" rowTitle="Super Saver April 2021">
        <ProductTable.cells.Image>
          <img
            src="https://placekitten.com/200/75?image=1"
            alt="Salman"
            sx={{ height: 75, width: '100%', objectFit: 'cover' as const }}
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
    </React.Fragment>
  )
}

ExampleStacked.story = {
  parameters: {
    percy: { skip: true }
  }
}

const clickableRow = 'https://www.money.co.uk'

export const ClickableExample = () => {
  return (
    <React.Fragment>
      <ProductTable.Row
        preTitle="Sponsored"
        rowTitle="Clickable Row"
        clickableRow={clickableRow}
      >
        <ProductTable.cells.Image>
          <img
            src="https://placekitten.com/200/75?image=1"
            alt="Salman"
            sx={{ height: 75, width: '100%', objectFit: 'cover' as const }}
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
        />
      </ProductTable.Row>

      <ProductTable.Row
        preTitle="Sponsored"
        rowTitle="Clickable Row"
        clickableRow={clickableRow}
      >
        <ProductTable.cells.Image>
          <img
            src="https://placekitten.com/200/75?image=1"
            alt="Salman"
            sx={{ height: 75, width: '100%', objectFit: 'cover' as const }}
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
    </React.Fragment>
  )
}

ClickableExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const MoneyRedesignExample = () => {
  return (
    <ProductTable.Row
      rowTitle="Santander Standard Loan (Online)"
      image={
        <ProductTable.cells.HeaderImage>
          <img
            src="https://placekitten.com/200/75?image=9"
            alt="Salman"
            sx={{ height: 75, width: '100%', objectFit: 'cover' as const }}
          />
        </ProductTable.cells.HeaderImage>
      }
      addons={[
        {
          addon: ProductTable.addons.info,
          component: (
            <ProductTable.cells.Base sx={{ display: 'block' }}>
              <div sx={{ fontWeight: 'bold', display: ['none', 'block'] }}>
                Additional information:
              </div>
              <div>
                Here is some extra information. Here is even more extra
                information. And more extra information.
              </div>
            </ProductTable.cells.Base>
          ),
          options: {
            split: true,
            headerImage: true
          }
        },
        {
          addon: ProductTable.addons.footer,
          component: (
            <ProductTable.cells.Base sx={{ display: 'block' }}>
              <div sx={{ fontWeight: 'bold', display: ['inline', 'block'] }}>
                Representative example:
              </div>
              <div>Assumed borrowing of £10,000 over...</div>
            </ProductTable.cells.Base>
          ),
          options: {
            split: true,
            headerImage: true
          }
        },
        {
          addon: ProductTable.addons.accordion,
          component: (
            <ProductTable.cells.Base sx={{ display: 'block' }}>
              <div sx={{ fontSize: ['xxs', 'xs'] }}>More info</div>
            </ProductTable.cells.Base>
          )
        }
      ]}
    >
      <ProductTable.cells.Content label="Loan Amount" headerImage>
        <ProductTable.data.Auto text="£1000 to £10000" headerImage />
      </ProductTable.cells.Content>
      <ProductTable.cells.Content label="Representative APR" headerImage>
        <ProductTable.data.Auto
          text="49.9% APR (£1,000 to £10,000)"
          headerImage
        />
      </ProductTable.cells.Content>
      <ProductTable.cells.Content label="Loan Term" headerImage>
        <ProductTable.data.Auto text="1 year to 5 years" headerImage />
      </ProductTable.cells.Content>
      <ProductTable.cells.Image headerImage>
        <img
          src="https://placekitten.com/200/75?image=1"
          alt="Salman"
          sx={{ height: 75, width: '100%', objectFit: 'cover' as const }}
        />
      </ProductTable.cells.Image>
      <ProductTable.cells.Cta
        primary={<ButtonLink variant="primary">Apply now</ButtonLink>}
        headerImage
      />
    </ProductTable.Row>
  )
}

MoneyRedesignExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const MoneyRedesignExampleNoImage = () => {
  return (
    <ProductTable.Row
      rowTitle="Santander Standard Loan (Online)"
      image={
        <ProductTable.cells.HeaderImage>
          <img
            src="https://placekitten.com/200/75?image=9"
            alt="Salman"
            sx={{ height: 75, width: '100%', objectFit: 'cover' as const }}
          />
        </ProductTable.cells.HeaderImage>
      }
      addons={[
        {
          addon: ProductTable.addons.info,
          component: (
            <ProductTable.cells.Base sx={{ display: 'block' }}>
              <div sx={{ fontWeight: 'bold', display: ['none', 'block'] }}>
                Additional information:
              </div>
              <div>
                Here is some extra information. Here is even more extra
                information. And more extra information.
              </div>
            </ProductTable.cells.Base>
          ),
          options: {
            split: true,
            headerImage: true
          }
        },
        {
          addon: ProductTable.addons.footer,
          component: (
            <ProductTable.cells.Base sx={{ display: 'block' }}>
              <div sx={{ fontWeight: 'bold', display: ['inline', 'block'] }}>
                Representative example:
              </div>
              <div>Assumed borrowing of £10,000 over...</div>
            </ProductTable.cells.Base>
          ),
          options: {
            split: true,
            headerImage: true
          }
        },
        {
          addon: ProductTable.addons.accordion,
          component: (
            <ProductTable.cells.Base sx={{ display: 'block' }}>
              <div sx={{ fontSize: ['xxs', 'xs'] }}>More info</div>
            </ProductTable.cells.Base>
          )
        }
      ]}
    >
      <ProductTable.cells.Content label="Loan Amount" headerImage>
        <ProductTable.data.Auto text="£1000 to £10000" headerImage />
      </ProductTable.cells.Content>
      <ProductTable.cells.Content label="Representative APR" headerImage>
        <ProductTable.data.Auto
          text="49.9% APR (£1,000 to £10,000)"
          headerImage
        />
      </ProductTable.cells.Content>
      <ProductTable.cells.Content label="Loan Term" headerImage>
        <ProductTable.data.Auto text="1 year to 5 years" headerImage />
      </ProductTable.cells.Content>
      <ProductTable.cells.Content label="Monthly Cost" headerImage>
        <ProductTable.data.Auto text="£100,000" headerImage />
      </ProductTable.cells.Content>
      <ProductTable.cells.Cta
        primary={<ButtonLink variant="primary">Apply now</ButtonLink>}
        headerImage
      />
    </ProductTable.Row>
  )
}

MoneyRedesignExampleNoImage.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const MoneyRedesignExampleWithPercentage = () => {
  return (
    <ProductTable.Row
      rowTitle="Santander Standard Loan (Online)"
      image={
        <ProductTable.cells.HeaderImage>
          <img
            src="https://placekitten.com/200/75?image=9"
            alt="Salman"
            sx={{ height: 75, width: '100%', objectFit: 'cover' as const }}
          />
        </ProductTable.cells.HeaderImage>
      }
      addons={[
        {
          addon: ProductTable.addons.info,
          component: (
            <ProductTable.cells.Base sx={{ display: 'block' }}>
              <div sx={{ fontWeight: 'bold', display: ['none', 'block'] }}>
                Additional information:
              </div>
              <div>
                Here is some extra information. Here is even more extra
                information. And more extra information.
              </div>
            </ProductTable.cells.Base>
          ),
          options: {
            split: true,
            headerImage: true
          }
        },
        {
          addon: ProductTable.addons.footer,
          component: (
            <ProductTable.cells.Base sx={{ display: 'block' }}>
              <div sx={{ fontWeight: 'bold', display: ['inline', 'block'] }}>
                Representative example:
              </div>
              <div>Assumed borrowing of £10,000 over...</div>
            </ProductTable.cells.Base>
          ),
          options: {
            split: true,
            headerImage: true
          }
        },
        {
          addon: ProductTable.addons.accordion,
          component: (
            <ProductTable.cells.Base sx={{ display: 'block' }}>
              <div sx={{ fontSize: ['xxs', 'xs'] }}>More info</div>
            </ProductTable.cells.Base>
          )
        }
      ]}
    >
      <ProductTable.cells.Content label="Loan Amount" headerImage>
        <ProductTable.data.Auto text="£1000 to £10000" headerImage />
      </ProductTable.cells.Content>
      <ProductTable.cells.Content label="Representative APR" headerImage>
        <ProductTable.data.Auto
          text="49.9% APR (£1,000 to £10,000)"
          headerImage
        />
      </ProductTable.cells.Content>
      <ProductTable.cells.Content label="Loan Term" headerImage>
        <ProductTable.data.Auto text="1 year to 5 years" headerImage />
      </ProductTable.cells.Content>
      <ProductTable.cells.Content
        label="Chance of acceptance"
        headerImage
        singleLine
      >
        <ProductTable.data.CircularPercentageBar
          percentage={50}
          size="xs"
          align={['end', 'start']}
        />
      </ProductTable.cells.Content>
      <ProductTable.cells.Cta
        primary={<ButtonLink variant="primary">Apply now</ButtonLink>}
        headerImage
      />
    </ProductTable.Row>
  )
}

MoneyRedesignExampleWithPercentage.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const MoneyRedesignExampleWithBanner = () => {
  const badgeText =
    'Fair finance gld customer experience ribbon winner autumn 2020'
  const badges = badgeText
    ? [<Badge key="award-winner">{badgeText}</Badge>]
    : []

  const bannerInfo = {
    text: 'You’ve been pre-approved for this card and rate today. ',
    link: 'https://www.money.co.uk/mortgages.htm',
    linkText: 'What does this mean'
  }

  return (
    <ProductTable.Row
      rowTitle="Santander Standard Loan (Online)"
      image={
        <ProductTable.cells.HeaderImage>
          <img
            src="https://placekitten.com/200/75?image=9"
            alt="Salman"
            sx={{ height: 75, width: '100%', objectFit: 'cover' as const }}
          />
        </ProductTable.cells.HeaderImage>
      }
      addons={[
        {
          addon: ProductTable.addons.info,
          component: (
            <ProductTable.cells.Base sx={{ display: 'block' }}>
              <div sx={{ fontWeight: 'bold', display: ['none', 'block'] }}>
                Additional information:
              </div>
              <div>
                Here is some extra information. Here is even more extra
                information. And more extra information.
              </div>
            </ProductTable.cells.Base>
          ),
          options: {
            split: true,
            headerImage: true
          }
        },
        {
          addon: ProductTable.addons.footer,
          component: (
            <ProductTable.cells.Base sx={{ display: 'block' }}>
              <div sx={{ fontWeight: 'bold', display: ['inline', 'block'] }}>
                Representative example:
              </div>
              <div>Assumed borrowing of £10,000 over...</div>
            </ProductTable.cells.Base>
          ),
          options: {
            split: true,
            headerImage: true
          }
        },
        {
          addon: ProductTable.addons.accordion,
          component: (
            <ProductTable.cells.Base sx={{ display: 'block' }}>
              <div sx={{ fontSize: ['xxs', 'xs'] }}>More info</div>
            </ProductTable.cells.Base>
          )
        }
      ]}
      badges={badges}
      preApproved
      bannerInfo={bannerInfo}
    >
      <ProductTable.cells.Content label="Loan Amount" headerImage>
        <ProductTable.data.Auto text="£1000 to £10000" headerImage />
      </ProductTable.cells.Content>
      <ProductTable.cells.Content label="Representative APR" headerImage>
        <ProductTable.data.Auto
          text="49.9% APR (£1,000 to £10,000)"
          headerImage
        />
      </ProductTable.cells.Content>
      <ProductTable.cells.Content label="Loan Term" headerImage>
        <ProductTable.data.Auto text="1 year to 5 years" headerImage />
      </ProductTable.cells.Content>
      <ProductTable.cells.Content label="Chance of acceptance" headerImage>
        <ProductTable.data.CircularPercentageBar
          percentage={50}
          size="xs"
          align="start"
        />
      </ProductTable.cells.Content>
      <ProductTable.cells.Cta
        primary={<ButtonLink variant="primary">Apply now</ButtonLink>}
        headerImage
      />
    </ProductTable.Row>
  )
}

MoneyRedesignExampleWithBanner.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const MoneyRedesignExampleWithWireframe = () => {
  return (
    <ProductTable.Row
      isWireFrame
      rowTitle="Santander Standard Loan (Online)"
      image={
        <ProductTable.cells.HeaderImage>
          <img
            src="https://placekitten.com/200/75?image=9"
            alt="Salman"
            sx={{ height: 75, width: '100%', objectFit: 'cover' as const }}
          />
        </ProductTable.cells.HeaderImage>
      }
      addons={[
        {
          addon: ProductTable.addons.info,
          component: (
            <ProductTable.cells.Base sx={{ display: 'block' }}>
              <div sx={{ fontWeight: 'bold', display: ['none', 'block'] }}>
                Additional information:
              </div>
              <div>
                Here is some extra information. Here is even more extra
                information. And more extra information.
              </div>
            </ProductTable.cells.Base>
          ),
          options: {
            split: false,
            headerImage: true
          }
        },
        {
          addon: ProductTable.addons.footer,
          component: (
            <ProductTable.cells.Base sx={{ display: 'block' }}>
              <div sx={{ fontWeight: 'bold', display: ['inline', 'block'] }}>
                Representative example:
              </div>
              <div>Assumed borrowing of £10,000 over...</div>
            </ProductTable.cells.Base>
          ),
          options: {
            split: false,
            headerImage: true
          }
        }
      ]}
    >
      <ProductTable.cells.Content label="Loan Amount" headerImage isWireFrame>
        <ProductTable.data.Auto text="£1000 to £10000" headerImage />
      </ProductTable.cells.Content>
      <ProductTable.cells.Content
        label="Representative APR"
        headerImage
        isWireFrame
      >
        <ProductTable.data.Auto
          text="49.9% APR (£1,000 to £10,000)"
          headerImage
        />
      </ProductTable.cells.Content>
      <ProductTable.cells.Content label="Loan Term" headerImage isWireFrame>
        <ProductTable.data.Auto text="1 year to 5 years" headerImage />
      </ProductTable.cells.Content>
      <ProductTable.cells.Content
        label="Chance of acceptance"
        headerImage
        isWireFrame
      >
        <ProductTable.data.CircularPercentageBar
          percentage={50}
          size="xs"
          align="start"
        />
      </ProductTable.cells.Content>
      <ProductTable.cells.Cta
        primary={<ButtonLink variant="primary">Apply now</ButtonLink>}
        headerImage
        isWireFrame
      />
    </ProductTable.Row>
  )
}

MoneyRedesignExampleWithWireframe.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const DisabledExample = () => {
  return (
    <React.Fragment>
      <ProductTable.Row
        preTitle="Sponsored"
        rowTitle="Clickable Row"
        clickableRow={clickableRow}
      >
        <ProductTable.cells.Image>
          <img
            src="https://placekitten.com/200/75?image=1"
            alt="Salman"
            sx={{ height: 75, width: '100%', objectFit: 'cover' as const }}
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
        />
      </ProductTable.Row>

      <ProductTable.Row
        preTitle="Sponsored"
        rowTitle="Clickable Row"
        clickableRow={clickableRow}
        disabled
      >
        <ProductTable.cells.Image>
          <img
            src="https://placekitten.com/200/75?image=1"
            alt="Salman"
            sx={{ height: 75, width: '100%', objectFit: 'cover' as const }}
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
    </React.Fragment>
  )
}

DisabledExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

const Spacer = () => <div sx={{ minHeight: 20 }} />

export const AutomatedTests = () => {
  return (
    <AllThemes themes={['uswitch', 'money']}>
      <Example1 />
      <Spacer />
      <Example2 />
      <Spacer />
      <ExampleWithAddons />
      <Spacer />
      <ExampleWithNumberFormatters />
      <Spacer />
      <ExampleWithMultipleAccents />
      <Spacer />
      <ExampleStacked />
      <Spacer />
      <MoneyRedesignExample />
      <Spacer />
      <MoneyRedesignExampleWithPercentage />
      <Spacer />
      <MoneyRedesignExampleWithBanner />
      <Spacer />
      <MoneyRedesignExampleWithWireframe />
      <Spacer />
      <DisabledExample />
    </AllThemes>
  )
}
