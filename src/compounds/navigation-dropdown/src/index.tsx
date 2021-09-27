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
    setSelection(e?.target?.innerText || selection)

    if (e.target.innerText === 'Please select') {
      e.preventDefault()
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

  const createLinks = (config: NavConfig) =>
    Object.keys(config).map((href, index) =>
      selection !== config[href]
        ? React.createElement('a', { href, key: `link${index}` }, [
            config[href]
          ])
        : null
    )

  const createReactList = (config: NavConfig) => {
    const listLinks = createLinks(config)
    const listItems = listLinks.map((link, index) =>
      React.createElement(
        'li',
        { onClick: (e: Event) => handleItemClick(e), key: `item${index}` },
        [link]
      )
    )

    return React.createElement('ul', {}, [listItems])
  }

  const navigationList = createReactList(navConfig)

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
      <div
        sx={{
          position: 'absolute',
          width: listWidth || 'inherit',
          zIndex: '1000'
        }}
      >
        {open && navigationList}
      </div>
    </div>
  )
}

export default NavigationDropdown
