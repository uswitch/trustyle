/** @jsx jsx */
import React from 'react'
import { css, Global, jsx } from '@emotion/core'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { select, withKnobs } from '@storybook/addon-knobs'

import { ThemeProvider } from '../src/themes/themes'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /stories\.tsx$/)
const loadStories = () => req.keys().forEach(filename => req(filename))

// themes
const reqThemes = require.context('../src/themes', true, /index\.tsx$/)
const themes = reqThemes
  .keys()
  .filter(key => key.indexOf('themes') === -1)
  .reduce(
    (themes, filename) => ({
      ...themes,
      [filename]: reqThemes(filename).default
    }),
    {}
  )

const withGlobal = story => (
  <React.Fragment>
    <Global
      styles={css({
        '*': {
          margin: 0,
          padding: 0
        }
      })}
    />
    {story()}
  </React.Fragment>
)

const withGlobalThemeKnob = story => {
  const theme = select(
    'Trustyle Theme',
    Object.keys(themes),
    Object.keys(themes)[0]
  )

  return <ThemeProvider theme={themes[theme]}>{story()}</ThemeProvider>
}

addDecorator(withGlobal)
addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(withGlobalThemeKnob)

const newViewports = {
  tamagochi: {
    name: 'tamagochi',
    styles: {
      width: '300px',
      height: '667px'
    }
  },
  iPhone: {
    name: 'iPhone', // iPhone 6/7/8 dimensions
    styles: {
      width: '375px',
      height: '667px'
    }
  },
  tablet: {
    name: 'iPad', // iPad
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '95%',
      height: '95%'
    }
  }
}

addParameters({
  viewport: {
    viewports: newViewports,
    defaultViewport: 'iPhone'
  },
  options: {
    name: 'TruStyle Storybook',
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: true,
    isToolshown: true,
    addonPanelInRight: true,
    sortStoriesByKind: true,
    hierarchyRootSeparator: '|',
    hierarchySeparator: /\/|\./
  }
})

configure(loadStories, module)
