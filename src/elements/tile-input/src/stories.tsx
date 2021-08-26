/** @jsx jsx */
import { ChangeEvent, useState } from 'react'
import { jsx } from '@emotion/react'
import { Column, Container, Row } from '@uswitch/trustyle.grid'

import AllThemes from '../../../utils/all-themes'
import { Fieldset } from '../../fieldset/src'

import { TileInput } from './'

const initialValues = {
  a: false,
  b: false,
  c: false,
  d: false
}

interface Props {
  type: 'radio' | 'checkbox'
  useHooks?: boolean
}

const Form: React.FC<Props> = ({ type, useHooks = false }) => {
  const [val, setVal] = useState<any>(initialValues)

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (useHooks) {
      console.log(`${event.target.value} :>> `, event.target.checked)
      const rest = type === 'radio' ? initialValues : val
      setVal({ ...rest, [event.target.value]: event.target.checked })
    } else {
      setVal({ ...initialValues, b: true })
    }
  }

  return (
    <Container css={{ marginTop: '4px' }}>
      <Fieldset label="Example tile buttons">
        <Row>
          {Object.entries(val).map(([value, checked]) => (
            <Column key={value} s={1 / 2} m={1 / 2} l={1 / 2}>
              <TileInput
                name="example"
                type={type}
                checked={Boolean(checked)}
                onChange={onChange}
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
  title: 'Elements/TileInput'
}

export const Radio = () => {
  return <Form type="radio" useHooks />
}

Radio.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const Checkbox = () => {
  return <Form type="checkbox" useHooks />
}

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

export const CheckboxSelected = () => {
  return <Form type="checkbox" />
}

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
