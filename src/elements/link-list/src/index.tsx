/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

interface ListLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

export const LinkList: React.FC<ListLinkProps> = ({ children, title }) => {
  return (
    <div>
      <Styled.h3
        as="h2"
        sx={{
          variant: 'linkList.base',
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
}

export const LinkListItem: React.FC<ListLinkItemProps> = ({
  children,
  href
}) => {
  return (
    <li
      sx={{
        variant: 'linkListItem.base',
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'grey-20',
        paddingTop: 'xs',
        paddingBottom: 'xs',
        marginBottom: '0'
      }}
    >
      <Styled.a
        href={href}
        sx={{
          variant: 'linkListLink.base',
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
