/** @jsx jsx */
import { ChangeEvent, useState } from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

import { RadioGroup } from '../../radio-group/src'

import { TileInput } from './.'

const initialValues = {
  a: false,
  b: false,
  c: false,
  d: false
}

const Form = ({ type }: { type: 'radio' | 'checkbox' }) => {
  const [values, setValues] = useState(initialValues)

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value)
    const rest = type === 'radio' ? initialValues : values
    setValues({ ...rest, [event.target.value]: event.target.checked })
  }

  return (
    <div css={css({ padding: number('Padding', 10) })}>
      <RadioGroup>
        {Object.entries(values).map(([value, checked]) => (
          <TileInput
            key={value}
            name="example"
            type={type}
            checked={checked}
            onChange={changeHandler}
            value={value}
            label={value.toUpperCase()}
          >
            {checked ? '🙉' : '🙈'}
          </TileInput>
        ))}
      </RadioGroup>
    </div>
  )
}

storiesOf('Elements|TileInput', module)
  .add('Radio', () => {
    return <Form type="radio" />
  })
  .add('Checkbox', () => {
    return <Form type="checkbox" />
  })
