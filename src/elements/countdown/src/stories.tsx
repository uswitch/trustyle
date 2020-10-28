/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'

import Countdown from './'

export default {
  title: 'Elements/Countdown'
}

export const ExampleWithKnobs = () => {
  const until = new Date()
  until.setDate(until.getDate() + 2)

  return <Countdown until={until.getTime()} />
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  const permutations = permutationsGenerator({
    variant: ['primary', 'secondary']
  })

  const now = new Date()
  now.setDate(now.getDate() + 2)

  return (
    <AllThemes>
      {permutations.map((p, i) => (
        <Countdown until={now.getTime()} key={i} />
      ))}
    </AllThemes>
  )
}
