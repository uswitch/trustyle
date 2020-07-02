/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui'
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
  const palette = useContext(PaletteContext)
  const sx = createSx(palette, px)

  // added padding to ensure margin is not applied to parent element
  return (
    <props.as
      {...props}
      className={`palette ${className}`}
      sx={{ '&.palette': { ...sx, padding: '1px 0' } }}
    >
      {children}
    </props.as>
  )
}
