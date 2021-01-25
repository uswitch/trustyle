/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import { SimpleInput } from '.'

export default {
  title: 'Elements/Simple Input'
}

const Spacer = () => <div sx={{ height: 10 }} />

export const Example = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  React.useEffect(() => {
    if (inputRef.current) inputRef.current.value = 'Ref is working'
  })

  return (
    <React.Fragment>
      <Spacer />
      <SimpleInput
        aria-label="Simple input"
        name="example"
        type="text"
        placeholder="Placeholder"
      />
      <Spacer />
      <SimpleInput
        aria-label="Simple input"
        name="example"
        type="text"
        defaultValue="Default Value"
      />
      <Spacer />
      <SimpleInput
        aria-label="Simple input"
        hasError
        name="example"
        type="text"
        defaultValue="Error"
      />
      <Spacer />
      <SimpleInput
        aria-label="Simple input"
        prefix="£"
        name="example"
        type="text"
      />
      <Spacer />
      <SimpleInput
        aria-label="Simple input"
        suffix="years"
        name="example"
        type="number"
        min="1"
        max="5"
      />
      <Spacer />
      <SimpleInput
        aria-label="Simple input"
        hasError
        prefix="£"
        name="example"
        type="text"
        defaultValue="Error"
      />
      <Spacer />
      <SimpleInput
        aria-label="Simple input"
        ref={inputRef}
        name="example"
        type="text"
        defaultValue="Ref isn't working"
      />
      <Spacer />
      <SimpleInput
        aria-label="Simple input"
        name="example"
        type="text"
        suffix="years"
        defaultValue="100"
        inputSize="sm"
      />
      <Spacer />
      <SimpleInput
        aria-label="Simple input"
        name="example"
        type="text"
        defaultValue="sm"
        inputSize="sm"
      />
      <SimpleInput
        aria-label="Simple input"
        name="example"
        type="text"
        uppercase
        placeholder="Uppercase example"
      />
    </React.Fragment>
  )
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
