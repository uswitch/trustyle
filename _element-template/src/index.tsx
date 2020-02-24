/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  someText: string
}

const MyComponent: React.FC<Props> = ({ someText }) => {
  // const { theme }: any = useThemeUI()

  return <div>{someText}</div>
}

export default MyComponent
