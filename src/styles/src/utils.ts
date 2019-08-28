// 16px is the browser default font size
export const pxToRem = (...blocks: number[]) =>
  blocks.map((block: number) => `${block / 16}rem`).join(' ')

// these will change with viewpoints
// all figures in px so they can be used for maths
export const spacers = {
  pink: 8,
  green: 12,
  purple: 16,
  teal: 24,
  blue: 32,
  orange: 48,
  red: 56
}

// Add an additional 1px of border, but superimposed on the interior of an
// element, so that it doesn’t affect its position or size.
export const insetBorder = (color: string) => `0 0 0 1px ${color}`
