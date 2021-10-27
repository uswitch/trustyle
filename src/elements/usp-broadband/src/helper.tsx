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

export const ReceiptFill: React.FC = () => (
  <span className="black-friday">
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 32 32"
      color="#ffd555"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.8254 26.6204L9.5 26.3415L9.1746 26.6204L6.5 28.9129V4.1C6.5 3.16003 7.19198 2.5 8 2.5H25C25.4368 2.5 25.8643 2.6609 26.1524 2.92105C26.4284 3.17037 26.5756 3.50501 26.5068 3.9178L26.5 3.95862V4V28.8892L23.8315 26.5257L23.5 26.2321L23.1685 26.5257L19.9946 29.3368L16.8254 26.6204L16.5 26.3415L16.1746 26.6204L13 29.3415L9.8254 26.6204ZM11.5 20V20.5H12H21H21.1H21.6V20V17.9V17.4H21.1H17.7854C17.9932 17.0298 18.1 16.6029 18.1 16.2C18.1 16.0022 18.0676 15.7893 18.0299 15.5756C18.0196 15.5171 18.0089 15.459 17.998 15.4H20.1H20.6V14.9V13.9V13.4H20.1H16.5486C15.9476 13.0023 15.6126 12.6907 15.4268 12.4399C15.2431 12.1919 15.2 11.9972 15.2 11.8C15.2 11.4489 15.3327 11.1994 15.5647 11.0234C15.8131 10.8349 16.2193 10.7 16.8 10.7C17.3793 10.7 17.8124 10.8343 18.1 11.05C18.3745 11.2559 18.5623 11.5693 18.6017 12.0415L18.6399 12.5H19.1H21.2H21.7586L21.6969 11.9448C21.5838 10.9271 21.1266 10.0018 20.3015 9.33591C19.4799 8.67284 18.3353 8.3 16.9 8.3C15.4665 8.3 14.3456 8.67198 13.5725 9.29922C12.7944 9.9305 12.4 10.7975 12.4 11.7C12.4 12.2304 12.5197 12.7212 12.7963 13.1823C12.8617 13.2912 12.9349 13.397 13.0159 13.5H12.1H11.6V14V15V15.5H12.1H15.0979C15.1645 15.6697 15.2 15.8554 15.2 16C15.2 16.5906 14.5793 17.5 12.6 17.5H12H11.5V18V20Z"></path>
    </svg>
  </span>
)
