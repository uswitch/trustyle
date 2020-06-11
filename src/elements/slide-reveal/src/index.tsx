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
}

const SlideReveal: React.FC<Props> = ({ open, children }) => {
  const contentsWrapperEl = React.useRef(null)
  const [height, setHeight] = React.useState(0)
  // Initial is to make sure that content displays when JS is disabled
  const [initial, setInitial] = React.useState(true)
  const [transitioning, setTransitioning] = React.useState(false)

  const calculateHeight = () => {
    const height = contentsWrapperEl.current.getBoundingClientRect().height
    setHeight(height)
    setInitial(false)
  }

  const prevOpen = usePrevious(open)
  React.useEffect(() => {
    calculateHeight()

    if (prevOpen !== undefined && open !== prevOpen) {
      setTransitioning(true)
    }
  })

  return (
    <div>
      <div
        sx={
          initial || (!transitioning && open)
            ? {}
            : {
                maxHeight: open ? height + buffer : 0,
                transition: 'max-height 0.4s',
                overflow: 'hidden'
              }
        }
        onTransitionEnd={() => setTransitioning(false)}
      >
        <div ref={contentsWrapperEl} onLoad={calculateHeight}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default SlideReveal
