import facepaint from 'facepaint'

export const breakpoints = [320, 640, 1150]

export const mq = facepaint(
    breakpoints.map((bp: number) => `@media (min-width: ${bp}px)`)
)
