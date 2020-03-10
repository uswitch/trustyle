import * as React from 'react'
import { Styled, ThemeProvider, ThemeProviderProps } from 'theme-ui'

import { themes } from './theme-selector'

const AllThemes: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children
}) => {
  // @todo add prop to specify themes
  const themeKeys = ['uswitch', 'money', 'journey', 'save-on-energy']

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default AllThemes
