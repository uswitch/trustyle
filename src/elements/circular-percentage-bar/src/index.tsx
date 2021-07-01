/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import { CircularPercentageBarStyles } from './percentage-bar-styles'

const styles = (element?: string) =>
  `elements.circle-percentage-bar.base${element ? `.${element}` : ''}`

const alignCircle = (side: string) =>
  `${side !== 'center' ? `flex-${side}` : 'center'}`

const drawCircle = (pct: number, isBackground: boolean = false) => {
  const cls = isBackground ? '-full' : ''
  const deg = (360 / 100) * pct

  return (
    <div className={`slice${cls}`}>
      <div
        className={`bar${cls}`}
        sx={{
          transform: `rotate(${deg}deg)`,
          variant: styles(`bar${cls}`)
        }}
      ></div>
      <div
        className={`fill${cls}`}
        sx={{
          variant: isBackground
            ? styles(`fill${cls}`)
            : deg > 180
            ? styles('fill')
            : ''
        }}
      ></div>
    </div>
  )
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  percentage: number
  size?: string
  align?: string | string[]
}

const CircularPercentageBar: React.FC<Props> = ({
  percentage,
  size = 'xs',
  align = 'center'
}) => {
  return (
    <div
      css={CircularPercentageBarStyles}
      sx={{
        display: 'flex',
        justifyContent: Array.isArray(align)
          ? align.map(a => alignCircle(a))
          : alignCircle(align)
      }}
    >
      <div
        className={`c100 ${size} ${percentage > 50 ? 'gt50' : ''}`}
        sx={{ variant: styles() }}
      >
        <span sx={{ variant: styles('text') }}>{percentage}%</span>
        {drawCircle(100, true)}
        {drawCircle(percentage)}
      </div>
    </div>
  )
}

export default CircularPercentageBar
