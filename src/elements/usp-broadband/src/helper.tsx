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
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M8.49477 23.5034L12.2435 30L15.9923 27.8319L8.49477 23.5034ZM27.8325 16.0039L23.5052 23.5112L30 19.7614L27.8325 16.0039ZM8.49477 8.49656L2 12.2541L4.16749 16.0039L8.49477 8.49656ZM19.7488 2L16 4.16809L23.5052 8.49656L19.7488 2Z"
        fill="#ACAAFF"
      />
      <path
        d="M23.4975 23.5034L15.9923 27.8319L19.741 30L23.4975 23.5034ZM4.16749 16.0039L2 19.7537L8.49477 23.5034L4.16749 16.0039ZM23.4975 8.49656L27.8248 16.0039L29.9923 12.2541L23.4975 8.49656ZM12.2512 2L8.49477 8.49656L16 4.16809L12.2512 2Z"
        fill="#7ED2E9"
      />
      <path
        d="M16.0005 4.16748L8.49524 8.49595L4.16797 16.0032L8.49524 23.5028L16.0005 27.839L23.498 23.5028L27.833 16.0032L23.498 8.49595L16.0005 4.16748Z"
        fill="#7ED2E9"
      />
      <path
        d="M26.2428 5.74982H5.74805V26.2502H26.2428V5.74982Z"
        fill="#141423"
      />
      <path
        d="M10.0215 17.4235V8.76654H12.6518V17.4466C12.6518 19.6301 13.8397 20.664 15.8297 20.664C17.8198 20.664 19.0077 19.6301 19.0077 17.4466V8.76654H21.638V17.4312C21.638 21.0421 19.3934 22.9556 15.822 22.9556C12.3432 22.9479 10.0215 21.0344 10.0215 17.4235Z"
        fill="white"
      />
    </svg>
  </span>
)
