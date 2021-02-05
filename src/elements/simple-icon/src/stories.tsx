/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { IconContext } from './context'

import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'

import SimpleIcon from './'

export default {
  title: 'Elements/Simple Icon'
}

export const ExampleWithKnobs = () => {
  return (
    <IconContext.Provider value={{ iconPath: '/'}}>
      <SimpleIcon glyph={'book-closed'} color="red" size={100}/>
    </IconContext.Provider>
  )
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

  return (
    <IconContext.Provider value={{ iconPath: '/'}}>
      <AllThemes>
        {permutations.map((p, i) => (
          <SimpleIcon glyph={'book-closed'} color="red" key={i} />
        ))}
      </AllThemes>
    </IconContext.Provider>
  )
}
