/** @jsx jsx */
import { useState, ChangeEvent } from 'react'
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { number, radios } from '@storybook/addon-knobs'

import { RadioInput, Width } from '../../radio-input/src'

import { RadioGroup } from './'

const widthOptions: Record<string, Width> = {
  Full: 'full',
  Half: 'half'
}

const valuesRadio = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D'
}

const Form = () => {
  const [val, setVal] = useState('')
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setVal(event.target.value)
  }
  const width = radios('Width', widthOptions, 'full')
  return (
    <div css={css({ padding: number('Padding', 10) })}>
      <RadioGroup>
        {Object.keys(valuesRadio).map(radioValue => (
          <RadioInput
            key={radioValue}
            name="example"
            label={radioValue}
            checked={radioValue === val}
            onChange={onChange}
            value={radioValue}
            width={width}
          />
        ))}
        <RadioInput
          name="example"
          label="E (Full Width)"
          checked={val === 'E'}
          onChange={onChange}
          value="E"
          width="full"
        />
      </RadioGroup>
    </div>
  )
}

storiesOf('Elements|RadioGroup', module).add('Example', () => {
  return <Form />
})
