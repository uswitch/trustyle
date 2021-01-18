/** @jsx jsx */

import React from 'react'
import { jsx } from 'theme-ui'
import { Tab, Tabs } from '@uswitch/trustyle.tabs'

import Content from './content'
import { Item } from './types'

import { useNavigation } from '.'

interface Props {
  items: Item[]
}

const Mobile: React.FC<Props> = ({ items, ...props }) => {
  const { setSelected } = useNavigation()

  const handleClick = () => {
    setSelected !== undefined && setSelected(null)
  }

  return (
    <Tabs variant="menu" onClick={handleClick} {...props}>
      {items.map(({ title, items = [] }, i) => (
        <Tab title={title} key={i}>
          <Content
            content={items}
            sx={{ height: '100%', overflowY: 'scroll' }}
          />
        </Tab>
      ))}
    </Tabs>
  )
}

export default Mobile
