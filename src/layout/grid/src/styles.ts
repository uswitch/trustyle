import { mq, breakpoints } from '@uswitch/trustyle.styles'
import { DynamicStyle } from 'facepaint'

const numberOfColumnss = [4, 8, 12]
const colWidths = [32, 64, 72]
const gutterWidths = [8, 16, 24]

const containerWidths = numberOfColumnss.map((n, idx) => {
    const val = n * colWidths[idx] + n * gutterWidths[idx]
    if (val < Object.values(breakpoints)[1]) {
        return '100%'
    } else {
        return val
    }
})

const paddings = gutterWidths.map((gw) => `${gw / 2}px`)

export const container = (outerMargin: string[] = ['0 auto']): DynamicStyle[] => mq({
  position: 'relative',
  margin: outerMargin,
  maxWidth: containerWidths,
  width: ['auto', ...containerWidths.slice(1)],
  overflow: 'hidden',
  paddingLeft: paddings,
  paddingRight: paddings
})

const getWidthPercentageFromSizes = (sizes: number[]) =>
  sizes.map((size) =>  `${100 * size}%`)

export const column = (sizes: number[] = [], display: string[] = []): DynamicStyle[] => mq({
  boxSizing: 'border-box',
  display,
  paddingLeft: paddings,
  paddingRight: paddings,
  flexBasis: getWidthPercentageFromSizes(sizes)
})

export const row = (centerX: boolean = false): DynamicStyle[] => mq({
  boxSizing: 'border-box',
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'row',
  marginLeft: paddings.map(padding => `-${padding}`),
  marginRight: paddings.map(padding => `-${padding}`),
  justifyContent: centerX ? 'center' : 'flex-start',
  flexWrap: 'wrap'
})
