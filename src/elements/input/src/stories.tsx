/** @jsx jsx */
import * as React from 'react'
import { number } from '@storybook/addon-knobs'
import { css, jsx } from '@emotion/core'

import AllThemes from '../../../utils/all-themes'

import { Input } from './.'

export default {
  title: 'Elements|Text Input'
}

const Spacer = ({ height }: { height: number }) => (
  <div css={css({ minHeight: height })} />
)

const DebugValue: React.FC<{ value: string | undefined }> = ({ value }) => (
  <pre>
    Value:{' '}
    <span css={{ backgroundColor: 'papayawhip' }}>{value || 'EMPTY'}</span>
  </pre>
)

const PostprocessStory: React.FC = () => {
  const [value1, setValue1] = React.useState()
  const [value2, setValue2] = React.useState()

  return (
    <div css={css({ padding: number('Padding', 10) })}>
      <label htmlFor="example-1">Trim whitespace from beginning / end</label>
      <Input
        id="example-1"
        name="example"
        type="text"
        value={value1}
        onChange={e => setValue1(e.currentTarget.value)}
        postprocess={x => x.trim()}
      />
      <DebugValue value={value1} />

      <label htmlFor="example-2">Strip all whitespace</label>
      <Input
        id="example-2"
        name="example"
        type="text"
        value={value2}
        onChange={e => setValue2(e.currentTarget.value)}
        postprocess={x => x.replace(/\s/g, '')}
      />
      <DebugValue value={value2} />
    </div>
  )
}

export const Example = () => {
  const spaceBetween = number('Space Between', 10)
  return (
    <div css={css({ padding: number('Padding', 10) })}>
      <Input name="example" defaultValue="Cascat" type="text" />
      <Spacer height={spaceBetween} />
      <Input name="example" placeholder="Placeholder" type="text" />
      <Spacer height={spaceBetween} />
      <Input hasError name="example" defaultValue="Error!" type="text" />
      <Spacer height={spaceBetween} />
      <Input mask="99-99-99" name="example" placeholder="XX-XX-XX" type="tel" />
      <Spacer height={spaceBetween} />
      <Input name="example" freezable defaultValue="Prefilled" type="text" />
      <Spacer height={spaceBetween} />
      <Input name="example" prefix="£" type="tel" />
      <Spacer height={spaceBetween} />
      <Input name="example" prefixIcon="email" type="tel" />
      <Spacer height={spaceBetween} />
      <Input name="example" suffix=".00" type="tel" />
      <Spacer height={spaceBetween} />
      <Input name="password" type="password" defaultValue="swordfish" />
      <Spacer height={spaceBetween} />
      <Input name="example" disabled value="Disabled" type="text" />
    </div>
  )
}

Example.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const Postprocess = () => {
  return <PostprocessStory />
}

Postprocess.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <Example />
      <Postprocess />
    </AllThemes>
  )
}
