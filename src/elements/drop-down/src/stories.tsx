/** @jsx jsx */
import { useState } from 'react'
import { jsx, useThemeUI } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'
import ThemedIcon from '../../themed-icon/src'

import { DropDown } from './'

export default {
  title: 'Elements|Dropdown'
}

const options = [
  { value: 'red', text: 'Red' },
  { value: 'blue', text: 'Blue' },
  { value: 'yellow', text: 'Yellow' }
]

const Spacer = () => <div sx={{ minHeight: 20 }} />

const ColourSelect = () => {
  const [val, setVal] = useState('red')
  return (
    <DropDown
      name="example"
      onBlur={() => {}}
      onChange={setVal}
      options={options}
      value={val}
    />
  )
}

const FrozenColourSelect = () => {
  const [val, setVal] = useState('red')
  return (
    <DropDown
      freezable
      name="frozen-example"
      onBlur={() => {}}
      onChange={setVal}
      options={options}
      value={val}
    />
  )
}

const SelectWithOverlay = () => {
  const { theme }: any = useThemeUI()
  const [val, setVal] = useState('red')

  const icon = theme.name === 'Money' ? 'sort' : 'car'
  const iconColor = theme.name === 'Money' ? 'fuschia' : 'red'
  return (
    <DropDown
      name="overlay-example"
      onBlur={() => {}}
      onChange={setVal}
      options={options}
      value={val}
      overlay={
        <span>
          <ThemedIcon
            icon={icon}
            sx={{ marginRight: 'xs', color: iconColor }}
          />
          Sort by
        </span>
      }
      sx={{ borderColor: 'grey-20' }}
    />
  )
}

export const Example = () => (
  <div>
    <ColourSelect />

    <Spacer />

    <FrozenColourSelect />

    <Spacer />

    <DropDown
      hasError
      name="withError"
      onBlur={() => {}}
      onChange={() => {}}
      options={[{ value: '', text: 'Incorrect' }]}
      value={''}
    />

    <Spacer />

    <SelectWithOverlay />
  </div>
)

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
