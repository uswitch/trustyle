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

storiesOf('Global Styles|Colours', module).add('SwatchesAndSnapshot', () => (
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
  a: 'Anchor'
}

storiesOf('Global Styles|Typography', module).add('TypesAndSnapshot', () => {
  const overrides: { [key: string]: React.ReactNode } = {
    root: ({ children }: any) => <p>{children}</p>,
    '.medium': ({ children }: any) => <p className="medium">{children}</p>,
    '.small': ({ children }: any) => <p className="small">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote>
        <p>{children}</p>
      </blockquote>
    )
  }

  return Object.keys(theme().styles).map((key: string) => {
    const textValue = text(`Text ${key}`, typeNames[key] || key)

    const Comp = overrides[key] ? overrides[key] : key
    // @ts-ignore
    return <Comp key={key}>{textValue}</Comp>
  })
})
