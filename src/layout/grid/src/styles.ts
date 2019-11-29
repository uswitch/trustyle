import { mq, breakpoints } from '@uswitch/trustyle.styles'
import { DynamicStyle } from 'facepaint'

const numberOfColumnss = [4, 4, 8, 12]
const colWidths = [32, 32, 64, 72]
const gutterWidths = [8, 8, 16, 24]

const containerWidths = numberOfColumnss.map((n, idx) => {
  const val = n * colWidths[idx] + n * gutterWidths[idx]
  if (val < breakpoints[0]) {
    return '100%'
  } else {
    return val
  }
})

export const container: DynamicStyle[] = mq({
  position: 'relative',
  margin: '0 auto',
  maxWidth: containerWidths
})

const getWidthPercentageFromSizes = (sizes: number[]) =>
  sizes.map((size, idx) =>  `${(100 / numberOfColumnss[idx]) * size}%`)

export const row = (centerX: boolean = false): DynamicStyle[] => mq({
  boxSizing: 'border-box',
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'row',
  width: '100%',
  justifyContent: centerX ? 'center' : 'flex-start',
  flexWrap: 'wrap',
})

const paddings = gutterWidths.map((gw) => `${gw / 2}px`)

const getDisplayFromSizes = (sizes: number[] = [1]) =>
  sizes.map(size => size === 0 ? 'none' : 'block')

export const column = (sizes: number[] = []): DynamicStyle[] => mq({
  boxSizing: 'border-box',
  flex: '1 0 auto',
  width: '100%',
  flexDirection: 'row',
  paddingRight: paddings,
  paddingLeft: paddings,
  display: getDisplayFromSizes(sizes),
  flexBasis: getWidthPercentageFromSizes(sizes),
  maxWidth: getWidthPercentageFromSizes(sizes)
})
