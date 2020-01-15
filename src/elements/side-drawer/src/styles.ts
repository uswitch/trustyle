import { css, SerializedStyles } from '@emotion/core'
import { colors, pxToRem, spacers } from '@uswitch/trustyle.styles'

/* To Do
-Update designs for tablet/desktop when they’re received
*/

export const transitionDuration = 400

export const background: SerializedStyles = css({
  left: 0,
  height: '100%',
  position: 'fixed',
  top: 0,
  transform: 'translateZ(0)',
  width: '100%',
  zIndex: 1002 // header from includes is 1001
})

interface TransitionStates {
  entering: SerializedStyles
  entered: SerializedStyles
  exiting: SerializedStyles
  exited: SerializedStyles
  unmounted: SerializedStyles
}

const fromLeft: TransitionStates = {
  entering: css({ transform: 'translateX(0%)' }),
  entered: css({ transform: 'translateX(0%)' }),
  exiting: css({ transform: 'translateX(-100%)' }),
  exited: css({ transform: 'translateX(-100%)' }),
  unmounted: css({ transform: 'translateX(0%)' })
}

const fromRight: TransitionStates = {
  entering: css({ transform: 'translateX(0%)' }),
  entered: css({ transform: 'translateX(0%)' }),
  exiting: css({ transform: 'translateX(100%)' }),
  exited: css({ transform: 'translateX(100%)' }),
  unmounted: css({ transform: 'translateX(0%)' })
}

export const transitionPositions = {
  left: fromLeft,
  right: fromRight
}

// mobile only!
export const drawer: SerializedStyles = css({
  backgroundColor: colors.white,
  boxShadow: '0 0 10px 3px rgba(0, 0, 0, 0.1)',
  height: '100%',
  left: 0,
  overflowY: 'auto',
  position: 'fixed',
  transition: `transform ${transitionDuration}ms cubic-bezier(0.6, 0.05, 0.1, 0.99)`,
  WebkitOverflowScrolling: 'touch',
  width: '100%'
})

export const closeRow: SerializedStyles = css({
  display: 'flex',
  justifyContent: 'flex-end'
})

export const closeBtn: SerializedStyles = css({
  backgroundColor: colors.white,
  border: 0,
  cursor: 'pointer',
  padding: pxToRem(spacers.teal),
  display: 'block'
})

const iconHeight = pxToRem(20)
const iconPaddingHeight = pxToRem(2 * spacers.teal)

export const drawerBody: SerializedStyles = css({
  height: `calc(100% - ${iconHeight} - ${iconPaddingHeight})`
})
