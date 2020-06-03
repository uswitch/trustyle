/** @jsx jsx */
import { ChangeEvent, useState } from 'react'
import { jsx } from '@emotion/core'
import { boolean } from '@storybook/addon-knobs'
import { Stack } from '@uswitch/trustyle.arrangement'

import AllThemes from '../../../utils/all-themes'
import { Fieldset } from '../../fieldset/src'

import { CheckboxInput } from './.'

export default {
  title: 'Elements|CheckboxInput'
}

const initialValues = {
  a: true,
  b: false,
  c: false,
  d: false
}

const Form = () => {
  const slim = boolean('Slim', false)
  const [values, setValues] = useState(initialValues)

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [event.target.value]: event.target.checked })
  }

  return (
    <Fieldset label="Example checkboxes">
      <Stack spacing={[8]}>
        {Object.entries(values).map(([value, checked], ind) => (
          <CheckboxInput
            key={ind}
            name="example"
            checked={checked}
            onChange={changeHandler}
            value={value}
            label={value.toUpperCase()}
            slim={slim}
          />
        ))}
      </Stack>
    </Fieldset>
  )
}

export const Example = () => {
  return <Form />
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
