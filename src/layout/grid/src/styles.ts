import { mq } from '@uswitch/trustyle.styles'
import { DynamicStyle } from 'facepaint'

const defaultGutterWidths = [16]
const defaultContainerWidths = ['100%', 640, 1152]

const getWidthPercentageFromSizes = (sizes: number[]) =>
  sizes.map(size => `${100 * size}%`)

// Not currently used
// const getMsFlexPreferredSizes = (sizes: number[], paddings: string[]) =>
//   sizes.map((size, ind) => {
//     const padding = paddings[Math.min(ind, paddings.length - 1)]

//     return `calc(${100 * size}% - ${padding} * 2)`
//   })

export const container = (
  outerMargin: string[] = ['0 auto'],
  containerWidths: (string | number)[] = defaultContainerWidths,
  gutterWidths: number[] = defaultGutterWidths
): DynamicStyle[] => {
  const paddings = gutterWidths.map(gw => `${gw}px`)

  return mq({
    position: 'relative',
    margin: outerMargin,
    maxWidth: containerWidths,
    width: ['auto', ...containerWidths.slice(1)],
    paddingLeft: paddings,
    paddingRight: paddings
  })
}

export const row = (
  centerX: boolean = false,
  topSpacing: number[] = [],
  bottomSpacing: number[] = [],
  gutterWidths: number[] = defaultGutterWidths
): DynamicStyle[] => {
  const margins = gutterWidths.map(gw => `-${gw / 2}px`)

  return mq({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: margins,
    marginRight: margins,
    marginTop: topSpacing,
    marginBottom: bottomSpacing,
    justifyContent: centerX ? 'center' : 'flex-start',
    flexWrap: 'wrap'
  })
}

export const column = (
  sizes: number[] = [],
  display: string[] = [],
  hasPaddingTop: boolean = false,
  hasPaddingBottom: boolean = false,
  gutterWidths: number[] = defaultGutterWidths
): DynamicStyle[] => {
  const paddings = gutterWidths.map(gw => `${gw / 2}px`)

  return mq({
    boxSizing: 'border-box',
    display,
    paddingLeft: paddings,
    paddingRight: paddings,
    paddingTop: hasPaddingTop ? paddings : [],
    paddingBottom: hasPaddingBottom ? paddings : [],
    width: getWidthPercentageFromSizes(sizes)
  })
}
