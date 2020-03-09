/** @jsx jsx */

import React, { useContext, useState } from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { Icon } from '@uswitch/trustyle.icon'

interface ContextProps {
  open: number
  setOpenId: React.Dispatch<number>
}

const AccordionContext = React.createContext<Partial<ContextProps>>({
  // -1: there is a group and they're all closed
  // -2: there is no group
  open: -2
})

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  index?: number
  title: string
  isInitiallyOpen?: boolean
}

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
}

const Accordion: React.FC<Props> & {
  Group: React.FC
  Title: React.FC<TitleProps>
} = ({ index, title, isInitiallyOpen = false, children }) => {
  const {
    theme: { accordion: accordionTheme = {}, colors = {} }
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

  return (
    <div>
      <button
        sx={{
          cursor: 'pointer',
          variant: !isOpen
            ? 'accordion.base.button'
            : 'accordion.variants.isActive.button'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          sx={{
            flex: '1',
            textAlign: 'left'
          }}
        >
          {title}
        </div>
        <Icon
          color={
            isOpen
              ? colors[accordionTheme?.variants?.isActive?.caret?.color]
              : colors[accordionTheme?.base?.caret?.color]
          }
          glyph="caret"
          direction={isOpen ? 'up' : 'down'}
          size={16}
        />
      </button>
      <div
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
          }
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Accordion

Accordion.Group = ({ children }) => {
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
        marginBottom: 'sm'
      }}
    >
      <AccordionContext.Provider value={{ open: openId, setOpenId }}>
        {childrenWithIndexes}
      </AccordionContext.Provider>
    </div>
  )
}

Accordion.Title = ({ children, as = 'h2' }) => {
  return (
    <Styled.h3
      as={as}
      sx={{
        variant: 'accordion.base.title'
      }}
    >
      {children}
    </Styled.h3>
  )
}
