/** @jsx jsx */

import React from 'react'
import { jsx, useThemeUI } from 'theme-ui'

import ContentSeparator from './content-separator'
import Item from './item'
import { Item as ItemType } from './types'

import { useNavigation } from '.'

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  content: ItemType[]
}

const Content: React.FC<Props> = ({ content, ...props }) => {
  const { theme } = useThemeUI()
  const {
    'nav-item': {
      icon = {
        glyph: 'caret',
        direction: 'right',
        position: 'right',
        color: 'text',
        size: 12
      }
    } = {}
  } = theme.elements?.navigation || {}
  const { setSelected } = useNavigation()

  return (
    <ul
      sx={{
        listStyle: 'none',
        padding: 'gutter',
        margin: 0
      }}
      {...props}
    >
      {content.map((item, i) => (
        <ContentSeparator title={item.title} key={i}>
          <ul sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {item.items?.map((item, i) => (
              <Item
                item={item}
                key={i}
                icon={icon}
                onClick={() => setSelected !== undefined && setSelected(item)}
              />
            ))}
          </ul>
        </ContentSeparator>
      ))}
    </ul>
  )
}

export default Content
