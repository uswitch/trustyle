/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

import { ThemeProvider, useTheme } from '.'

const ThemeAwareComponent = () => {
  const theme = useTheme()

  console.log(theme)

  return (
    <h1
      css={css({
        color: theme.colors.primary
      })}
    >
      I am a theme-aware component
    </h1>
  )
}

const themes = {
  blueTheme: {
    colors: {
      primary: '#00f'
    }
  },
  redTheme: {
    colors: {
      primary: '#f00'
    }
  }
}

storiesOf('Themes|Provider', module).add('example', () => {
  const theme = select('theme', ['blueTheme', 'redTheme'], 'blueTheme')
  return (
    <ThemeProvider theme={themes[theme]}>
      <ThemeAwareComponent />
    </ThemeProvider>
  )
})
