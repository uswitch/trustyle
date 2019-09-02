import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { radios, optionsKnob as options } from '@storybook/addon-knobs'

import { RadioInput, Width } from '../../radio-input'

import { RadioGroup } from './'

const widthOptions: Record<string, Width> = {
  Full: 'full',
  Half: 'half'
}

const valuesRadio = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E'
}

storiesOf('Elements|RadioGroup', module)
  .add('consistent width', () => {
    const width = radios('Width', widthOptions, 'full')
    const optionSelect = options('Radio', valuesRadio, 'A', { display: 'radio' })

    return (
      <RadioGroup>
        {Object.keys(valuesRadio).map(radioValue => (
          <RadioInput
            key={radioValue}
            name="example"
            label={radioValue}
            checked={radioValue === optionSelect}
            value={optionSelect}
            width={width}
          />
        ))}
      </RadioGroup>
    )
  })
  .add('mixed widths', () => {
    return (
      <RadioGroup>
        <RadioInput
          label="A"
          name="example"
          value="a"
          width="half"
        />
        <RadioInput
          label="B"
          name="example"
          value="b"
          width="half"
        />
        <RadioInput
          label="C"
          name="example"
          value="c"
          width="half"
        />
        <RadioInput
          label="D"
          name="example"
          checked
          value="d"
          width="half"
        />
        <RadioInput
          label="E"
          name="example"
          value="e"
          width="full"
        />
      </RadioGroup>
    )
  })
