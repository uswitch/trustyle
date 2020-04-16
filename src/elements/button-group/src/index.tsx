/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

const ButtonGroup: React.FC = ({ children }) => {
  const spacedChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child
    }

    return <div sx={{ marginBottom: 'sm', marginLeft: 'sm' }}>{child}</div>
  })

  return (
    <div
      sx={(theme: any) => ({
        display: ['block', 'inline-flex'],
        flexDirection: 'row-reverse',
        marginLeft: -theme.space.sm,
        marginBottom: -theme.space.sm
      })}
    >
      {spacedChildren}
    </div>
  )
}

export default ButtonGroup
