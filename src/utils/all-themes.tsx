import * as React from 'react'
import { Styled, ThemeProvider, ThemeProviderProps } from 'theme-ui'

import theme, { themes } from './theme-selector'

// This sets everything in the existing theme to undefined so that it can be
// passed into another ThemeProvider to reset the theme
const negateTheme = (theme: ThemeProviderProps<any>) => {
  const newObj: any = {}

  Object.entries(theme).forEach(([key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      newObj[key] = negateTheme(value)
    } else {
      newObj[key] = undefined
    }
  })

  return newObj
}

const AllThemes: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children
}) => {
  const negatedTheme = negateTheme(theme())

  // @todo add prop to specify themes
  const themeKeys = ['uswitch', 'money', 'journey', 'save-on-energy']

  return (
    <ThemeProvider theme={negatedTheme}>
      {themeKeys.map((key, index) => {
        const theme = themes[`./${key}/theme.json`]
        return (
          <ThemeProvider theme={theme as ThemeProviderProps<any>} key={index}>
            <Styled.root>
              <h2>{key}:</h2>
              {children}
            </Styled.root>
          </ThemeProvider>
        )
      })}
    </ThemeProvider>
  )
}

export default AllThemes
