import React from 'react'
import {
  ThemeProvider as OrigThemeProvider,
  useTheme as origUseTheme
} from 'emotion-theming'

export interface Theme {
  colors: {
    primary: string
  }
}

interface ThemeProviderProps {
  theme: Theme
  children: any
}

export const useTheme = (): Theme => origUseTheme()

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children
}) => <OrigThemeProvider theme={theme}>{children}</OrigThemeProvider>
