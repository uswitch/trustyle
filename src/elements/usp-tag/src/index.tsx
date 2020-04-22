/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  usp?: string
  backgroundColor?: string
  beforeColor?: string
}

const UspTag: React.FC<Props> = ({
  usp,
  backgroundColor = 'blue-25',
  beforeColor = '#84A6FF'
}) =>
  usp ? (
    <div
      sx={{
        backgroundColor: backgroundColor,
        textAlign: 'left',
        paddingX: 12,
        paddingY: 'xxs',
        '::before': {
          content: '""',
          position: 'relative',
          left: '-.55em',
          borderLeft: `4px solid ${beforeColor}`,
          paddingY: '.2em'
        }
      }}
    >
      <span
        sx={{
          fontFamily: "'-apple-system', 'BlinkMacSystemFont'",
          fontWeight: 'bold',
          fontSize: 'xs',
          color: 'grey-80',
          lineHeight: 1.3
        }}
      >
        {usp}
      </span>
    </div>
  ) : null

export default UspTag
