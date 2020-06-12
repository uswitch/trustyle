/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'
import { keyframes } from '@emotion/core'

// Extra pixels just in case something minor changes and isn't caught by onLoad
// or useEffect
const buffer = 10

const usePrevious = <T extends {}>(value: T): T | undefined => {
  const ref = React.useRef<T>()
  React.useEffect(() => {
    ref.current = value
  })
  return ref.current
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
}

const SlideReveal: React.FC<Props> = ({ open, children }) => {
  const contentsWrapperEl = React.useRef<HTMLDivElement>(null)
  const [height, setHeight] = React.useState(0)

  // Initial is to make sure that content displays when JS is disabled and that
  // initially opened content doesn't animate open
  const [initial, setInitial] = React.useState(true)

  // Store whether we're animating or not so that when the slider is open
  // and not animating, we can remove the maxHeight to reduce the
  // possibility of edge cases causing content to be cropped
  const [animating, setAnimating] = React.useState(false)

  const calculateHeight = () => {
    if (contentsWrapperEl.current === null) {
      console.error('Wrapper element somehow not defined')
      return
    }
    const height = contentsWrapperEl.current.getBoundingClientRect().height
    setHeight(height)

    if (initial) {
      setInitial(false)
    }
  }

  const prevOpen = usePrevious(open)
  // This is also called when `children` changes
  React.useEffect(() => {
    calculateHeight()

    if (prevOpen !== undefined && open !== prevOpen) {
      setAnimating(true)
    }
  })

  const slideAnimation = keyframes({
    from: { maxHeight: 0 },
    to: { maxHeight: height + buffer }
  })

  return (
    <div
      sx={
        initial
          ? {}
          : animating
          ? {
              animationName: slideAnimation.toString(),
              animationDuration: '400ms',
              animationDirection: open ? 'normal' : 'reverse',
              overflow: 'hidden'
            }
          : open
          ? {}
          : { maxHeight: 0, overflow: 'hidden' }
      }
      onAnimationEnd={() => setAnimating(false)}
      // This updates the height when child images finish loading
      onLoad={calculateHeight}
    >
      <div ref={contentsWrapperEl}>{children}</div>
    </div>
  )
}

export default SlideReveal
