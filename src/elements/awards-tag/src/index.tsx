/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  award: string
  className?: string
  inline?: boolean
}

const AwardsTag: React.FC<Props> = ({
  award,
  className = '',
  inline = false
}) =>
  award ? (
    <div
      className={className}
      sx={{
        display: inline ? 'inline-flex' : 'flex',
        alignItems: 'center',
        borderColor: '#ACAAFF',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 3,
        height: 27,
        paddingLeft: 5,
        paddingRight: 5
      }}
    >
      <svg
        width="22"
        height="23"
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

      <span
        sx={{
          fontFamily: "'-apple-system', 'BlinkMacSystemFont'",
          fontWeight: 500,
          fontSize: 'xxs',
          marginLeft: 5
        }}
      >
        {award}
      </span>
    </div>
  ) : null

export default AwardsTag
