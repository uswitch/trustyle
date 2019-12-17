import { mq } from '@uswitch/trustyle.styles'
import { DynamicStyle } from 'facepaint'

const gutterWidths = [8, 16, 24]
const containerWidths = ['100%', 640, 1152]

const paddings = gutterWidths.map(gw => `${gw / 2}px`)

export const container = (outerMargin: string[] = ['0 auto']): DynamicStyle[] =>
  mq({
    position: 'relative',
    margin: outerMargin,
    maxWidth: containerWidths,
    width: ['auto', ...containerWidths.slice(1)],
    paddingLeft: paddings,
    paddingRight: paddings
  })

const getWidthPercentageFromSizes = (sizes: number[]) =>
  sizes.map(size => `${100 * size}%`)

export const column = (
  sizes: number[] = [],
  display: string[] = [],
  hasPaddingTop: boolean = false,
  hasPaddingBottom: boolean = false
): DynamicStyle[] =>
  mq({
    boxSizing: 'border-box',
    display,
    paddingLeft: paddings,
    paddingRight: paddings,
    paddingTop: hasPaddingTop ? paddings : [],
    paddingBottom: hasPaddingBottom ? paddings : [],
    flexBasis: getWidthPercentageFromSizes(sizes)
  })

export const row = (
  centerX: boolean = false,
  topSpacing: number[] = [],
  bottomSpacing: number[] = []
): DynamicStyle[] =>
  mq({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: paddings.map(padding => `-${padding}`),
    marginRight: paddings.map(padding => `-${padding}`),
    marginTop: topSpacing,
    marginBottom: bottomSpacing,
    justifyContent: centerX ? 'center' : 'flex-start',
    flexWrap: 'wrap'
  })
