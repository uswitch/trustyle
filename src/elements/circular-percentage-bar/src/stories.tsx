/** @jsx jsx */
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import CircularPercentageBar from './'

export default {
  title: 'Elements/CircularPercentageBar'
}

export const ExampleWithPercentages = () => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap'
      }}
    >
      <div
        sx={{
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#F5E9EE'
        }}
      >
        <CircularPercentageBar size="xs" percentage={100} />
        <CircularPercentageBar size="xs" percentage={85} />
        <CircularPercentageBar size="xs" percentage={75} />
        <CircularPercentageBar size="xs" percentage={50} />
        <CircularPercentageBar size="xs" percentage={25} />
        <CircularPercentageBar size="xs" percentage={0} />
      </div>

      <div
        sx={{
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <CircularPercentageBar size="sm" percentage={100} />
        <CircularPercentageBar size="sm" percentage={85} />
        <CircularPercentageBar size="sm" percentage={75} />
        <CircularPercentageBar size="sm" percentage={50} />
        <CircularPercentageBar size="sm" percentage={25} />
        <CircularPercentageBar size="sm" percentage={0} />
      </div>

      <div
        sx={{
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'row',
          background: '#F5E9EE'
        }}
      >
        <CircularPercentageBar size="md" percentage={100} />
        <CircularPercentageBar size="md" percentage={85} />
        <CircularPercentageBar size="md" percentage={75} />
        <CircularPercentageBar size="md" percentage={50} />
        <CircularPercentageBar size="md" percentage={25} />
        <CircularPercentageBar size="md" percentage={0} />
      </div>

      <div
        sx={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <CircularPercentageBar size="lg" percentage={100} />
        <CircularPercentageBar size="lg" percentage={85} />
        <CircularPercentageBar size="lg" percentage={75} />
        <CircularPercentageBar size="lg" percentage={50} />
        <CircularPercentageBar size="lg" percentage={25} />
        <CircularPercentageBar size="lg" percentage={0} />
      </div>
    </div>
  )
}

ExampleWithPercentages.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes themes={['uswitch', 'money']}>
      <ExampleWithPercentages />
    </AllThemes>
  )
}
