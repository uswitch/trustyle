/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {

}

const MyComponent: React.FC<Props> = ({

}) => {
  const { theme }: any = useThemeUI()

  return <div>hello</div>
}

export default MyComponent
