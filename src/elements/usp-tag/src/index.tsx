/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  usp?: string
}

const UspTag: React.FC<Props> = ({ usp }) =>
  usp ? (
    <div
      sx={{
        minHeight: [32, 26],
        backgroundColor: 'yellow-25',
        display: 'flex',
        alignItems: 'center',
        '::before': {
          content: '""',
          display: 'inline-block',
          width: 4,
          minHeight: [28, 20],
          margin: 2,
          backgroundColor: 'yellow'
        }
      }}
    >
      <span
        sx={{
          fontFamily: "'-apple-system', 'BlinkMacSystemFont'",
          fontWeight: 'bold',
          fontSize: 'xs',
          color: 'grey-80',
          marginLeft: 'xs'
        }}
      >
        {usp}
      </span>
    </div>
  ) : null

export default UspTag
