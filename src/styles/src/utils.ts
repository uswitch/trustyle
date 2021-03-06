// 16px is the browser default font size
export const pxToRem = (...blocks: number[]) =>
  blocks.map((block: number) => `${block / 16}rem`).join(' ')

// these will change with viewpoints
// all figures in px so they can be used for maths
export const spacers = {
  pink: 8 as const,
  green: 12 as const,
  purple: 16 as const,
  teal: 24 as const,
  blue: 32 as const,
  orange: 48 as const,
  red: 56 as const,
  white: 64 as const,
  turquoise: 72 as const,
  aqua: 80 as const,
  darkPink: 88 as const
  // Next one should be darkGreen, keep the convention
}

// Add an additional 1px of border, but superimposed on the interior of an
// element, so that it doesn’t affect its position or size.
export const insetBorder = (color: string) => `inset 0 0 0 1px ${color}`
