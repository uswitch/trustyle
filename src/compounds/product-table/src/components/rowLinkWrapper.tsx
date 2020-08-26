/** @jsx jsx */

import * as React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  link?: string
  wrapper: Function
  children: React.ReactNode
}

const RowLinkWrapper: React.FC<Props> = ({ link, wrapper, children }) => {
  return link ? wrapper(children) : children
}

export default RowLinkWrapper
