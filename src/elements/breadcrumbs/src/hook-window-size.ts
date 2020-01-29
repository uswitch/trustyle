// @rehooks/window-size but without the dependency on React
// https://github.com/rehooks/window-size/pull/6
import { useEffect, useState } from 'react'

interface WindowSize {
  innerHeight: number
  innerWidth: number
  outerHeight: number
  outerWidth: number
}

function getSize(): WindowSize {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth
  }
}

export default function useWindowSize(): WindowSize {
  let [windowSize, setWindowSize] = useState(getSize())

  function handleResize() {
    setWindowSize(getSize())
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
