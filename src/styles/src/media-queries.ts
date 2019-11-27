import facepaint from 'facepaint'

const breakpoints = [320, 640, 1150]

export default facepaint(
    breakpoints.map((bp: number) => `@media (min-width: ${bp}px)`)
)
