/** @jsx jsx */
import { jsx } from 'theme-ui'

import AllThemes from '../../../utils/all-themes'

import CircularPercentageBar from './'

export default {
  title: 'Elements/CircularPercentageBar'
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size: string
  bgColor?: string
}

const DrawCircles: React.FC<Props> = ({ size = 'xs', bgColor = '#ffffff' }) => {
  return (
    <div
      sx={{
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'row' as const,
        flexWrap: 'wrap' as const,
        backgroundColor: bgColor
      }}
    >
      <div sx={{ margin: '5px' }}>
        <CircularPercentageBar size={size} percentage={0} />
      </div>
      <div sx={{ margin: '5px' }}>
        <CircularPercentageBar size={size} percentage={25} />
      </div>
      <div sx={{ margin: '5px' }}>
        <CircularPercentageBar size={size} percentage={50} />
      </div>
      <div sx={{ margin: '5px' }}>
        <CircularPercentageBar size={size} percentage={75} />
      </div>
      <div sx={{ margin: '5px' }}>
        <CircularPercentageBar size={size} percentage={85} />
      </div>
      <div sx={{ margin: '5px' }}>
        <CircularPercentageBar size={size} percentage={100} />
      </div>
    </div>
  )
}

export const ExampleWithPercentages = () => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column' as const
      }}
    >
      <DrawCircles size="xs" bgColor="#F5E9EE" />
      <DrawCircles size="sm" />
      <DrawCircles size="md" bgColor="#F5E9EE" />
      <DrawCircles size="lg" />
    </div>
  )
}

ExampleWithPercentages.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const ExampleWithAlignment = () => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column' as const,
        marginX: 'auto',
        backgroundColor: '#F5E9EE',
        width: ['100%', '50%']
      }}
    >
      <div sx={{ width: '100%', marginBottom: '20px' }}>
        <p>Mobile End | Desktop Start</p>
        <CircularPercentageBar align={['end', 'start']} percentage={50} />
      </div>
      <div sx={{ width: '100%', marginBottom: '20px' }}>
        <p>Mobile End | Tablet Center | Desktop Start</p>
        <CircularPercentageBar
          align={['end', 'center', 'start']}
          percentage={50}
        />
      </div>
      <div sx={{ width: '100%', marginBottom: '20px' }}>
        <p>Start</p>
        <CircularPercentageBar align="start" percentage={50} />
      </div>
      <div sx={{ width: '100%', marginBottom: '20px' }}>
        <p>Center</p>
        <CircularPercentageBar align="center" percentage={50} />
      </div>
      <div sx={{ width: '100%', marginBottom: '20px' }}>
        <p>End</p>
        <CircularPercentageBar align="end" percentage={50} />
      </div>
    </div>
  )
}

ExampleWithAlignment.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  return (
    <AllThemes themes={['uswitch', 'money']}>
      <ExampleWithPercentages />
      <ExampleWithAlignment />
    </AllThemes>
  )
}
