/** @jsx jsx */
import { css, jsx, SxStyleProp, useThemeUI } from 'theme-ui'
import { cx, css as eCss } from 'emotion'
import { createContext, useContext } from 'react'

const sw = (cases: Record<string, Function>) => (
  prop: string,
  ...data: any
) => {
  const f = {}.hasOwnProperty.call(cases, prop) ? cases[prop] : cases.default

  return f instanceof Function ? f(...data) : f
}

const PaletteContext = createContext({})
export const PaletteProvider = PaletteContext.Provider

const createSx = (
  palette: { [key: string]: string } = {},
  obj: SxStyleProp = {}
) => {
  if (!obj) {
    return {}
  }

  return Object.entries(obj).reduce((acc, [key, value]: [string, any]) => {
    return sw({
      object: () => ({ ...acc, [key]: createSx(palette, value) }),
      function: () => ({ ...acc, [key]: value(palette) }),
      default: () => (palette[value] ? { ...acc, [key]: palette[value] } : acc)
    })(typeof value)
  }, {})
}

export const Palette = ({ children, className, px = {}, ...props }: any) => {
  const theme = useThemeUI().theme
  const palette = useContext(PaletteContext)
  const sx = createSx(palette, px)

  const defaultStyles = css({ py: '0.05px' })(theme)
  const paletteStyles = css({ '&.palette': sx })(theme)

  const defaultStylesClassName = eCss(defaultStyles)
  const paletteClassName = eCss(paletteStyles)

  const finalClassName = cx(
    'palette',
    defaultStylesClassName,
    className,
    paletteClassName
  )

  return (
    <props.as {...props} className={finalClassName}>
      {children}
    </props.as>
  )
}
