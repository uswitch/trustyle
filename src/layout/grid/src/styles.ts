import { mq } from '@uswitch/trustyle.styles'
import { DynamicStyle } from 'facepaint'

const numberOfColumnss = [4, 8, 12]
const colWidths = [32, 64, 72]
const gutterWidths = [8, 16, 24]

const containerWidths = numberOfColumnss.map((n, idx) => n * colWidths[idx] + n * gutterWidths[idx])
console.log(containerWidths)

export const container: DynamicStyle[] = mq({
  position: 'relative',
  margin: '0 auto',
  maxWidth: containerWidths
})

export const row = (): DynamicStyle[] => mq({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  flexWrap: 'wrap',
  paddingRight: gutterWidths.map((gw) => `${gw / 2}px`),
  paddingLeft: gutterWidths.map((gw) => `${gw / 2}px`),
})

export const column = (sizes: number[] = []): DynamicStyle[] => mq({
  boxSizing: 'border-box',
  flex: '1 0 auto',
  flexDirection: 'row',
  // paddingRight: gutterWidths.map((gw) => `${gw / 2}px`),
  // paddingLeft: gutterWidths.map((gw) => `${gw / 2}px`),
  display: sizes.map(size => size === 0 ? 'none' : 'block'),
  flexBasis: sizes.map((size, idx) => `${(100 / numberOfColumnss[idx]) * size}%`),
  maxWidth: sizes.map((size, idx) => `${(100 / numberOfColumnss[idx]) * size}%`)
})

// ${p =>
//   Object.keys(p)
//   .filter(k => DIMENSIONS.indexOf(k) >= 0)
//   .sort((k1, k2) => DIMENSIONS.indexOf(k1) - DIMENSIONS.indexOf(k2))
//   .map(k => {
//       let cssValue = 'display: none;'
//       if (Number.isInteger(p[k])) {
//                     cssValue = `
//             flex-basis: ${(100 / 12) * p[k]}%;
//             max-width: ${(100 / 12) * p[k]}%;
//             display: block;
// `
//       } else if (p[k]) {
//                     cssValue = `
//             flex-grow: 1;
//             flex-basis: 0;
//             max-width: 100%;
//             display: block;
// `
//       }
//               return css`
//           ${respondTo(k)} {
//             ${cssValue};
// }
// `
//   })};

