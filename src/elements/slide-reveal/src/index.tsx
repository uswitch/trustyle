/** @jsx jsx */

import * as React from 'react'
import { jsx } from 'theme-ui'

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
  className?: string
}

const SlideReveal: React.FC<Props> = ({ open, children, className }) => {
  const contentsWrapperEl = React.useRef<HTMLDivElement>(null)
  const [height, setHeight] = React.useState(0)

  // This is to ensure that the maxHeight is added back to the DOM before it is
  // set to 0 - otherwise the transition doesn't happen
  const [delayedOpen, setDelayedOpen] = React.useState(open)

  // Initial is to make sure that content displays when JS is disabled and that
  // initially opened content doesn't animate open
  const [initial, setInitial] = React.useState(true)

  // Store whether we're transitioning or not so that when the slider is open
  // and not transitioning, we can remove the maxHeight to reduce the
  // possibility of edge cases causing content to be cropped
  const [transitioning, setTransitioning] = React.useState(false)

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
      setTransitioning(true)
    }
  })

  if (delayedOpen !== open) {
    setTimeout(() => setDelayedOpen(open))
  }

  return (
    <div
      sx={
        initial || (!transitioning && delayedOpen)
          ? {}
          : {
              maxHeight: delayedOpen ? height + buffer : 0,
              overflow: 'hidden',
              transform: 'max-height 0.4s',
              variant: 'elements.slide-reveal.maxHeight'
            }
      }
      onTransitionEnd={() => setTransitioning(false)}
      // This updates the height when child images finish loading
      onLoad={calculateHeight}
      className={className}
    >
      <div ref={contentsWrapperEl}>{children}</div>
    </div>
  )
}

export default SlideReveal
