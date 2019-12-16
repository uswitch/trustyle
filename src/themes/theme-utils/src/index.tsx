import React from 'react'
import {
  ThemeProvider as OrigThemeProvider,
  useTheme as origUseTheme
} from 'emotion-theming'
import { get, merge, cloneDeep } from 'lodash'

import baseTheme from './theme'

export interface Theme {
  button: {
    primary: {
      color: string
    }
  }
}

interface Variables {
  colors: {
    primary: string
    secondary: string
  }
}

interface ThemeSpec {
  variables: Variables
  button: {
    base: {
      color: string
    }
    primary?: Partial<{
      color: string
    }>
  }
}

const deepResolve = (theme: any, variables: Variables): any => {
  if (typeof theme === 'object') {
    return Object.keys(theme).reduce((obj, key) => ({
      ...obj,
      [key]: deepResolve(theme[key], variables)
    }), {})
  } else if (typeof theme === 'string') {
    return get(variables, theme) || theme;
  } else {
    throw new Error('not implemented')
  }
}

const expandThemeSpec = (themeSpec: ThemeSpec): ThemeSpec => ({
  ...themeSpec,
  button: {
    ...themeSpec.button,
    primary: {
      ...themeSpec.button.base,
      ...themeSpec.button.primary
    }
  }
})

export const buildTheme = (themeSpec: ThemeSpec): Theme => {
  const mergedTheme = merge(cloneDeep(expandThemeSpec(baseTheme)), expandThemeSpec(themeSpec));
  const { variables, ...theme } = mergedTheme;

  console.log('mergedTheme', mergedTheme)

  return deepResolve(theme, variables);
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
