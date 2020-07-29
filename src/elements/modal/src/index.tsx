/** @jsx jsx */
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { createPortal } from 'react-dom'
import { jsx } from 'theme-ui'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import FocusLock from 'react-focus-lock'
import { Icon } from '@uswitch/trustyle.icon'
import Measure from 'react-measure'

type ModalMobileHeight = 'full' | 'partial'
type ModalRole = 'dialog' | 'alert' | 'alertdialog'
type FocusLockProps = React.ComponentProps<typeof FocusLock>
type OnCloseFn = () => void

interface Props {
  ariaLabel: string // a description of the modal’s content
  children: React.ReactNode
  closeButtonProps?: any
  height?: ModalMobileHeight
  onClose: OnCloseFn
  role?: ModalRole
  focusLockProps?: FocusLockProps
}

interface OverlayProps {
  ariaLabel: string // a description of the modal’s content
  children: React.ReactNode
  closeButtonProps?: any
  height: ModalMobileHeight
  onClose: OnCloseFn
  role: ModalRole
  focusLockProps: FocusLockProps
}

interface OverlayIndexingContext {
  index: number
  indexes: number[]
  setIndexes: (indexes: number[]) => void
}

const OverlayIndexingContext = React.createContext<OverlayIndexingContext>({
  index: 0,
  indexes: [],
  setIndexes: () => {
    throw new Error('Not implemented')
  }
})

const Overlay: React.FC<OverlayProps> = ({
  ariaLabel,
  children,
  closeButtonProps,
  height,
  onClose,
  role
}) => {
  const holdingRef = useRef<HTMLDivElement>()
  const closeButtonRef = useRef<HTMLButtonElement>()
  const modalRef = useRef<HTMLDivElement | null>(null)
  const scrollRegionRef = useCallback(node => {
    if (node !== null) {
      // @ts-ignore: Read only prop error
      holdingRef.current = node
      disableBodyScroll(node, { reserveScrollBarGap: true })
    } else {
      if (holdingRef.current) {
        enableBodyScroll(holdingRef.current)
      } else throw new Error('Failed to unlock background, missing node.')
    }
  }, [])
  const [minHeight, setMinHeight] = useState<number | null>(null)
  const indexingContext = useContext(OverlayIndexingContext)
  const { index } = indexingContext
  const [_indexes, _setIndexes] = useState<number[]>([])

  const indexes = index > 0 ? indexingContext.indexes : _indexes
  const setIndexes = index > 0 ? indexingContext.setIndexes : _setIndexes

  useEffect(() => {
    setIndexes(((indexes: number[]) => [
      ...indexes.filter(v => v !== index),
      index
    ]) as any)

    return () => {
      setIndexes(((indexes: number[]) =>
        indexes.filter(v => v !== index)) as any)
    }
  }, [])

  const onBackgroundClick = (event: React.MouseEvent<HTMLElement>): void => {
    let withinModal = false
    let node: Node | null = event.target as Node

    event.stopPropagation()

    do {
      withinModal = withinModal || node === modalRef.current
      node = node?.parentNode
    } while (node?.parentNode)

    if (!withinModal) {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus()
      }
      onClose()
    }
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>): void => {
    if (event.keyCode === 27) onClose() // close on esc
    event.stopPropagation()
  }

  return createPortal(
    <aside
      sx={{
        left: 0,
        height: '100%',
        position: 'fixed',
        top: 0,
        transform: 'translateZ(0)',
        width: '100%',
        zIndex: 10000,
        variant: 'elements.overlay'
      }}
      style={{
        display: index === Math.max(...indexes) ? 'block' : 'none'
      }}
      aria-label={ariaLabel}
      aria-modal="true"
      onClick={onBackgroundClick}
      onKeyDown={onKeyDown}
      role={role}
    >
      <OverlayIndexingContext.Provider
        value={{ index: index + 1, indexes, setIndexes }}
      >
        <FocusLock autoFocus returnFocus>
          <div
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflowY: 'auto',
              // Enable momentum scrolling on Safari (on iOS) <= 12. No longer required in Safari 13.
              WebkitOverflowScrolling: 'touch',
              display: 'flex',
              flexFlow: 'column'
            }}
            ref={scrollRegionRef}
          >
            {/* Mobile: push down the modal if it is partial height, UNLESS the content overflows
            in which case this shrinks to 0px. */}
            <div sx={{ flex: [height === 'partial' ? 1 : 'initial', 1] }} />

            <div
              sx={{
                flex: 1,
                width: '100%',
                height: 'auto',
                variant: `elements.modal.variants.${height}`
              }}
              style={{
                // This is needed for IE11, since it doesn't properly support flex-grow
                ...(minHeight
                  ? {
                      minHeight: `${minHeight}px`
                    }
                  : {})
              }}
              ref={modalRef}
            >
              <Measure
                bounds
                onResize={({ bounds }) => {
                  if (bounds) {
                    setMinHeight(bounds?.height ?? null)
                  }
                }}
              >
                {({ measureRef }) => (
                  <div ref={measureRef}>
                    <div sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button
                        ref={closeButtonRef}
                        aria-label="Close Modal"
                        onClick={onClose}
                        sx={{
                          variant: 'elements.modal.closeButton'
                        }}
                        {...closeButtonProps}
                      >
                        <Icon glyph="close" color="#141424" size={18} />
                      </button>
                    </div>
                    <div>{children}</div>
                  </div>
                )}
              </Measure>
            </div>
            <div
              sx={{
                flex: [height === 'partial' ? 1 : 'initial', 1],
                display: ['none', 'block']
              }}
            />
          </div>
        </FocusLock>
      </OverlayIndexingContext.Provider>
    </aside>,
    document.body
  )
}

const Modal: React.FC<Props> = ({
  children,
  height = 'partial',
  role = 'dialog',
  focusLockProps = {},
  ...props
}) => (
  <Overlay
    height={height}
    role={role}
    focusLockProps={focusLockProps}
    {...props}
  >
    {children}
  </Overlay>
)

export default Modal
