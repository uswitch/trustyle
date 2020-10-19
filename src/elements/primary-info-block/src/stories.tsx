/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import PrimaryInfoBlock from './'

export default {
  title: 'Elements/Primary Info Block'
}

export const Example = () => {
  const values = [
    {
      value: 10,
      suffix: 'GB',
      label: 'data'
    },
    {
      value: 'unlimited',
      label: 'data'
    },
    {
      value: '10.00',
      prefix: '£',
      label: 'per month'
    }
  ]

  const allVariants = values.map((val, i) => (
    <div css={css({ margin: '16px 0' })} key={i}>
      <PrimaryInfoBlock
        prefix={val.prefix}
        value={val.value}
        suffix={val.suffix}
        label={val.label}
      />
    </div>
  ))

  return (
    <div>
      <PrimaryInfoBlock
        prefix={text('prefix', '£')}
        value={text('value', '10.00')}
        suffix={text('suffix', '')}
        label={text('label', 'per month')}
      />
      <div>
        <h3>With stubbed data:</h3>
        {allVariants}
      </div>
    </div>
  )
}

Example.story = {
  parameters: {
    percy: { skip: true }
  }
}
export const AutomatedTests = () => {
  return (
    <AllThemes>
      <Example />
    </AllThemes>
  )
}
