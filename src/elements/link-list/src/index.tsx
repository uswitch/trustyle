/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

interface ListLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  className?: string
}

export const LinkList: React.FC<ListLinkProps> = ({
  children,
  title,
  className
}) => {
  return (
    <div className={className}>
      <Styled.h3
        as="h2"
        sx={{
          paddingTop: 'xs',
          paddingBottom: 'xs',
          margin: 0
        }}
      >
        {title}
      </Styled.h3>
      <ul
        sx={{
          padding: 0,
          listStyle: 'none',
          marginTop: '0'
        }}
      >
        {children}
      </ul>
    </div>
  )
}

interface ListLinkItemProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string
  className?: string
}

export const LinkListItem: React.FC<ListLinkItemProps> = ({
  children,
  href,
  className
}) => {
  return (
    <li
      sx={{
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'grey-20',
        paddingTop: 'xs',
        paddingBottom: 'xs',
        marginBottom: '0'
      }}
      className={className}
    >
      <Styled.a
        href={href}
        sx={{
          textDecoration: 'none',
          ':hover': {
            textDecoration: 'underline'
          }
        }}
      >
        {children}
      </Styled.a>
    </li>
  )
}
