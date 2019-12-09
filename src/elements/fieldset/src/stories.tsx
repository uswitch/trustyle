/** @jsx jsx */
import { ChangeEvent, useState } from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { Container, Row, Column } from '@uswitch/trustyle.grid'

import { RadioInput } from '../../radio-input/src'

import { Fieldset } from './'

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

  return (
    <Container css={{ marginTop: '8px' }}>
      <Fieldset label="Example radio buttons">
        <Row>
          {Object.keys(valuesRadio).map(radioValue => (
            <Column s={1 / 2} m={1 / 4} l={1 / 4} paddingTop paddingBottom>
              <RadioInput
                key={radioValue}
                name="example"
                label={radioValue}
                checked={radioValue === val}
                onChange={onChange}
                value={radioValue}
              />
            </Column>
          ))}
        </Row>
      </Fieldset>
    </Container>
  )
}

storiesOf('Elements|Fieldset', module).add('Example', () => {
  return <Form />
})
