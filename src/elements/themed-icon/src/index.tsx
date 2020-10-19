/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'

interface BrowserSpriteSymbol {
  content: string
  id: string
  node: HTMLElement
  viewBox: string
}
const icons: { [theme: string]: { [icon: string]: BrowserSpriteSymbol } } = {
  added: {}
}

interface Props extends React.HTMLAttributes<any> {
  icon: string
}

const ThemedIcon: React.FC<Props> & {
  addIcons: any
  OldSyntax: React.FC<OldProps>
} = ({ icon, className }) => {
  const { theme }: any = useThemeUI()
  const themeName = theme.name.toLowerCase()

  let iconSymbol
  if (icons[themeName]) {
    iconSymbol = icons[themeName][icon] || icons.added[icon]
  } else {
    iconSymbol = icons.added[icon]
  }

  const svgStyling = {
    display: 'inline-block',
    width: '1em',
    variant: 'themedIcon.main'
  }

  if (!iconSymbol) {
    console.error(`Icon "${icon}" not found`)
    return (
      <svg viewBox="0 0 50 50" className={className} sx={svgStyling}>
        <circle
          r="23"
          cx="25"
          cy="25"
          stroke="red"
          strokeWidth="4px"
          fill="none"
        />
        <text
          fill="red"
          x="25"
          y="25"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="36px"
        >
          ?
        </text>
      </svg>
    )
  }

  return (
    <svg viewBox={iconSymbol.viewBox} className={className} sx={svgStyling}>
      <use xlinkHref={`#${iconSymbol.id}`} />
    </svg>
  )
}

export type Direction = 'up' | 'down' | 'left' | 'right'
interface OldProps extends React.HTMLAttributes<any> {
  color: string
  direction?: Direction
  glyph: string
  size?: number
}

/**
 * This supports the syntax from the old component that didn't support themed
 * icons. It's encouraged to switch to the new syntax and use sx instead of
 * color, direction and size.
 */
ThemedIcon.OldSyntax = ({
  color,
  direction = 'up',
  glyph,
  size,
  className
}) => {
  const rotate: number = { up: 0, right: 0.25, down: 0.5, left: 0.75 }[
    direction
  ]

  return (
    <ThemedIcon
      className={className}
      icon={glyph}
      sx={{
        display: 'block',
        transform: rotate ? `rotate(${rotate}turn)` : null,
        // It's not documented behaviour in the old component, but size=0
        // doesn't set width and height
        height: size || 'auto',
        width: size || 'auto',
        color,
        // Both themedIcon.oldMain AND themedIcon.main will be applied
        variant: 'themedIcon.oldMain'
      }}
    />
  )
}

const importAll = (r: any) => r.keys().map(r)

// This can be used for manually adding icons by passing a webpack require
// context. It's probably not needed while the code below is there.
ThemedIcon.addIcons = (newIcons: any) => {
  importAll(newIcons).forEach(
    ({ default: icon }: { default: BrowserSpriteSymbol }) => {
      if (icons.added[icon.id]) {
        console.warn(
          `Icon "${icon.id}" already exists and will be overwritten.`
        )
      }
      icons.added[icon.id] = icon
    }
  )
}

// Not sure if this should be in here permanently - it adds every icon from
// every theme into the bundle
const allIcons = require.context('./icons', true, /\.svg$/)
allIcons.keys().forEach((path: any) => {
  const theme = path.split('/')[1]
  const { default: icon } = allIcons(path)

  if (!icons[theme]) {
    icons[theme] = {}
  }

  icons[theme][icon.id] = icon
})

export default ThemedIcon
