/** @jsx jsx */

import * as React from 'react'
import { jsx, Themed } from 'theme-ui'
import { Glyph, Icon } from '@uswitch/trustyle.icon'

export type Variant = 'base' | 'quickLinks'

interface ListLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  icon?: React.ReactNode
  variant?: Variant
  className?: string
}

const styles = (variant: Variant, element?: string) =>
  `elements.link-list.variants.${variant}${element ? `.${element}` : ''}`

export const LinkList: React.FC<ListLinkProps> = ({
  children,
  title,
  icon,
  variant = 'base',
  className
}) => {
  return (
    <div className={className} sx={{ variant: styles(variant) }}>
      {(title || icon) && (
        <header
          sx={{
            display: 'flex',
            alignItems: 'center',
            variant: styles(variant, 'header')
          }}
        >
          {icon}
          {title && (
            <Themed.h3
              as="h2"
              sx={{
                paddingTop: 'xs',
                paddingBottom: 'xs',
                margin: 0
              }}
            >
              {title}
            </Themed.h3>
          )}
        </header>
      )}
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
  icon?: React.ReactNode | string
}

export const LinkListItem: React.FC<ListLinkItemProps> = ({
  children,
  href,
  className,
  icon
}) => {
  const IconComponent =
    typeof icon === 'string' ? <Icon glyph={icon as Glyph} color="" /> : icon

  return (
    <li
      sx={{
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'grey-20',
        paddingTop: 'xs',
        paddingBottom: 'xs',
        marginBottom: '0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
      className={className}
    >
      <Themed.a
        href={href}
        sx={{
          textDecoration: 'none',
          borderBottom: 0,
          ':hover': {
            textDecoration: 'underline'
          }
        }}
      >
        {children}
      </Themed.a>
      {IconComponent}
    </li>
  )
}
