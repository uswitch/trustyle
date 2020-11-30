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
      sx={{
        textDecoration: 'none',
        ':hover:not(:disabled)': {
          'a, button': {
            background: '#db4d75'
          },
          header: {
            textDecoration: 'underline',
            textDecorationColor: '#069'
          }
        }
      }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

const RowWrapper: React.FC<Props> = ({ link, children }) => {
  return link ? linkWrapper(link, children) : <div>{children}</div>
}

export default RowWrapper
