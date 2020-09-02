/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  link?: string
  children?: React.ReactNode
}

const RowWrapper: React.FC<Props> = ({ link, children }) => {
  return link ? (
    <a
      sx={{ textDecoration: 'none' }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <div>{children}</div>
  )
}

export default RowWrapper
