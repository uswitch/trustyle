/** @jsx jsx */

import React, { useState } from 'react'
import { jsx, useThemeUI } from 'theme-ui'
import { ButtonLink } from '@uswitch/trustyle.button-link'
import { Button } from '@uswitch/trustyle.button'
import { Icon } from '@uswitch/trustyle.icon'

import ContentSeparator from './content-separator'
import Item from './item'

import { makeStyles, useNavigation } from '.'

const SelectedItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  const { theme } = useThemeUI()
  const {
    mobile: { headerHeight = 56 } = {},
    'selected-nav-item': { link = {} } = {}
  } = theme.elements?.navigation || {}
  const {
    color = 'text',
    icon: { glyph = 'caret', direction = 'right', size = 12 } = {}
  } = link
  const {
    selected,
    setSelected,
    open: mainMenuOpen,
    styles = makeStyles()
  } = useNavigation()
  const [open, setOpen] = useState(false)

  React.useEffect(() => {
    selected && setOpen(true)
  }, [selected])

  const goBack = () => {
    setOpen(false)
  }

  const deselectIfClosed = () => {
    !open && setSelected !== undefined && setSelected(null)
  }

  return (
    <div
      sx={{
        position: ['fixed', 'absolute'],
        boxSizing: 'border-box',
        top: [`${2 * headerHeight}px`, 0],
        right: 0,
        width: '100%',
        height: ['100%', 'fit-content'],
        padding: 'gutter',
        transform: `translateX(${
          !mainMenuOpen ? '100%' : !selected ? '100%' : !open ? '100%' : '0%'
        })`,
        transition: 'transform .3s ease-in-out',
        backgroundColor: '#fff',
        overflowY: 'scroll',
        variant: styles('selected-nav-item-container')
      }}
      onTransitionEnd={deselectIfClosed}
      {...props}
    >
      <ul sx={{ variant: styles('list-styling') }}>
        <ContentSeparator>
          {selected && (
            <ul sx={{ variant: styles('list-styling') }}>
              <Item
                item={{ ...selected, description: undefined }}
                icon={{
                  glyph: 'caret',
                  direction: 'left',
                  position: 'left'
                }}
                sx={{ variant: styles('selected-nav-item') }}
                onClick={goBack}
              />
            </ul>
          )}

          {(selected?.href || selected?.linkLabel) && (
            <ButtonLink
              href={selected.href || ''}
              variant="link"
              sx={{
                display: 'inline-flex',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                width: '100%',
                fontSize: 'xxs',
                lineHeight: 2,
                padding: 'xs',
                mb: 'md',
                variant: styles('selected-nav-item.link')
              }}
            >
              <span>{selected?.linkLabel}</span>

              <Button
                variant="link"
                sx={{
                  width: 24,
                  height: 24,
                  padding: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Icon
                  glyph={glyph}
                  color={color}
                  size={size}
                  direction={direction}
                />
              </Button>
            </ButtonLink>
          )}
        </ContentSeparator>

        {selected?.items?.find(({ items }) => items && items.length) ? (
          selected?.items?.map((item, index) => (
            <ContentSeparator key={index}>
              <ul sx={{ variant: styles('list-styling') }}>
                <Item item={{ title: item.title }} minimized />

                {item.items?.map((item, i) => (
                  <Item item={item} key={i} minimized />
                ))}
              </ul>
            </ContentSeparator>
          ))
        ) : (
          <ContentSeparator>
            <ul sx={{ variant: styles('list-styling') }}>
              {selected?.items?.map((item, i) => (
                <Item item={item} key={i} minimized />
              ))}
            </ul>
          </ContentSeparator>
        )}
      </ul>
    </div>
  )
}

export default SelectedItem
