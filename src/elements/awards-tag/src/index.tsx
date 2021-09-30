/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  award?: string
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
        paddingX: 5,
        paddingY: 2,
        backgroundColor: 'white'
      }}
    >
      <span
        sx={{
          fontFamily: "'-apple-system', 'BlinkMacSystemFont'",
          fontWeight: 500,
          fontSize: 'xxs',
          marginLeft: 5,
          color: 'black'
        }}
      >
        {award}
      </span>
    </div>
  ) : null

export default AwardsTag
