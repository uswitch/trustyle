/** @jsx jsx */
import React, { useEffect, useRef, useState } from 'react'
import { jsx } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  pathName?: string
}

const NavigationDropdown: React.FC<DropdownProps> = ({
  children,
  title = '',
  pathName = ''
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState(pathName || 'Please select')
  const [listWidth, setListWidth] = useState(`${ref?.current?.offsetWidth}px`)

  const handleClick = () => setOpen(!open)
  const handleItemClick = (item: any) => setSelection(item.target.innerText)
  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpen(false)
    }
  }
  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false)
    }
  }
  const handleResize = () => setListWidth(`${ref?.current?.offsetWidth}px`)

  useEffect(() => {
    window.addEventListener('keydown', handleHideDropdown, true)
    window.addEventListener('click', handleClickOutside, true)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleHideDropdown, true)
      window.removeEventListener('click', handleClickOutside, true)
      window.removeEventListener('resize', handleResize)
    }
  })

  const cloneChildren = (children: any) => {
    return React.Children.map(children, (child, key) => {
      let nestedChild = child?.props?.children
      const hasNestedChild = nestedChild && typeof nestedChild !== 'string'
      let optionValue = ''

      if (!hasNestedChild) {
        optionValue = nestedChild

        return React.cloneElement(child, { optionvalue: optionValue, key }, [
          nestedChild
        ])
      }

      nestedChild = cloneChildren(nestedChild)
      optionValue = nestedChild[0]?.props?.optionvalue

      return !(selection === optionValue)
        ? React.cloneElement(
            child,
            {
              onClick: (e: Event) => child?.type === 'li' && handleItemClick(e),
              key
            },
            [nestedChild]
          )
        : null
    })
  }

  const clonedChildren: React.ReactNode[] = cloneChildren(children)

  return (
    <div
      ref={ref}
      sx={{
        variant: 'elements.navigation-dropdown',
        width: '100%',
        maxWidth: '400px'
      }}
      onClick={handleClick}
    >
      <p sx={{ variant: 'elements.navigation-dropdown.title' }}>{title}</p>
      <button
        sx={{
          width: '100%',
          height: '55px',
          padding: '16px 48px 16px 16px',
          verticalAlign: 'middle',
          position: 'relative',
          fontFamily: 'base',
          fontSize: 'base',
          cursor: 'pointer',
          backgroundColor: '#ffffff',
          boxSizing: 'border-box',
          border: !open && 'none',
          '&:focus, &:focus-visible': {
            border: !open ? 'none' : '1px solid #141424'
          }
        }}
        tabIndex={0}
        role="button"
      >
        <span
          sx={{
            marginBottom: 0,
            lineHeight: '23px',
            float: 'left'
          }}
        >
          {selection}
        </span>
        <span
          sx={{
            height: '15px',
            width: '15px',
            pointerEvents: 'none',
            position: 'absolute',
            right: '16px',
            top: 'calc(50% - 7.5px)'
          }}
        >
          <Icon glyph="caret" color="black" direction={open ? 'up' : 'down'} />
        </span>
      </button>
      <div
        sx={{
          position: 'fixed',
          width: listWidth || 'inherit'
        }}
      >
        {open && clonedChildren}
      </div>
    </div>
  )
}

export default NavigationDropdown
