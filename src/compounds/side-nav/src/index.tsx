/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import Accordion from '@uswitch/trustyle.accordion'

interface Link {
  text: string
  url: string
  isActive?: boolean
}

interface LinkGroup {
  title: string
  links: Link[]
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  internalLinks: LinkGroup
  additionalLinks?: LinkGroup[]
}

const SideNav: React.FC<Props> = ({ internalLinks, additionalLinks = [] }) => {
  const { theme: { sideNav: sideNavTheme = {} } = {} }: any = useThemeUI()
  const {
    internalLink: { padding = 0, color = '', after = {}, before = {} } = {},
    activeInternalLink: {
      color: activeInternalLinkColor = '',
      after: activeInternalLinkAfter = {},
      before: activeInternalLinkBefore = {}
    } = {},
    additionalLink = {}
  } = sideNavTheme

  return (
    <nav>
      <Accordion title={internalLinks.title} isInitiallyOpen>
        <ul
          sx={{
            listStyle: 'none',
            paddingLeft: 0,
            paddingTop: 'xxs',
            paddingBottom: 'xxs',
            margin: 0
          }}
        >
          {internalLinks?.links?.map(({ text, url, isActive }, index) => {
            const isFirst = index === 0
            const isLast = index === internalLinks.links.length - 1
            return (
              <li
                key={url}
                sx={{
                  padding,
                  marginBottom: 0,
                  position: 'relative',
                  '::after': {
                    ...after,
                    ...(isActive ? activeInternalLinkAfter : {})
                  },
                  '::before': {
                    ...before,
                    ...(isActive ? activeInternalLinkBefore : {}),
                    top: isFirst ? '50%' : 0,
                    height: isFirst || isLast ? '50%' : '100%'
                  }
                }}
              >
                <a
                  href={url}
                  sx={{
                    color: isActive ? activeInternalLinkColor : color,
                    textDecoration: 'none',
                    fontSize: 'xs',
                    fontWeight: isActive ? 'bold' : 'base',
                    ':visited': {
                      color: isActive ? activeInternalLinkColor : color
                    }
                  }}
                >
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
      </Accordion>
      {additionalLinks.map(({ title, links = [] }, index) => (
        <Accordion key={index} title={title}>
          <ul sx={{ padding: 0, margin: 0 }}>
            {links.map(({ text, url }, index) => (
              <li key={index} sx={{ marginBottom: 0 }}>
                <a
                  href={url}
                  sx={{
                    display: 'block',
                    ...additionalLink
                  }}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </nav>
  )
}

export default SideNav
