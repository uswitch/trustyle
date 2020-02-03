import facepaint from 'facepaint'

export const breakpoints = {
  s: 0,
  m: 768,
  l: 990
}

export interface Breakpoints {
  s?: number
  m?: number
  l?: number
}

export const mq = facepaint(
  [768, 990].map((bp: number) => `@media (min-width: ${bp}px)`)
)
