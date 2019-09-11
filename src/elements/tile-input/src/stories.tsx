/** @jsx jsx */
import { useState, ChangeEvent } from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

import { TileInput } from './.'

import { RadioGroup } from '../../radio-group/src'

const valuesRadio = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D'
}

const Form = () => {
  const [val, setVal] = useState('')
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value)
    setVal(event.target.value)
  }
  return (
    <div css={css({ padding: number('Padding', 10) })}>
      <RadioGroup>
        {Object.keys(valuesRadio).map(radioValue => (
          <TileInput
            key={radioValue}
            name="example"
            checked={radioValue === val}
            onChange={onChange}
            value={radioValue}
            label={radioValue}
          >
            🐱
          </TileInput>
        ))}
      </RadioGroup>
    </div>
  )
}

storiesOf('Elements|TileInputs', module).add('Example', () => {
  return <Form />
})
