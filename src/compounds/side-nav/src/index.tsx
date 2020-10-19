/** @jsx jsx */

import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
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

const SideNav: React.FC<Props> = ({
  internalLinks,
  additionalLinks = [],
  className
}) => {
  return (
    <nav className={className}>
      <Accordion.Group>
        <Accordion
          title={internalLinks.title}
          sx={{
            variant: 'compounds.side-nav.accordion'
          }}
        >
          <ul
            sx={{
              variant: 'compounds.side-nav.internalLinkList'
            }}
          >
            {internalLinks?.links?.map(({ text, url, isActive }) => {
              return (
                <li
                  key={url}
                  sx={{
                    variant: `compounds.side-nav.internalLinkListItem.${
                      isActive ? 'isActive' : 'base'
                    }`
                  }}
                >
                  <a href={url} sx={{ borderBottom: 0 }}>
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </Accordion>
        {additionalLinks.map(({ title, links = [] }, index) => (
          <Accordion
            key={index}
            title={title}
            sx={{
              variant: 'compounds.side-nav.accordion'
            }}
          >
            <ul sx={{ padding: 0, margin: 0 }}>
              {links.map(({ text, url }, index) => (
                <li
                  key={index}
                  sx={{
                    marginBottom: 0,
                    paddingBottom: 0,
                    variant: 'compounds.side-nav.additionalLink'
                  }}
                >
                  <Styled.a href={url} sx={{ borderBottom: 0 }}>
                    {text}
                  </Styled.a>
                </li>
              ))}
            </ul>
          </Accordion>
        ))}
      </Accordion.Group>
    </nav>
  )
}

export default SideNav
