/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  hasModal: boolean
  link?: string
  children?: React.ReactNode
  onRowClick?: () => void
  disabled?: boolean
}

const linkWrapper = (
  link: string,
  children: React.ReactNode,
  onRowClick?: () => void
) => {
  return (
    <a
      sx={{
        textDecoration: 'none',
        ':hover:not(:disabled)': {
          'a, button': {
            background: '#db4d75'
          },
          header: {
            h5: {
              textDecoration: 'underline',
              textDecorationColor: '#069'
            }
          }
        }
      }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onRowClick}
    >
      {children}
    </a>
  )
}

const RowWrapper: React.FC<Props> = ({
  hasModal,
  link,
  children,
  onRowClick,
  disabled
}) => {
  if (disabled) {
    return <div>{children}</div>
  }

  if (hasModal) {
    return <div onClick={onRowClick}>{children}</div>
  }

  if (link) {
    return linkWrapper(link, children, onRowClick)
  }

  return <div>{children}</div>
}

export default RowWrapper
