/** @jsx jsx */

import React from 'react'
import { jsx, Themed, useThemeUI } from 'theme-ui'
import Accordion from '@uswitch/trustyle.accordion'
import { Palette } from '@uswitch/trustyle-utils.palette'
import { useResponsiveValue } from '@theme-ui/match-media'

interface Link {
  text: string
  url: string
  isActive?: boolean
  onClick?: () => void
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
  const { theme } = useThemeUI()
  const breakpoints = theme?.breakpoints?.map((breakpoint, i, arr) =>
    arr.length === i + 1 ? 0 : null
  ) || [null, 0]
  const initiallyOpenedId = useResponsiveValue(breakpoints, {
    defaultIndex: breakpoints?.length - 1
  })

  return (
    <nav className={className}>
      <Accordion.Group initiallyOpenedId={initiallyOpenedId}>
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
            {internalLinks?.links?.map(({ text, url, isActive, onClick }) => {
              return (
                <li
                  key={url}
                  sx={{
                    variant: `compounds.side-nav.internalLinkListItem.${
                      isActive ? 'isActive' : 'base'
                    }`
                  }}
                  onClick={onClick}
                >
                  <Palette
                    as={'a'}
                    px={{ color: 'textColor' }}
                    href={url}
                    tabIndex={0}
                    sx={{ borderBottom: 0 }}
                  >
                    {text}
                  </Palette>
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
                  <Palette
                    as={Themed.a}
                    px={{ color: 'textColor' }}
                    href={url}
                    sx={{ borderBottom: 0 }}
                  >
                    {text}
                  </Palette>
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
