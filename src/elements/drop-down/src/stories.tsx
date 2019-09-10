/** @jsx jsx */
import { useState } from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

import { DropDown } from './'

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

storiesOf('Elements|DropDown', module).add('example', () => (
  <div css={css({ padding: number('Padding', 10) })}>
    <ColourSelect />

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
))
