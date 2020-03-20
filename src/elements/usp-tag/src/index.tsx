/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  usp: string
}

const UspTag: React.FC<Props> = ({ usp }) => {
  return (
    <div
      sx={{
        height: 32,
        backgroundColor: 'yellow-25',
        display: 'flex',
        alignItems: 'center',
        '::before': {
          content: '""',
          display: 'inline-block',
          width: 4,
          height: 28,
          margin: 2,
          backgroundColor: 'yellow'
        }
      }}
    >
      <div>
        {usp && (
          <p
            sx={{
              fontFamily: "'-apple-system', 'BlinkMacSystemFont'",
              fontWeight: 'bold',
              fontSize: 'xs',
              color: 'grey-80',
              marginLeft: 8
            }}
          >
            {usp}
          </p>
        )}
      </div>
    </div>
  )
}

export default UspTag
