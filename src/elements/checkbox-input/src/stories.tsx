/** @jsx jsx */
import { ChangeEvent, useState } from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import { Stack } from '@uswitch/trustyle.arrangement'

import { Fieldset } from '../../fieldset/src'

import { CheckboxInput } from './.'

const initialValues = {
  a: false,
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

storiesOf('Elements|CheckboxInput', module).add('Example', () => {
  return <Form />
})
