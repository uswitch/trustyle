/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import ProsAndCons, { ItemsList } from './'

export default {
  title: 'compounds|Pros and Cons'
}

export const BasicExample = () => {
  const props: ItemsList = { items: [] }
  const cons: ItemsList = { items: [] }

  for (let i = 1; i < 7; i++) {
    props.items.push('This is props text ' + i)
    cons.items.push('This is cons text ' + i)
  }
  return <ProsAndCons pros={props} cons={cons} />
}

BasicExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const TitleExample = () => {
  const props: ItemsList = { items: [], title: 'Pros' }
  const cons: ItemsList = { items: [], title: 'Cons' }

  for (let i = 1; i < 4; i++) {
    props.items.push('This is props text ' + i)
    cons.items.push('This is cons text ' + i)
  }

  return <ProsAndCons pros={props} cons={cons} />
}

TitleExample.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes>
      <BasicExample />
      <TitleExample />
    </AllThemes>
  )
}
