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
      anchor: '#heading1'
    },
    {
      title: 'Work out your budget',
      anchor: '#heading2'
    },
    {
      title: 'Get a mortgage agreed in principle',
      anchor: '#heading3'
    }
  ]
}) => {
  const { theme }: any = useThemeUI()
  const activeIndex: number = waypoints.findIndex(({ anchor }) => anchor === activeId) || 0
  return <section>
    <Accordion 
      title='In this guide'
      isInitiallyOpen
    >
      <ul sx={{
        listStyle: 'none',
        padding: 0
      }}>
        {waypoints.map(({ title, anchor }, index) => {
          const isFirst = index === 0;
          const isLast = index === waypoints.length - 1
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
                borderRadius: 16,
                backgroundColor: 'white',
                border: activeIndex === index ? '2px solid red' : '2px solid grey'
              },
              '::before': {
                content: '""',
                position: 'absolute',
                top: isFirst ? '50%' : 0,
                left: 13,
                width: 2,
                height: isFirst || isLast ? '50%' : '100%',
                backgroundColor: 'grey'
              }
            }}
          >
            <a href={`#${anchor}`}>
              {title}
            </a>
          </li>
        })}
      </ul>
    </Accordion>
  </section>
}

export default SideNav
