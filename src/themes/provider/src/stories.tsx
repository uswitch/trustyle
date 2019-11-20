/** @jsx jsx */
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { css } from '@styled-system/css'
import { jsx } from 'theme-ui'

import { ThemeProvider } from '.'

const ThemeAwareComponent = () => (
  <h1
    css={css({
      color: 'primary'
    })}
  >
    I am a theme-aware component
  </h1>
)

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
