/** @jsx jsx */

import React, { useContext, useState } from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { Glyph, Icon } from '@uswitch/trustyle.icon'
import { ImgixImage } from '@uswitch/trustyle.imgix-image'
import { Palette } from '@uswitch/trustyle-utils.palette'

interface ContextProps {
  open: number
  setOpenId: React.Dispatch<number>
  iconClosed?: Glyph
  iconOpen?: Glyph
}

const AccordionContext = React.createContext<Partial<ContextProps>>({
  // -1: there is a group and they're all closed
  // -2: there is no group
  open: -2
})

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  index?: number
  title: string
  openedTitle?: string
  isInitiallyOpen?: boolean
  className?: string
  icon?: string
  glyph?: Glyph
  glyphColor?: string
  variant?: string
  scrollToRef?: React.RefObject<HTMLElement>
  buttonProps?: object | ButtonPropsFn
  sx?: object
  card?: boolean
  inverted?: boolean // Inverts the direction of the accordion icon
}

type ButtonPropsFn = (args: { open: boolean; title: string }) => object

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  className?: string
}

interface GroupProps {
  iconClosed?: Glyph
  iconOpen?: Glyph
  className?: string
}

const Accordion: React.FC<Props> & {
  Group: React.FC<GroupProps>
  Title: React.FC<TitleProps>
} = ({
  index,
  title: closedTitle,
  openedTitle,
  isInitiallyOpen = false,
  children,
  className,
  icon = '',
  glyph,
  glyphColor = '',
  scrollToRef,
  variant = 'base',
  buttonProps: buttonPropsFn,
  sx = {},
  card = false,
  inverted = false
}) => {
  const {
    theme: {
      compounds: { accordion: accordionTheme = {} },
      colors = {}
    }
  }: any = useThemeUI()
  const [isOpenState, setIsOpenState] = useState(isInitiallyOpen)
  const accordionContext = useContext(AccordionContext)
  let isOpen: boolean
  let setIsOpen: (isOpen: boolean) => void

  if (accordionContext.open === -2 || !accordionContext.setOpenId) {
    isOpen = isOpenState
    setIsOpen = setIsOpenState
  } else {
    isOpen = accordionContext.open === index
    setIsOpen = isOpen =>
      // @ts-ignore - I have no idea why this is required
      accordionContext.setOpenId(isOpen ? (index as number) : -1)
  }

  const title =
    typeof openedTitle !== 'undefined' && isOpen ? openedTitle : closedTitle

  const buttonProps =
    typeof buttonPropsFn === 'function'
      ? buttonPropsFn({ open: isOpen, title })
      : buttonPropsFn

  const hasBoxShadow = card
    ? {
        minHeight: isOpen ? '80%' : 'auto',
        boxShadow: isOpen
          ? '0px -1px 16px rgba(0, 0, 0, 0.15), 0px -159px 36px 4px rgba(255, 255, 255, 0.7)'
          : 'none'
      }
    : {}

  const legacy = variant === 'legacy'

  const getVariant = (variant: string) => (element?: string) =>
    `compounds.accordion${
      variant && variant !== 'base' ? `.variants.${variant}` : '.base'
    }${element ? `.${element}` : ''}`

  const getActiveVariant = (variant: string) => (element?: string) =>
    `compounds.accordion${
      variant && variant !== 'base'
        ? `.variants.${variant}.isActive`
        : '.base.isActive'
    }${element ? `.${element}` : ''}`

  const styles = getVariant(variant)
  const activeStyles = getActiveVariant(variant)
  // dom split in variables to make the flow of this component more readable

  // Dom generated for the title if a custom icon of glyph has been passed
  const titleDomWithCustomIcon = (
    <div
      sx={{
        flex: '1',
        textAlign: 'left',
        alignItems: 'center',
        display: 'flex',
        variant: styles('title')
      }}
    >
      {glyph ? (
        <div
          sx={{
            variant: styles('glyph')
          }}
        >
          <Icon color={glyphColor} glyph={glyph} size={20} />
        </div>
      ) : (
        <div
          sx={{
            variant: 'compounds.accordion.variants.titleIcon'
          }}
        >
          <ImgixImage
            src={icon}
            imgixParams={{ fit: 'clip' }}
            critical
            sx={{
              height: '100%',
              width: '100%'
            }}
          />
        </div>
      )}
      {title}
    </div>
  )

  // Normal title dom if no custom icon or glyph has been passed
  const defaultTitleDom = (
    <div
      sx={{
        flex: '1',
        textAlign: 'left',
        variant: styles('title')
      }}
    >
      {title}
    </div>
  )

  const titleDom = icon || glyph ? titleDomWithCustomIcon : defaultTitleDom

  // Icon for the accordion if custom icons for close/open state have been passed
  let customIconGlyph: any = isOpen
    ? accordionContext.iconOpen
    : accordionContext.iconClosed
  if (inverted) {
    customIconGlyph = isOpen
      ? accordionContext.iconClosed
      : accordionContext.iconOpen
  }
  const iconDomWithCustomIcons = (
    <div sx={{ variant: styles('caret') }}>
      <Icon
        color={
          isOpen
            ? colors[accordionTheme?.base?.isActive?.caret?.color]
            : colors[accordionTheme?.base?.caret?.color]
        }
        glyph={customIconGlyph}
        size={16}
      />
    </div>
  )

  // Icon for the accordion if no custom close/open icons have been passed
  let direction: any = isOpen ? 'up' : 'down'
  if (inverted) {
    direction = isOpen ? 'down' : 'up'
  }
  const defaultIconDom = (
    <div sx={{ variant: styles('caret') }}>
      {console.log(colors[accordionTheme?.base?.caret?.color])}
      <Icon
        color={
          variant === 'eligibility-criteria-redesign'
            ? colors['button-secondary']
            : legacy
            ? 'grey-0'
            : isOpen
            ? colors[accordionTheme?.base?.isActive?.caret?.color]
            : colors[accordionTheme?.base?.caret?.color]
        }
        glyph="caret"
        direction={direction}
        size={16}
      />
    </div>
  )

  const iconDom =
    accordionContext.iconClosed && accordionContext.iconOpen
      ? iconDomWithCustomIcons
      : defaultIconDom

  return (
    <div
      sx={{
        variant: isOpen ? activeStyles('wrapper') : styles('wrapper'),
        ...sx,
        ...hasBoxShadow
      }}
      className={className}
      data-target="accordion" // this is a hack to stop clicking propagating to the product table
    >
      <Palette
        as="button"
        sx={{
          cursor: 'pointer',
          variant: isOpen ? activeStyles('btn') : styles('btn')
        }}
        px={{
          color: 'textColor'
        }}
        onClick={() => {
          if (
            isOpen &&
            variant === 'reverse' &&
            scrollToRef &&
            scrollToRef.current
          ) {
            scrollToRef.current.scrollIntoView({ behavior: 'smooth' })
          }
          setIsOpen(!isOpen)
        }}
        {...buttonProps}
      >
        {/* See just before the return for how titleDom and iconDom are generated */}
        {titleDom}
        {iconDom}
      </Palette>
      <Palette
        as="div"
        sx={{
          overflow: 'hidden',
          height: isOpen ? 'auto' : '0',
          marginBottom: isOpen
            ? accordionTheme?.base?.content?.marginBottom
            : '0',
          '> *:first-child': {
            marginTop: 0
          },
          '> *:last-child': {
            marginBottom: 0
          },
          '> p:last-child': {
            marginBottom: 'xs'
          },
          variant: styles('content')
        }}
        px={{ color: 'textColor' }}
      >
        {children}
      </Palette>
    </div>
  )
}

export default Accordion

Accordion.Group = ({ children, iconClosed, iconOpen, className }) => {
  const [openId, setOpenId] = useState(0)

  const childrenWithIndexes = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { index })
    }

    return child
  })

  return (
    <div
      sx={{
        marginTop: 'sm',
        marginBottom: 'sm',
        variant: 'compounds.accordion.base'
      }}
      className={className}
    >
      <AccordionContext.Provider
        value={{ open: openId, setOpenId, iconClosed, iconOpen }}
      >
        {childrenWithIndexes}
      </AccordionContext.Provider>
    </div>
  )
}

Accordion.Title = ({ children, as = 'h2', className }) => {
  return (
    <Styled.h3
      as={as}
      sx={{
        variant: 'compounds.accordion.base.groupTitle'
      }}
      className={className}
    >
      {children}
    </Styled.h3>
  )
}
