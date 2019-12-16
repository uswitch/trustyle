import facepaint from 'facepaint'

export const breakpoints = {
  s: 0,
  m: 640,
  l: 1150
}

export interface Breakpoints {
  s?: number
  m?: number
  l?: number
}

export const mq = facepaint(
  [640, 1150].map((bp: number) => `@media (min-width: ${bp}px)`)
)
