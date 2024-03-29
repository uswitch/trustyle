/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { text } from '@storybook/addon-knobs'

import AllThemes from '../../../utils/all-themes'

import UspTag from './'

export default {
  title: 'Elements/Usp tag'
}

const exampleUsps = [
  '2 months free insurance',
  '£100 Amazon.co.uk gift card',
  'Free Galaxy Buds+ worth £159',
  'Less than £5 per month'
]

const renderExampleUsps = exampleUsps.map((item, index) => (
  <div sx={{ margin: '16px 0' }} key={index}>
    <UspTag usp={item} />
  </div>
))

const reactElement = <span>I am a span</span>

export const ExampleWithKnob = () => {
  const defaultUsp: string = text('usp', '2 months free insurance')
  return (
    <div>
      <UspTag usp={defaultUsp} />
      <div sx={{ marginTop: '24px' }}>
        <h4> Example with React Element: </h4>
        <UspTag
          usp={reactElement}
          backgroundColor={'#FFE5CB'}
          beforeColor={'#FFAA55'}
        />
      </div>
      <div sx={{ marginTop: '24px' }}>
        <h4> More examples: </h4>
        {renderExampleUsps}
      </div>
    </div>
  )
}

ExampleWithKnob.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return <AllThemes>{renderExampleUsps}</AllThemes>
}
