/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import CirclePercentageBar from '@uswitch/trustyle.circular-percentage-bar'

export interface CircularPercentageBarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  percentage: number
  align?: 'center' | 'start' | 'end'
}

const CircularPercentageBar: React.FC<CircularPercentageBarProps> = ({
  size = 'xs',
  percentage,
  align = 'start'
}) => {
  return (
    <CirclePercentageBar size={size} percentage={percentage} align={align} />
  )
}

export default CircularPercentageBar
