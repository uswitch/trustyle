/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  link?: string
  children?: React.ReactNode
  headerImage?: React.ReactNode
}

const checkClickTargetIsAccordion = (n: number, e: any) => {
  let parent = e.target.parentElement
  while (parent && n > 0) {
    if (parent.dataset.target === 'accordion') {
      return true
    } else {
      parent = parent.parentElement
      n--
    }
  }
  return false
}

const checkClickTargetIsLink = (e: any) => {
  if (e.target.nodeName.toLowerCase() === 'a') {
    return true
  }
}

const linkWrapper = (
  link: string,
  children: React.ReactNode,
  headerImage?: React.ReactNode
) => {
  const handleClick = (e: any) => {
    if (checkClickTargetIsLink(e)) {
      return e
    }

    if (checkClickTargetIsAccordion(10, e)) {
      e.preventDefault()
    }
  }

  return (
    <a
      sx={{
        textDecoration: 'none',
        color: 'inherit',
        variant: 'compounds.product-table.row.linkWrapper',
        paddingX: ['sm', 'md'],
        paddingY: 'md',
        paddingTop: headerImage && ['sm', 'md'],
        display: 'block'
      }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

const RowWrapper: React.FC<Props> = ({ link, children, headerImage }) => {
  return link ? (
    linkWrapper(link, children, headerImage)
  ) : (
    <div
      sx={{
        paddingX: ['sm', 'md'],
        paddingY: 'md',
        paddingTop: headerImage && ['sm', 'md']
      }}
    >
      {children}
    </div>
  )
}

export default RowWrapper
