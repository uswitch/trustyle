/** @jsx jsx */

import React, { HTMLAttributes, useState } from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'

// import { Tab, Tabs } from '@uswitch/trustyle.tabs'
// import { Icon, Glyph } from '@uswitch/trustyle.icon'

import { Tab, Tabs } from '../../../compounds/tabs/src'
import { Direction, Glyph, Icon } from '../../icon/src'
import { Button } from '../../button/src'
import { ButtonLink } from '../../button-link/src'

interface NavigationContextProps {
  selected: NavItem | null
  setSelected: React.Dispatch<NavItem | null>
  open: boolean
  setOpen: React.Dispatch<boolean>
  styles: (element?: string | undefined) => string
}

const INIT_STATE = { selected: null }
const NavigationContext = React.createContext<Partial<NavigationContextProps>>(
  INIT_STATE
)

const useNavigation = () => React.useContext(NavigationContext)

interface NavItem {
  title: string
  description?: string
  href?: string
  linkLabel?: string
  icon?: string
  items?: NavItem[]
}

interface Logo {
  img: string
  alt?: string
  href?: string
}

export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  logo: Logo
  items: NavItem[]
  variant?: string
}

interface LogoProps extends React.LinkHTMLAttributes<HTMLLinkElement> {
  logo: Logo
}

interface TabContentProps extends React.HTMLAttributes<HTMLUListElement> {
  content: NavItem[]
}

interface ContentSeparatorProps extends React.LiHTMLAttributes<HTMLLIElement> {
  title?: string
}

interface NavTabsProps {
  items: NavItem[]
}

const makeStyles = (variant?: string) => (element?: string) =>
  `elements.navigation${variant ? `.variants.${variant}` : `.base`}${
    element ? `.${element}` : ''
  }`

const Logo: React.FC<LogoProps> = ({ logo, className }) => {
  const { img, alt, href } = logo

  return (
    <Styled.a href={href} className={className}>
      <ImgixImage
        alt={alt}
        src={img}
        // sizes={imgSizes}
        // critical={critical}
        // {...imageProps}
        // imgixParams={{
        //   fit: imageSize === 'cover' ? 'crop' : 'fill',
        //   crop: 'faces,entropy',
        //   ar: '16:9',
        //   fill: 'solid',
        //   ...(imageProps.imgixParams || {})
        // }}
      />
    </Styled.a>
  )
}

const SelectedNavItem: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  const { theme } = useThemeUI()
  const {
    mobile: { headerHeight = 56 } = {},
    'selected-nav-item': { link = {} } = {}
  } = theme.elements?.navigation
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
        position: 'fixed',
        boxSizing: 'border-box',
        top: `${2 * headerHeight}px`,
        right: 0,
        width: '100%',
        height: '100%',
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
              <NavItem
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
                <NavItem item={{ title: item.title }} minimized />

                {item.items?.map((item, i) => (
                  <NavItem item={item} key={i} minimized />
                ))}
              </ul>
            </ContentSeparator>
          ))
        ) : (
          <ContentSeparator>
            <ul sx={{ variant: styles('list-styling') }}>
              {selected?.items?.map((item, i) => (
                <NavItem item={item} key={i} minimized />
              ))}
            </ul>
          </ContentSeparator>
        )}
      </ul>
    </div>
  )
}

interface NavItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  item: NavItem
  icon?: {
    glyph: Glyph
    direction?: Direction
    position?: 'right' | 'left'
    size?: number
    color?: string
  }
  minimized?: boolean
}

const NavItem: React.FC<NavItemProps> = ({
  item,
  icon = {},
  minimized = false,
  ...props
}) => {
  const {
    glyph = 'caret',
    direction = 'right',
    position = 'right',
    size = 12,
    color = 'text'
  } = icon
  const { title, description } = item
  const { styles = makeStyles() } = useNavigation()

  return (
    <li
      sx={{
        display: 'flex',
        alignItems: 'center',
        fontSize: 'xs',
        mb: minimized ? 'xs' : 'md',
        variant: styles(`nav-item${minimized ? '.minimized' : '.base'}`)
      }}
      {...props}
    >
      {!minimized && (
        <img
          sx={{
            backgroundColor: 'light-blue',
            borderRadius: '50%',
            width: 40,
            height: 40,
            mr: 10
          }}
          src={item.icon}
        />
      )}

      {icon && !minimized && (
        <Button
          variant="link"
          sx={{
            width: 24,
            height: 24,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            order: position !== 'right' ? '-1' : '1',
            ml: position === 'left' ? 0 : 'auto',
            mr: position === 'right' ? 0 : 'xs'
          }}
        >
          <Icon glyph={glyph} color={color} size={size} direction={direction} />
        </Button>
      )}

      <div sx={{ variant: styles('nav-item.title-container') }}>
        <Styled.h5
          sx={{
            fontWeight: minimized ? 'normal' : 'bold',
            fontSize: 'xs',
            lineHeight: '20px',
            my: 0,
            variant: styles(
              `nav-item${minimized ? '.minimized' : '.base'}.title`
            )
          }}
        >
          {title}
        </Styled.h5>

        {!minimized && description && (
          <Styled.p
            sx={{
              my: 0,
              fontSize: 12,
              color: 'dark-grey-blue',
              whiteSpace: 'nowrap'
            }}
          >
            {description}
          </Styled.p>
        )}
      </div>
    </li>
  )
}

const ContentSeparator: React.FC<ContentSeparatorProps> = ({
  title,
  children,
  ...props
}) => {
  const { styles = makeStyles() } = useNavigation()

  return (
    <li
      sx={{
        borderBottom: '1px solid',
        borderColor: 'light-grey-blue',
        mb: 'md',
        ':last-of-type': {
          borderBottom: 'none'
        },
        variant: styles('content-separator')
      }}
      {...props}
    >
      {title && (
        <Styled.h5
          sx={{
            textTransform: 'uppercase',
            fontFamily: 'base',
            fontWeight: 'bold',
            color: 'dark-grey-blue',
            fontSize: 10,
            opacity: 0.5,
            margin: 0,
            mb: 'sm'
          }}
        >
          {title}
        </Styled.h5>
      )}

      {children}
    </li>
  )
}

const TabContent: React.FC<TabContentProps> = ({ content, ...props }) => {
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
  } = theme.elements?.navigation
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
              <NavItem
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

const NavTabs: React.FC<NavTabsProps> = ({ items, ...props }) => {
  const { setSelected } = useNavigation()

  const handleClick = () => {
    setSelected !== undefined && setSelected(null)
  }

  return (
    <Tabs variant="menu" onClick={handleClick} {...props}>
      {items.map(({ title, items = [] }, i) => (
        <Tab title={title} key={i}>
          <TabContent
            content={items}
            sx={{ height: '100%', overflowY: 'scroll' }}
          />
        </Tab>
      ))}
    </Tabs>
  )
}

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
  } = theme.elements?.navigation
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<NavItem | null>(null)

  return (
    <NavigationContext.Provider
      value={{ selected, setSelected, open, setOpen, styles }}
    >
      <nav
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          overflowX: 'hidden',
          position: 'relative',
          height: mobileHeaderHeight,
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
            width: menuButtonSize,
            height: menuButtonSize,
            p: 'xxs',
            mx: 'gutter',
            display: 'flex',
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

        <NavTabs
          items={items}
          sx={{
            position: 'fixed',
            height: '100%',
            top: mobileHeaderHeight,
            left: 0,
            right: 0,
            transform: `translateX(${!open ? '100%' : '0%'})`,
            variant: styles('nav-tabs')
          }}
        />

        <SelectedNavItem />
      </nav>
    </NavigationContext.Provider>
  )
}

export default Navigation
