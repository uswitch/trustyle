import facepaint from 'facepaint'

export const breakpoints = {
  s: 320,
  m: 640,
  l: 1150
}

export const mq = facepaint(
  Object.values(breakpoints).map((bp: number) => `@media (min-width: ${bp}px)`)
)
