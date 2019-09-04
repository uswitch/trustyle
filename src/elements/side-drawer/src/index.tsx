/** @jsx jsx */

import { createRef, Fragment, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Transition, TransitionGroup } from 'react-transition-group'
import FocusTrap from 'focus-trap-react'
import { css, jsx } from '@emotion/core'
import { Icon } from '@uswitch/trustyle.icon'
import { colors } from '@uswitch/trustyle.styles'

import * as st from './styles'

interface ModalProps {
  ariaLabel: string // a description of the modal’s content
  children: React.ReactNode
  disableScrolling: boolean
  side: 'left' | 'right'
  triggerElement: React.ReactNode
  triggerProps?: object
}

const lockBackground = () => {
  const htmlNode = document.querySelector('html')
  const bodyNode = document.querySelector('body')
  if (htmlNode && bodyNode) {
    htmlNode.style.overflow = 'hidden'
  }
}

const unlockBackground = () => {
  const htmlNode = document.querySelector('html')
  const bodyNode = document.querySelector('body')
  if (htmlNode && bodyNode) {
    htmlNode.style.overflow = ''
  }
}

export const Drawer: React.FC<ModalProps> = ({
  ariaLabel,
  children,
  disableScrolling,
  side,
  triggerElement,
  triggerProps
}) => {
  const triggerRef: React.RefObject<HTMLButtonElement> = createRef()
  const backgroundRef: React.RefObject<HTMLElement> = createRef()
  const closeBtnRef: React.RefObject<HTMLButtonElement> = createRef()

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
    if (disableScrolling) lockBackground()
  }

  const closeModal = () => {
    setIsOpen(false)
    if (disableScrolling) unlockBackground()
    // Focuses on the trigger element when the modal closes.
    const triggerNode = triggerRef.current
    if (triggerNode) triggerNode.focus()
  }

  const onClick = (event: React.MouseEvent<HTMLElement>): void => {
    if (event.target === backgroundRef.current) closeModal()
  }

  // Focuses the close button when the modal opens.
  useEffect(() => {
    const closeBtnNode = closeBtnRef.current
    if (closeBtnNode) closeBtnNode.focus()
  })

  return (
    <Fragment>
      <button
        type="button"
        css={st.trigger}
        onClick={openModal}
        ref={triggerRef}
        {...triggerProps}
      >
        {triggerElement}
      </button>
      <TransitionGroup component={null}>
        <Transition timeout={st.transitionDuration} key={isOpen.toString()}>
          {transitionState =>
            isOpen &&
            createPortal(
              <aside
                aria-label={ariaLabel}
                aria-modal="true"
                css={st.background}
                onClick={onClick}
                ref={backgroundRef}
                role="dialog"
              >
                <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
                  <div
                    css={css([
                      st.drawer,
                      st.transitionPositions[side][transitionState]
                    ])}
                  >
                    <div css={st.closeRow}>
                      <button
                        aria-label="Close Modal"
                        css={st.closeBtn}
                        onClick={closeModal}
                        ref={closeBtnRef}
                      >
                        <Icon glyph="close" color={colors.cerulean} size={20} />
                      </button>
                    </div>
                    <div css={st.drawerBody}>{children}</div>
                  </div>
                </FocusTrap>
              </aside>,
              document.body
            )
          }
        </Transition>
      </TransitionGroup>
    </Fragment>
  )
}
