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
        backgroundColor: 'yellow-25',
        textAlign: 'left',
        paddingX: 14,
        paddingY: 'xs',
        '::before': {
          content: '""',
          position: 'relative',
          left: '-.55em',
          borderLeft: '4px solid #FFD555',
          paddingY: '.2em'
        }
      }}
    >
      <span
        sx={{
          fontFamily: "'-apple-system', 'BlinkMacSystemFont'",
          fontWeight: 'bold',
          fontSize: ['xs', 11],
          color: 'grey-80',
          lineHeight: 1.3
        }}
      >
        {usp}
      </span>
    </div>
  ) : null

export default UspTag
