/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface TimeLeft {
  days?: number | undefined
  hours?: number | undefined
  minutes?: number | undefined
  seconds?: number | undefined
}
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  until: number
}

const style = (variant?: string) => `elements.countdown.${variant || 'base'}`

const calculateTimeLeft = (until: number): TimeLeft => {
  const difference = +new Date(until) - +new Date()

  return difference
    ? {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    : {}
}

const Countdown: React.FC<Props> = ({ until }) => {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>(
    calculateTimeLeft(until)
  )

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(until))
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        variant: style()
      }}
    >
      {Object.keys(timeLeft).map((interval, i, intervals) => (
        <React.Fragment key={i}>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              variant: style('interval')
            }}
          >
            {timeLeft[interval].toString().padStart(2, '0')}

            <small sx={{ variant: style('small') }}>{interval}</small>
          </div>

          {intervals.length - 1 > i && ':'}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Countdown
