/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
// import dayjs from '@uswitch/trustyle.date'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  until: number
  // calculateTimeLeft: Function
}

// const calculateTimeLeft = () => {
//   const difference = +new Date(`10/01/${year}`) - +new Date();

//   let timeLeft = {};

// };

const Countdown: React.FC<Props> = ({ until }) => {
  // const now = dayjs()
  // const endDate = dayjs(until)

  // const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  return <div>{until}</div>
}

// Countdown.calculateTimeLeft = () => {

// }

export default Countdown
