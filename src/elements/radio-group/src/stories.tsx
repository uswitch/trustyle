/** @jsx jsx */
import { ChangeEvent, useState } from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { Container, Row, Column } from '@uswitch/trustyle.grid'

import { RadioInput } from '../../radio-input/src'

import { RadioGroup } from './'

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
    <Container>
      <Row>
        <RadioGroup>
          {Object.keys(valuesRadio).map(radioValue => (
            <Column s={1/2} m={1/4} l={1/4}>
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
        </RadioGroup>
      </Row>
    </Container>
  )
}

storiesOf('Elements|RadioGroup', module).add('Example', () => {
  return <Form />
})
