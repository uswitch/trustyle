/** @jsx jsx */
import { useState } from 'react'
import { css, jsx } from '@emotion/core'
import { number } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import { DropDown } from './'

export default {
  title: 'Elements|Dropdown'
}

const options = [
  { value: 'red', text: 'Red' },
  { value: 'blue', text: 'Blue' },
  { value: 'yellow', text: 'Yellow' }
]

const Spacer = () => <div css={css({ minHeight: 20 })} />

const ColourSelect = () => {
  const [val, setVal] = useState('red')
  return (
    <DropDown
      name="example"
      onBlur={() => {}}
      onChange={setVal}
      options={options}
      value={val}
    />
  )
}

const FrozenColourSelect = () => {
  const [val, setVal] = useState('red')
  return (
    <DropDown
      freezable
      name="frozen-example"
      onBlur={() => {}}
      onChange={setVal}
      options={options}
      value={val}
    />
  )
}

export const Example = () => (
  <div css={css({ padding: number('Padding', 10) })}>
    <ColourSelect />

    <Spacer />

    <FrozenColourSelect />

    <Spacer />

    <DropDown
      hasError
      name="withError"
      onBlur={() => {}}
      onChange={() => {}}
      options={[{ value: '', text: 'Incorrect' }]}
      value={''}
    />
  </div>
)

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
