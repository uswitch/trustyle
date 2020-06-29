/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'
import { LinkList, LinkListItem } from '../../../elements/link-list/src'
import { FilledArrow } from '../../../elements/icon/src/filled-arrow'

import HeroCard from '.'

export default {
  title: 'Compounds|HeroCard'
}

const title: string = text(
  'Headline',
  'Use a travel credit card to avoid spending fees abroad.'
)
const ctaText: string = text('CTA', 'Compare Credit Cards')
const arrow = <FilledArrow color="" />

export const ExampleWithKnobs = () => {
  return (
    <HeroCard ctaText={ctaText} title={title}>
      <LinkList variant="quickLinks">
        <LinkListItem icon={arrow}>Car Insurance</LinkListItem>
        <LinkListItem icon={arrow}>Home Insurance</LinkListItem>
        <LinkListItem icon={arrow}>Income Protection Insurance</LinkListItem>
      </LinkList>
    </HeroCard>
  )
}

ExampleWithKnobs.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  const permutations = permutationsGenerator({
    variant: ['primary']
  })

  return (
    <AllThemes>
      {permutations.map((p, i) => (
        <ExampleWithKnobs key={i} />
      ))}
    </AllThemes>
  )
}
