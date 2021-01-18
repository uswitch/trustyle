/** @jsx jsx */

import React, { useState } from 'react'
import { jsx, Styled } from 'theme-ui'
import { Button } from '@uswitch/trustyle.button'

import Dropdown from './dropdown'
import { Item } from './types'

import { makeStyles, useNavigation } from '.'

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  items: Item[]
}

const Desktop: React.FC<Props> = ({ items, ...props }) => {
  const {
    styles = makeStyles(),
    setOpen,
    setSelected: setCtxSelected
  } = useNavigation()
  const [selected, setSelected] = useState<number | null>(null)

  const handleMouseOver = (i: number) => {
    setCtxSelected && setCtxSelected(null)
    setSelected(i)
    setOpen && setOpen(true)
  }

  return (
    <ul sx={{ variant: styles('desktop-container') }} {...props}>
      {items.map((item, i) => (
        <li
          key={i}
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            variant: styles('desktop-selector')
          }}
          onMouseLeave={() => setSelected(null)}
        >
          <Button
            variant="link"
            onMouseOver={() => handleMouseOver(i)}
            sx={{ padding: 'md', background: 'none', border: 'none' }}
          >
            <Styled.h4>{item.title}</Styled.h4>
          </Button>

          {selected === i && <Dropdown item={item} />}
        </li>
      ))}
    </ul>
  )
}

export default Desktop
