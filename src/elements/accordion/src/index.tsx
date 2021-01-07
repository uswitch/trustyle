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
  variant,
  buttonProps: buttonPropsFn,
  sx = {}
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

  return (
    <div
      sx={{
        variant: variant
          ? `compounds.accordion.variants.${variant}`
          : 'compounds.accordion',
        ...sx
      }}
      className={className}
      data-target="accordion" // this is a hack to stop clicking propagating to the product table
    >
      <Palette
        as="button"
        sx={{
          cursor: 'pointer',
          variant: !isOpen
            ? 'compounds.accordion.base.button'
            : 'compounds.accordion.variants.isActive.button'
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
        {icon || glyph ? (
          <div
            sx={{
              flex: '1',
              textAlign: 'left',
              alignItems: 'center',
              display: 'flex',
              variant: `compounds.accordion.variants.${variant}.title`
            }}
          >
            {glyph ? (
              <div
                sx={{
                  variant: `compounds.accordion.variants.${variant}.glyph`
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
        ) : (
          <div
            sx={{
              flex: '1',
              textAlign: 'left',
              variant: `compounds.accordion.variants.${variant}.title`
            }}
          >
            {title}
          </div>
        )}

        {accordionContext.iconClosed && accordionContext.iconOpen ? (
          <div
            sx={{ variant: `compounds.accordion.variants.${variant}.caret` }}
          >
            <Icon
              color={
                isOpen
                  ? colors[accordionTheme?.variants?.isActive?.caret?.color]
                  : colors[accordionTheme?.base?.caret?.color]
              }
              glyph={
                isOpen ? accordionContext.iconOpen : accordionContext.iconClosed
              }
              size={16}
            />
          </div>
        ) : (
          <div
            sx={{ variant: `compounds.accordion.variants.${variant}.caret` }}
          >
            <Icon
              color={
                variant === 'eligibility-criteria-redesign'
                  ? colors['button-secondary']
                  : isOpen
                  ? colors[accordionTheme?.variants?.isActive?.caret?.color]
                  : colors[accordionTheme?.base?.caret?.color]
              }
              glyph="caret"
              direction={isOpen ? 'up' : 'down'}
              size={16}
            />
          </div>
        )}
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
          variant: 'compounds.accordion.base.content'
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
        variant: 'compounds.accordion.base.title'
      }}
      className={className}
    >
      {children}
    </Styled.h3>
  )
}
