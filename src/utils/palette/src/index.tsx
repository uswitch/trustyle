/** @jsx jsx */
import { jsx, ThemeUIStyleObject } from 'theme-ui'
import { createContext, forwardRef, useContext } from 'react'

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
  obj: ThemeUIStyleObject = {}
) => {
  if (!obj) {
    return {}
  }

  return Object.entries(obj).reduce((acc, [key, value]: [string, any]) => {
    return sw({
      object: () => ({ ...acc, [key]: createSx(palette, value) }),
      function: () => ({ ...acc, [key]: value(palette) }),
      default: () => {
        const { mobileBackgroundColor, backgroundColor } = palette
        if (mobileBackgroundColor && key === 'backgroundColor') {
          return palette[value]
            ? {
                ...acc,
                backgroundColor: [
                  mobileBackgroundColor,
                  backgroundColor,
                  backgroundColor
                ]
              }
            : acc
        } else {
          return palette[value] ? { ...acc, [key]: palette[value] } : acc
        }
      }
    })(typeof value)
  }, {})
}

export const usePalette = () => {
  const palette = useContext(PaletteContext)
  return palette
}

/**
   TODO:
   To prevent margin collapse, which should use emotion utils to read
   the parent styles and only set the vertical padding when a padding
   is 0 or not set

   Similarly, in order to prevent margin collapse for palettes, you
   should add the following snippet as high up in your document as
   possible

   <style>.palette{padding-top:0.05px;padding-bottom:0.05px}</style>
 */

export const Palette = forwardRef(
  ({ children, className = '', px = {}, ...props }: any, ref: any) => {
    const palette = usePalette()
    const sx = createSx(palette, px)

    return (
      <props.as
        {...props}
        sx={{ '&.palette': sx }}
        className={`palette ${className}`}
        ref={ref}
      >
        {children}
      </props.as>
    )
  }
)
