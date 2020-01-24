/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import Accordion from '@uswitch/trustyle.accordion'

interface Waypoint {
  title: string;
  anchor: string;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  waypoints:  Waypoint[];
  activeId: string
}

const SideNav: React.FC<Props> = ({
  activeId,
  waypoints = [
    {
      title: 'Put money aside for a deposit',
      anchor: 'heading1'
    },
    {
      title: 'Work out your budget',
      anchor: 'heading2'
    },
    {
      title: 'Get a mortgage agreed in principle',
      anchor: 'heading3'
    }
  ],
  additionalLinks = [
    {
      title: 'Related articles',
      links: [
        {
          text: 'This is a link',
          url: '/'
        },
        {
          text: 'This is a link 2',
          url: '/'
        },
        {
          text: 'This is a link 3',
          url: '/'
        }
      ]
    },
    {
      title: 'Compare',
      links: [
        {
          text: 'This is a link',
          url: '/'
        },
        {
          text: 'This is a link 2',
          url: '/'
        },
        {
          text: 'This is a link 3',
          url: '/'
        }
      ]
    }
  ]
}) => {
  const { theme: { sideNav: sideNavTheme = {} } = {} }: any = useThemeUI()
  let activeIndex: number = Math.max(0, waypoints.findIndex(({ anchor }) => anchor === activeId))

  return <nav>
    <Accordion 
      title='In this guide'
      isInitiallyOpen
    >
      <ul sx={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {waypoints.map(({ title, anchor }, index) => {
          const isFirst = index === 0;
          const isLast = index === waypoints.length - 1
          const isActive = activeIndex === index
          return <li 
            key={anchor}
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
              href={`#${anchor}`}
              sx={{
                color: isActive ? sideNavTheme.activeTextColor : sideNavTheme.textColor,
                textDecoration: 'none',
                fontSize: 'xs',
                fontWeight: isActive ? 'bold' : 'base'
              }}
            >
              {title}
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
        <ul>
          {
            links.map(({ text, url }, index) =>
              <li key={index}>
                <a href={url}>{text}</a>
              </li>
            )
          }
        </ul>
      </Accordion>  
    )}
  </nav>
}

export default SideNav
