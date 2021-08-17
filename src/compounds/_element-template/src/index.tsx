/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  someText: string
}

const Test: React.FC<Props> = ({ someText }) => {
  return <div>{someText}</div>
}

export default Test
