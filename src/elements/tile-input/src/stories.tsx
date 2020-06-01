/** @jsx jsx */
import { ChangeEvent, useState } from 'react'
import { jsx } from '@emotion/core'
import { Column, Container, Row } from '@uswitch/trustyle.grid'

import AllThemes from '../../../utils/all-themes'
import { Fieldset } from '../../fieldset/src'

import { TileInput } from './.'

const initialValues = {
  a: false,
  b: false,
  c: false,
  d: false
}

const Form = ({
  type,
  useHooks = false
}: {
  type: 'radio' | 'checkbox'
  useHooks?: boolean
}) => {
  let values: any, changeHandler: any

  if (useHooks) {
    let setValues: any
    ;[values, setValues] = useState(initialValues)

    changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
      console.log(event.target.value)
      const rest = type === 'radio' ? initialValues : values
      setValues({ ...rest, [event.target.value]: event.target.checked })
    }
  } else {
    values = {
      ...initialValues,
      b: true
    }
    changeHandler = () => {}
  }

  return (
    <Container css={{ marginTop: '4px' }}>
      <Fieldset label="Example tiles">
        <Row centerX>
          {Object.entries(values).map(([value, checked]) => (
            <Column key={value} s={1 / 2} m={1 / 2} l={1 / 2}>
              <TileInput
                key={value}
                name="example"
                type={type}
                checked={checked as boolean}
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

export default {
  title: 'Elements|TileInput'
}

export const Radio = () => <Form type="radio" useHooks />

Radio.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const Checkbox = () => <Form type="checkbox" useHooks />

Checkbox.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const RadioSelected = () => <Form type="radio" />

RadioSelected.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const CheckboxSelected = () => <Form type="checkbox" />

CheckboxSelected.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes themes={['journey', 'uswitch']}>
      <Radio />
      <Checkbox />
      <RadioSelected />
      <CheckboxSelected />
    </AllThemes>
  )
}
