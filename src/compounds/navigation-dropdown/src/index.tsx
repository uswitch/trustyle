/** @jsx jsx */
import React, { useEffect, useRef, useState } from 'react'
import { jsx } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface NavConfig {
  [key: string]: string
}

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  pathName: string
  navConfig: NavConfig
}

const NavigationDropdown: React.FC<DropdownProps> = ({
  children,
  title = '',
  pathName = '',
  navConfig = {}
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState(pathName || 'Please select')
  const [listWidth, setListWidth] = useState(`${ref?.current?.offsetWidth}px`)

  const handleClick = () => setOpen(!open)
  const handleItemClick = (e: any) => {
    const childContent = e?.target?.children
    if (
      childContent?.length &&
      childContent[0]?.innerText &&
      Object.values(navConfig).includes(childContent[0]?.innerText)
    ) {
      if (
        childContent[0]?.innerText === 'Please select' ||
        childContent[0]?.innerText === selection
      ) {
        e.preventDefault()
        return
      }

      return setSelection(childContent[0]?.innerText || selection)
    }
  }
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
    handleResize()

    window.addEventListener('keydown', handleHideDropdown, true)
    window.addEventListener('click', handleClickOutside, true)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleHideDropdown, true)
      window.removeEventListener('click', handleClickOutside, true)
      window.removeEventListener('resize', handleResize)
    }
  })

  console.log('children', children)
  return (
    <div
      ref={ref}
      sx={{
        variant: 'compounds.navigation-dropdown',
        width: '100%',
        maxWidth: '400px'
      }}
      onClick={handleClick}
    >
      <p sx={{ variant: 'compounds.navigation-dropdown.title' }}>{title}</p>
      <button
        sx={{
          width: '100%',
          height: '55px',
          py: 'sm',
          pl: 'sm',
          pr: 'xl',
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
      {open && (
        <div
          sx={{
            variant: 'compounds.navigation-dropdown.container',
            position: 'absolute',
            width: listWidth || 'inherit',
            zIndex: '1000',
            boxSizing: 'border-box'
          }}
          onClick={e => handleItemClick(e)}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export default NavigationDropdown
