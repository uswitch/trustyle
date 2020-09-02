/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  link?: string
  children?: React.ReactNode
}

const linkWrapper = (link: string, children: React.ReactNode) => {
  return (
    <a
      sx={{ textDecoration: 'none' }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        sx={{
          paddingX: ['sm', 'md'],
          paddingY: 'md'
        }}
      >
        {children}
      </div>
    </a>
  )
}

const RowWrapper: React.FC<Props> = ({ link, children }) => {
  return link ? (
    linkWrapper(link, children)
  ) : (
    <div
      sx={{
        paddingX: ['sm', 'md'],
        paddingY: 'md'
      }}
    >
      {children}
    </div>
  )
}

export default RowWrapper
