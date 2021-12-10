/** @jsx jsx */

import * as React from 'react'
import { jsx, Themed } from 'theme-ui'
import { Glyph, Icon } from '@uswitch/trustyle.icon'

export type Variant = 'base' | 'quickLinks' | 'linkBlock'

interface ListLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  icon?: React.ReactNode
  subtitle?: string
  subtitleUrl?: string
  variant?: Variant
  className?: string
}

const VariantContext = React.createContext('base')

const styles = (variant: Variant, element?: string) =>
  `elements.link-list.variants.${variant}${element ? `.${element}` : ''}`

export const LinkList: React.FC<ListLinkProps> = ({
  children,
  title,
  icon,
  subtitle,
  subtitleUrl,
  variant = 'base',
  className
}) => {
  const IconComponent =
    typeof icon === 'string' ? <Icon glyph={icon as Glyph} color="" /> : icon

  const titleProps = {
    as: 'h2',
    sx: {
      paddingTop: 'xs',
      paddingBottom: 'xs',
      margin: 0,
      variant: styles(variant, 'h3')
    }
  }

  return (
    <VariantContext.Provider value={variant}>
      <div className={className} sx={{ variant: styles(variant) }}>
        {(title || icon) && (
          <section>
            <header
              sx={{
                display: 'flex',
                alignItems: 'center',
                variant: styles(variant, 'header')
              }}
            >
              {variant === 'linkBlock' && (
                <div
                  sx={{
                    variant: styles(variant, 'icon')
                  }}
                >
                  {IconComponent}
                </div>
              )}
              {variant !== 'linkBlock' && IconComponent}
              {title &&
                (variant === 'linkBlock' ? (
                  // @ts-ignore - ts does not seem to recognize "as" when in object form
                  <Themed.h6 {...titleProps}>{title}</Themed.h6>
                ) : (
                  // @ts-ignore
                  <Themed.h3 {...titleProps}>{title}</Themed.h3>
                ))}
            </header>
            {subtitle && subtitleUrl && (
              <LinkListItem href={subtitleUrl}>
                <strong style={{ backgroundColor: 'unset' }}>{subtitle}</strong>
              </LinkListItem>
            )}
          </section>
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
    </VariantContext.Provider>
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

  const variant = React.useContext(VariantContext) as Variant

  return (
    <li
      sx={{
        borderTop: '1px solid',
        borderTopColor: 'grey-20',
        paddingTop: 'xs',
        paddingBottom: 'xs',
        marginBottom: '0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        variant: styles(variant, 'li')
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
