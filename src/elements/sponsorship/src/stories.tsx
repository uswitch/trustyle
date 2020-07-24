/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { select, text } from '@storybook/addon-knobs'
import { Col, Container, Row } from '@uswitch/trustyle.flex-grid'

import AllThemes from '../../../utils/all-themes'

import Sponsorship from './'

export default {
  title: 'Elements|Sponsorship'
}

export const LeftAlignedSponsorship = () => {
  const tag = text('Tag', 'In partnership with')
  const image = text('Image Src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Sky_Master_Brand_Logo_2020.png/1200px-Sky_Master_Brand_Logo_2020.png')

  return (
    <div>
      <Container>
        <Sponsorship
          imgSrc={image}
          tag={tag}
          leftAligned={true}
        />
      </Container>
    </div>
  )
}

export const RightAlignedSponsorship = () => {
  const tag = text('Tag', 'In partnership with')
  const image = text('Image Src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Sky_Master_Brand_Logo_2020.png/1200px-Sky_Master_Brand_Logo_2020.png')

  return (
    <div>
      <Container>
        <Sponsorship
          imgSrc={image}
          tag={tag}
        />
      </Container>
    </div>
  )
}

LeftAlignedSponsorship.story = {
  parameters: {
    percy: { skip: true }
  }
}

RightAlignedSponsorship.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes themes={['uswitch', 'money', 'bankrate', 'save-on-energy']}>
      <LeftAlignedSponsorship />
      <RightAlignedSponsorship />
    </AllThemes>
  )
}
