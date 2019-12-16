/** @jsx jsx */
import { ChangeEvent, useState } from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import { Column, Container, Row } from '@uswitch/trustyle.grid'

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
    <Container css={{ marginTop: '4px' }}>
      <Fieldset label="Example checkboxes">
        <Row>
          {Object.entries(values).map(([value, checked]) => (
            <Column key={value}>
              <CheckboxInput
                name="example"
                checked={checked}
                onChange={changeHandler}
                value={value}
                label={value.toUpperCase()}
                slim={slim}
              />
            </Column>
          ))}
        </Row>
      </Fieldset>
    </Container>
  )
}

storiesOf('Elements|CheckboxInput', module).add('Example', () => {
  return <Form />
})
