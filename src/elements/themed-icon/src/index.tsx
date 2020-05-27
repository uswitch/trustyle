/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<any> {
  color?: string
  icon: string
  size?: number
}

const ThemedIcon: React.FC<Props> = () => {
  return <div>test</div>
}

export default ThemedIcon
