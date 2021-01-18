/** @jsx jsx */

import React, { useState } from 'react'
import { jsx, useThemeUI } from 'theme-ui'

import { Icon } from '../../icon/src'
import { Button } from '../../button/src'

import Mobile from './mobile'
import Logo from './logo'
import { Item as ItemType, Logo as LogoType } from './types'
import SelectedNavItem from './item-selected'
import Desktop from './desktop'

interface NavigationContextProps {
  selected: ItemType | null
  setSelected: React.Dispatch<ItemType | null>
  open: boolean
  setOpen: React.Dispatch<boolean>
  styles: (element?: string | undefined) => string
}

const INIT_STATE = { selected: null }
const NavigationContext = React.createContext<Partial<NavigationContextProps>>(
  INIT_STATE
)

const useNavigation = () => React.useContext(NavigationContext)

export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  logo: LogoType
  items: ItemType[]
  variant?: string
}

const makeStyles = (variant?: string) => (element?: string) =>
  `elements.navigation${variant ? `.variants.${variant}` : `.base`}${
    element ? `.${element}` : ''
  }`

const Navigation: React.FC<NavProps> = ({
  logo,
  items = [],
  className,
  variant
}) => {
  const { theme } = useThemeUI()
  const styles = makeStyles(variant)
  const {
    icon: {
      menu: {
        open: menuIconOpen = 'hamburger-simple',
        close: menuIconClose = 'close',
        color = 'text',
        buttonSize: menuButtonSize = 32,
        iconSize: menuIconSize = 17
      } = {}
    } = {},
    mobile: { headerHeight: mobileHeaderHeight = 'auto' } = {}
  } = theme.elements?.navigation || {}
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<ItemType | null>(null)

  return (
    <NavigationContext.Provider
      value={{ selected, setSelected, open, setOpen, styles }}
    >
      <nav
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          overflowX: ['hidden', 'initial'],
          position: 'relative',
          height: [mobileHeaderHeight, 'auto'],
          maxHeight: '100vh',
          borderWidth: '0 0 1px',
          borderStyle: 'solid',
          borderColor: 'light-grey-blue',
          variant: styles()
        }}
        className={className}
      >
        <Logo
          logo={logo}
          sx={{
            mx: 'gutter',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            variant: styles('logo')
          }}
        />

        <Button
          variant="link"
          onClick={() => setOpen(!open)}
          sx={{
            display: ['flex', 'none'],
            width: menuButtonSize,
            height: menuButtonSize,
            p: 'xxs',
            mx: 'gutter',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Icon
            glyph={!open ? menuIconOpen : menuIconClose}
            size={menuIconSize}
            color={color}
          />
        </Button>

        <Mobile
          items={items}
          sx={{
            display: ['block', 'none'],
            position: 'fixed',
            height: '100%',
            top: mobileHeaderHeight,
            left: 0,
            right: 0,
            background: '#fff',
            transform: `translateX(${!open ? '100%' : '0%'})`,
            variant: styles('nav-tabs')
          }}
        />

        <Desktop sx={{ display: ['none', 'flex'] }} items={items} />

        <SelectedNavItem sx={{ display: ['block', 'none'] }} />
      </nav>
    </NavigationContext.Provider>
  )
}

export { useNavigation, makeStyles }

export default Navigation
