/** @jsx jsx */

import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { jsx } from 'theme-ui'
import { css } from '@emotion/core'
import { Interpolation } from '@emotion/serialize'

import theme from '../../../utils/theme-selector'

const swatch: Interpolation = {
  padding: '10px',
  display: 'inline-block',
  fontFamily: 'monospace',
  width: '100px',
  verticalAlign: 'top'
}

storiesOf('Global Styles/Colours', module).add('Swatches', () => (
  <div css={css({ margin: '-10px' })}>
    {Object.entries(theme().colors).map(([key, value]) => {
      const swatchBlock: Interpolation = {
        backgroundColor: value as string,
        width: '100px',
        height: '100px',
        border: '1px #e2e2e2 solid'
      }

      return (
        <div key={key} sx={swatch}>
          <div sx={swatchBlock} />
          {key}
        </div>
      )
    })}
  </div>
))

const typeNames: { [tag: string]: string } = {
  h1: 'Heading level 1',
  h2: 'Heading level 2',
  h3: 'Heading level 3',
  h4: 'Heading level 4',
  h5: 'Heading level 5',
  h6: 'Heading level 6',
  a: 'Anchor'
}

storiesOf('Global Styles/Typography', module).add('Types', () => {
  const overrides: { [key: string]: React.ReactNode } = {
    root: ({ children }: any) => <p>{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote>
        <p>{children}</p>
      </blockquote>
    ),
    heading: null,
    table: null,
    th: null,
    td: null,
    tr: null
  }

  return (
    <React.Fragment>
      {Object.keys(theme().styles).map((key: string) => {
        const textValue = text(`Text ${key}`, typeNames[key] || key)

        const Comp = overrides[key] !== undefined ? overrides[key] : key
        // @ts-ignore
        return Comp && <Comp key={key}>{textValue}</Comp>
      })}
    </React.Fragment>
  )
})
