/** @jsx jsx */
import { ChangeEvent, useState } from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'

import { Container, Column, Row } from '@uswitch/trustyle.grid'

import { Fieldset } from '../../fieldset/src'

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
    <Container css={{marginTop: '4px'}}>
      <Fieldset label="Example tiles">
        <Row centerX>
          {Object.entries(values).map(([value, checked]) => (
            <Column s={1/2} m={1/2} l={1/2} paddingBottom paddingTop>
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
            </Column>
          ))}
        </Row>
      </Fieldset>
    </Container>
  )
}

storiesOf('Elements|TileInput', module)
  .add('Radio', () => {
    return <Form type="radio" />
  })
  .add('Checkbox', () => {
    return <Form type="checkbox" />
  })
