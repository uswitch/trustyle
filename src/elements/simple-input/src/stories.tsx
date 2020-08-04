/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import { SimpleInput } from '.'

export default {
  title: 'Elements|Simple Input'
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
      <SimpleInput name="example" type="text" placeholder="Placeholder" />
      <Spacer />
      <SimpleInput name="example" type="text" defaultValue="Default Value" />
      <Spacer />
      <SimpleInput hasError name="example" type="text" defaultValue="Error" />
      <Spacer />
      <SimpleInput prefix="£" name="example" type="text" />
      <Spacer />
      <SimpleInput
        hasError
        prefix="£"
        name="example"
        type="text"
        defaultValue="Error"
      />
      <Spacer />
      <SimpleInput
        ref={inputRef}
        name="example"
        type="text"
        defaultValue="Ref isn't working"
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
