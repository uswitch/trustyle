import React from 'react'
import { storiesOf } from '@storybook/react'
import { array, radios } from '@storybook/addon-knobs'

import { RadioInput, Width } from '../../radio-input'

import { RadioGroup } from './'

const widthOptions: Record<string, Width> = {
  Full: 'full',
  Half: 'half'
}

const defaultChoices = ['A', 'B', 'C', 'D']

storiesOf('Elements|RadioGroup', module)
  .add('consistent width', () => {
    const width = radios('Width', widthOptions, 'full')
    const choices = array('Choices', defaultChoices)

    return (
      <RadioGroup>
        {choices.map(choice => (
          <RadioInput
            key={choice}
            name="example"
            label={choice}
            onBlur={() => {}}
            onChange={() => {}}
            selected={choices[0]}
            value={choice}
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
          onBlur={() => {}}
          onChange={() => {}}
          selected="d"
          value="a"
          width="half"
        />
        <RadioInput
          label="B"
          name="example"
          onBlur={() => {}}
          onChange={() => {}}
          selected="d"
          value="b"
          width="half"
        />
        <RadioInput
          label="C"
          name="example"
          onBlur={() => {}}
          onChange={() => {}}
          selected="d"
          value="c"
          width="half"
        />
        <RadioInput
          label="D"
          name="example"
          onBlur={() => {}}
          onChange={() => {}}
          selected="d"
          value="d"
          width="half"
        />
        <RadioInput
          label="E"
          name="example"
          onBlur={() => {}}
          onChange={() => {}}
          selected="d"
          value="e"
          width="full"
        />
      </RadioGroup>
    )
  })
