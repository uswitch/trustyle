/** @jsx jsx */

import React, { useRef, useState } from 'react'
import { jsx, useThemeUI } from 'theme-ui'

import { Item } from './types'
import Content from './content'
import SelectedItem from './item-selected'

import { makeStyles, useNavigation } from '.'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  item: Item
}

const Dropdown: React.FC<Props> = ({ item, ...props }) => {
  const { styles = makeStyles(), selected } = useNavigation()
  const { theme } = useThemeUI()
  const { spacing = 0 } = theme.elements.navigation
  const dropdown = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState<number | null>(null)
  const [height, setHeight] = useState<number | null>(null)

  React.useLayoutEffect(() => {
    if (dropdown.current) {
      const { left, right } = dropdown.current?.getBoundingClientRect()
      const { innerWidth } = window

      if (right >= innerWidth - spacing) setOffset(innerWidth - right - spacing)
      if (left < spacing) setOffset(innerWidth - left - spacing)

      // if (selected) setHeight(Array.from(dropdown.current.children).reduce((maxHeight: number, child: HTMLElement) => child.clientHeight > maxHeight ? child.clientHeight, 0))
    }
  }, [dropdown, window])

  React.useLayoutEffect(() => {
    if (dropdown.current && selected) {
      // setHeight(Array.from(dropdown.current.children).reduce((maxHeight, child) => child.clientHeight > maxHeight ? child.clientHeight : maxHeight, 0))

      const { children = [] } = dropdown.current

      setHeight(children[children.length - 1].getBoundingClientRect().height)
    }
  }, [selected, dropdown])

  return (
    <div
      ref={dropdown}
      sx={{
        position: 'absolute',
        top: '100%',
        width: 504,
        display: 'flex',
        justifyContent: 'center',
        overflowX: 'hidden',
        height: !selected ? 'auto' : height,
        transform: `translateX(${offset}px)`,
        boxShadow: '0px 0px 10px rgba(62, 84, 125, 0.25)',
        ':before': {
          content: "''",
          width: 12,
          height: 12,
          backgroundColor: '#fff',
          transform: 'translateY(-6px) rotate(45deg)',
          display: 'block',
          position: 'absolute'
        },
        variant: styles('nav-dropdown')
      }}
      {...props}
    >
      <Content content={item.items || []} sx={{ width: '100%' }} />

      <SelectedItem />
    </div>
  )
}

export default Dropdown
