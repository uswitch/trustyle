/** @jsx jsx */

import * as React from 'react'
import { jsx, useThemeUI } from 'theme-ui'

const icons: { [theme: string]: { [icon: string]: string } } = {}

interface Props extends React.HTMLAttributes<any> {
  icon: string
}

const ThemedIcon: React.FC<Props> & {
  addIcons: any
  OldSyntax: React.FC<OldProps>
} = ({ icon, className }) => {
  const { theme }: any = useThemeUI()
  const themeName = theme.name.toLowerCase()

  type StatusType = 'js-disabled' | 'loading' | 'loaded'
  const [status, setStatus] = React.useState<StatusType>('js-disabled')
  const [viewBox, setViewBox] = React.useState<string>('')
  const [html, setHtml] = React.useState<string>('')

  const svgStyling = {
    display: 'inline-block',
    width: '1em',
    variant: 'themedIcon.main'
  }

  const iconPath = icons[themeName] && icons[themeName][icon]
  if (!iconPath) {
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

  if (status === 'js-disabled' || status === 'loading') {
    const handleSvgLoad = (e: React.SyntheticEvent<HTMLObjectElement>) => {
      const target = e.target as HTMLObjectElement
      const doc = target?.contentDocument?.documentElement

      if (!doc) {
        // @TODO improve error
        console.error('Something went wrong')
        return
      }

      const viewBox =
        doc.getAttribute('viewBox') ||
        `0 0 ${doc.getAttribute('width')} ${doc.getAttribute('height')}`
      const html = doc.innerHTML

      setViewBox(viewBox)
      setHtml(html)
      setStatus('loaded')
    }

    if (typeof window !== 'undefined' && status === 'js-disabled') {
      setStatus('loading')
    }

    return (
      <object
        type="image/svg+xml"
        data={iconPath}
        onLoad={handleSvgLoad}
        className={className}
        sx={
          status === 'js-disabled'
            ? svgStyling
            : { visibility: 'hidden', width: 1, height: 1 }
        }
      />
    )
  }
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      className={className}
      sx={svgStyling}
      dangerouslySetInnerHTML={{ __html: html }}
    />
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

export default ThemedIcon

interface IconObj {
  theme: string
  icon: string
  file: string
}

const addIcon = (icon: IconObj) => {
  if (!icons[icon.theme]) {
    icons[icon.theme] = {}
  }

  if (icons[icon.theme][icon.icon]) {
    const oldIcon = icons[icon.theme][icon.icon]
    if (oldIcon !== icon.file) {
      console.warn(
        `Icon "${icon.icon}" is being overwritten with a different image!`
      )
    }
  }

  icons[icon.theme][icon.icon] = icon.file
}

ThemedIcon.addIcons = (...iconArgs: IconObj[]) => {
  iconArgs.forEach(iconArg => {
    if (iconArg.file) {
      addIcon(iconArg)
    } else if (Array.isArray(iconArg) && iconArg[0].file) {
      iconArg.forEach(addIcon)
    } else if (typeof iconArg === 'object' && Object.values(iconArg)[0].file) {
      Object.values(iconArg).forEach(addIcon)
    }
  })
}
