/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

export const uspColors: { [key: string]: string } = {
  blue: '#84a6ff',
  orange: '#ffaa55',
  purple: '#ac96de',
  yellow: '#ffd555',
  typecyan: '#7edce9',
  green: '#82ca50',
  navy: '#84a6ff',
  cyan: '#7edce9',
  typegrey: '#53535e',
  grey: '#53535e',
  red: '#ff8a83',
  pink: '#ff75d4',
  'light-purple': '#acb0ff',
  award: '#acaaff',
  black: '#000000',
  white: '#ffffff',
  'black-friday': '#141424',
  neutral: '#DFDFE1'
}

export const getUspColor = (color: string, withOpacity = false) => {
  // if the backgroundColor is equal to the usp's predefined colors return usp color
  // else return a hex string
  if (color && uspColors[color]) {
    // 4D - represents 30% opacity
    return withOpacity ? `${uspColors[color]}4D` : uspColors[color]
  }
  return withOpacity ? `${uspColors['white']}` : uspColors['black']
}

export const AwardIcon: React.FC = () => (
  <span className="uswitch-award">
    <svg
      height="44"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="none"
    >
      <path
        d="M-0.000966623 8.09716L8.05078 22.1208L21.9964 14.024L13.9447 0.000335086L-0.000966623 8.09716Z"
        fill="#ACAAFF"
      />
      <path
        d="M13.9475 22.1206L21.9993 8.09692L8.05364 9.82571e-05L0.00188873 14.0238L13.9475 22.1206Z"
        fill="#7ED2E9"
      />
      <path
        d="M19.0498 2.96484H2.94629V19.1585H19.0498V2.96484Z"
        fill="#141423"
      />
      <path
        d="M6.30542 12.1831V5.34229H8.37293V12.2014C8.37293 13.9269 9.30664 14.7439 10.8709 14.7439C12.4352 14.7439 13.3689 13.9269 13.3689 12.2014V5.34229H15.4364V12.1831C15.4364 15.0365 13.672 16.5425 10.8709 16.5425C8.12434 16.5486 6.30542 15.0365 6.30542 12.1831Z"
        fill="white"
      />
    </svg>
  </span>
)
