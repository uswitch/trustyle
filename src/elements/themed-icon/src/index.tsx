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

const ThemedIcon: React.FC<Props> & { addIcons: any } = ({
  icon,
  className
}) => {
  const { theme }: any = useThemeUI()
  const themeName = theme.name.toLowerCase()

  let iconSymbol
  if (icons[themeName]) {
    iconSymbol = icons[themeName][icon] || icons.added[icon]
  } else {
    iconSymbol = icons.added[icon]
  }

  if (!iconSymbol) {
    console.error(`Icon "${icon}" not found`)
    // @TODO: What should this return?
    return <svg></svg>
  }

  return (
    <svg
      viewBox={iconSymbol.viewBox}
      className={className}
      sx={{
        display: 'inline-block',
        width: '1em',
        variant: 'themedIcon.main'
      }}
    >
      <use xlinkHref={`#${iconSymbol.id}`} />
    </svg>
  )
}

const importAll = (r: any) => r.keys().map(r)

// This can be used for manually adding icons by passing a webpack require
// context. It's probably not needed while the code below is there.
ThemedIcon.addIcons = (newIcons: RequireContext) => {
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
allIcons.keys().forEach(path => {
  const theme = path.split('/')[1]
  const { default: icon } = allIcons(path)

  if (!icons[theme]) {
    icons[theme] = {}
  }

  icons[theme][icon.id] = icon
})

export default ThemedIcon
