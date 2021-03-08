/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const Van: React.FC<Props> = ({ color, size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: color,
      stroke: color
    }}
    viewBox="0 0 56 42"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.5 33.5V0.5H31.5V4V4.5H32H44.5514L55.5 18.9679V19.2V33.5H47.8H46.991L47.3528 34.2236C47.4366 34.3911 47.467 34.4931 47.4818 34.5822C47.4987 34.6837 47.5 34.7901 47.5 35C47.5 38.5239 44.5239 41.5 41 41.5C37.4761 41.5 34.5 38.5239 34.5 35C34.5 34.8892 34.5244 34.8079 34.5743 34.6581L34.5783 34.6462C34.6283 34.4964 34.7 34.2816 34.7 34V33.5H34.2H32H28H21.8H20.991L21.3528 34.2236C21.4366 34.3911 21.467 34.4931 21.4818 34.5822C21.4987 34.6837 21.5 34.7901 21.5 35C21.5 38.5239 18.5239 41.5 15 41.5C11.4761 41.5 8.5 38.5239 8.5 35C8.5 34.8892 8.52441 34.8079 8.57433 34.6581L8.57829 34.6462C8.62827 34.4964 8.69995 34.2816 8.69995 34V33.5H8.19995H0.5ZM28 30.5H28.5V30V4V3.5H28H4H3.5V4V30V30.5H4H10.2H10.4071L10.5535 30.3536C11.6641 29.2429 13.3387 28.5 15 28.5C16.6613 28.5 18.3359 29.2429 19.4465 30.3536L19.5929 30.5H19.8H28ZM52 30.5H52.5V30V20.2V20.0326L52.3992 19.899L43.1993 7.69896L43.0492 7.5H42.8H32H31.5V8V30V30.5H32H36.2H36.4071L36.5535 30.3536C37.6641 29.2429 39.3387 28.5 41 28.5C42.6613 28.5 44.3359 29.2429 45.4465 30.3536L45.5929 30.5H45.8H52ZM11.5 35C11.5 36.8761 13.1239 38.5 15 38.5C16.8761 38.5 18.5 36.8761 18.5 35C18.5 33.1239 16.8761 31.5 15 31.5C13.1239 31.5 11.5 33.1239 11.5 35ZM37.5 35C37.5 36.8761 39.1239 38.5 41 38.5C42.8761 38.5 44.5 36.8761 44.5 35C44.5 33.1239 42.8761 31.5 41 31.5C39.1239 31.5 37.5 33.1239 37.5 35Z" />
    <path d="M47.0397 19.5H34.5V10.5H40.7397L47.0397 19.5Z" />
  </svg>
)
