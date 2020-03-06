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

const SideNav: React.FC<Props> = ({ internalLinks, additionalLinks = [] }) => {
  return (
    <nav>
      <Accordion.Group>
        <Accordion title={internalLinks.title}>
          <ul
            sx={{
              variant: 'sideNav.internalLinkList'
            }}
          >
            {internalLinks?.links?.map(({ text, url, isActive }) => {
              return (
                <li
                  key={url}
                  sx={{
                    variant: `sideNav.internalLinkListItem.${
                      isActive ? 'isActive' : 'base'
                    }`
                  }}
                >
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </Accordion>
        {additionalLinks.map(({ title, links = [] }, index) => (
          <Accordion key={index} title={title}>
            <ul sx={{ padding: 0, margin: 0 }}>
              {links.map(({ text, url }, index) => (
                <li
                  key={index}
                  sx={{
                    marginBottom: 0,
                    paddingBottom: 0,
                    variant: 'sideNav.additionalLink'
                  }}
                >
                  <Styled.a href={url}>{text}</Styled.a>
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
