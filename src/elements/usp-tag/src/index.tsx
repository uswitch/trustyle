/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  usp?: string
  backgroundColor?: string
  beforeColor?: string
  className?: string
}

const UspTag: React.FC<Props> = ({
  usp,
  backgroundColor = '#E0E9FF',
  beforeColor = '#84A6FF',
  className
}) =>
  usp ? (
    <div
      sx={{
        background: backgroundColor,
        textAlign: 'left',
        paddingX: 12,
        paddingY: 4,
        '::before': {
          content: '""',
          position: 'relative',
          left: '-.55em',
          borderLeft: `4px solid ${beforeColor}`,
          paddingY: '.2em'
        }
      }}
      className={className}
    >
      <span
        sx={{
          fontFamily: 'base',
          fontWeight: 'bold',
          fontSize: 'xxs',
          color: 'grey-80',
          lineHeight: 1.3
        }}
      >
        {usp}
      </span>
    </div>
  ) : null

export default UspTag
