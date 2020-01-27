/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import Accordion from '@uswitch/trustyle.accordion'

interface Link {
  text: string;
  url: string;
  isActive?: boolean;
}

interface LinkGroup {
  title: string;
  links: Link[];
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  internalLinks: LinkGroup;
  additionalLinks? : LinkGroup[];
}

const SideNav: React.FC<Props> = ({
  internalLinks,
  additionalLinks
}) => {
  const { theme: { sideNav: sideNavTheme = {} } = {} }: any = useThemeUI()

  return <nav>
    <Accordion 
      title={internalLinks.title}
    >
      <ul sx={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {internalLinks.links.map(({ text, url, isActive }, index) => {
          const isFirst = index === 0;
          const isLast = index === internalLinks.links.length - 1
          return <li 
            key={url}
            sx={{
              padding: '5px 0 5px 35px',
              position: 'relative',
              '::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)', 
                display: 'block',
                width: 12,
                height: 12,
                left: 6,
                borderRadius: 12,
                backgroundColor: 'white',
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: isActive ? sideNavTheme.activeOutlineColor : sideNavTheme.outlineColor
              },
              '::before': {
                content: '""',
                position: 'absolute',
                top: isFirst ? '50%' : 0,
                left: 13,
                width: 2,
                height: isFirst || isLast ? '50%' : '100%',
                backgroundColor: sideNavTheme.outlineColor
              }
            }}
          >
            <a 
              href={url}
              sx={{
                color: isActive ? sideNavTheme.activeTextColor : sideNavTheme.textColor,
                textDecoration: 'none',
                fontSize: 'xs',
                fontWeight: isActive ? 'bold' : 'base'
              }}
            >
              {text}
            </a>
          </li>
        })}
      </ul>
    </Accordion>
    {additionalLinks.map(({ title, links = [] }, index) =>
      <Accordion
        key={index}
        title={title}
      >
        <ul sx={{ padding: 0, margin: 0 }}>
          {
            links.map(({ text, url }, index) =>
              <li
                key={index}
                sx={{
                  marginBottom: 'xxs'
                }}
              >
                <a
                  href={url}
                  sx={{
                    color: 'grey-80',
                    padding: '5px 0',
                    textDecoration: 'none'
                  }}
                >
                  {text}
                </a>
              </li>
            )
          }
        </ul>
      </Accordion>  
    )}
  </nav>
}

export default SideNav
