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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.5882"
        d="M5.56694 18.4264L8.78016 23.9934L11.9934 22.1355L5.56694 18.4264ZM22.1421 12L18.4331 18.4331L24 15.2198L22.1421 12ZM5.56694 5.56694L0 8.78678L1.85785 12L5.56694 5.56694ZM15.2132 0L12 1.85785L18.4331 5.56694L15.2132 0Z"
        fill="white"
      />
      <path
        opacity="0.851"
        d="M18.4264 18.4264L11.9934 22.1355L15.2066 23.9934L18.4264 18.4264ZM1.85785 12L0 15.2132L5.56694 18.4264L1.85785 12ZM18.4264 5.56694L22.1355 12L23.9934 8.78678L18.4264 5.56694ZM8.78678 0L5.56694 5.56694L12 1.85785L8.78678 0Z"
        fill="white"
      />
      <path
        opacity="0.9373"
        d="M12.0004 1.85785L5.56737 5.56694L1.85828 12L5.56737 18.4264L12.0004 22.1421L18.4269 18.4264L22.1426 12L18.4269 5.56694L12.0004 1.85785Z"
        fill="white"
      />
      <path
        d="M20.7796 3.21326H3.21262V20.7802H20.7796V3.21326Z"
        fill="#141423"
      />
      <path
        d="M6.87555 13.2165V5.79828H9.1301V13.2363C9.1301 15.1074 10.1483 15.9933 11.8541 15.9933C13.5598 15.9933 14.578 15.1074 14.578 13.2363V5.79828H16.8326V13.2231C16.8326 16.3173 14.9086 17.957 11.8475 17.957C8.86563 17.9503 6.87555 16.3107 6.87555 13.2165Z"
        fill="white"
      />
    </svg>
  </span>
)
