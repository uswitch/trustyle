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

export const DrawCircles: React.FC<Props> = ({
  size = 'xs',
  bgColor = '#ffffff'
}) => {
  return (
    <div
      sx={{
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: bgColor
      }}
    >
      <CircularPercentageBar size={size} percentage={0} />
      <CircularPercentageBar size={size} percentage={25} />
      <CircularPercentageBar size={size} percentage={50} />
      <CircularPercentageBar size={size} percentage={75} />
      <CircularPercentageBar size={size} percentage={85} />
      <CircularPercentageBar size={size} percentage={100} />
    </div>
  )
}

export const ExampleWithPercentages = () => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column'
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

export const AutomatedTests = () => {
  return (
    <AllThemes themes={['uswitch', 'money']}>
      <ExampleWithPercentages />
    </AllThemes>
  )
}
