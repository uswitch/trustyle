/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

import * as st from './styles'

interface Props {
  color: string
  size?: number
}

export const CreditCard: React.FC<Props> = ({ size }) => (
  <svg
    sx={{
      display: 'block',
      ...st.size(size),
      fill: 'none'
    }}
    viewBox="0 0 67 45"
  >
    <path
      d="M56.058 43.333h-45.47C5.822 43.333 2 39.598 2 34.941V10.393C2 5.736 5.822 2 10.588 2h45.47c4.716 0 8.588 3.736 8.588 8.393v24.596c-.05 4.609-3.872 8.344-8.588 8.344Z"
      stroke="#924A8B"
      strokeWidth="3"
      strokeMiterlimit="10"
    />
    <path
      d="M8.011 30.621h52.123M8.011 36.007h17.523M28.607 36.007h9.779"
      stroke="#924A8B"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M17.291 15.97c0 .194.15.388.398.388h3.127v1.844h-3.127a.387.387 0 1 0 0 .776h3.127v.145c0 1.068-.893 1.99-2.035 1.99H10.64c-1.092 0-2.036-.874-2.036-1.99v-.242h3.376a.387.387 0 1 0 0-.776H8.604V16.26h3.376a.387.387 0 1 0 0-.776H8.604v-.146c0-1.067.894-1.989 2.036-1.989h8.14c1.093 0 2.036.874 2.036 1.99v.242h-3.127c-.249.048-.398.194-.398.388Z"
      fill="#924A8B"
    />
  </svg>
)
