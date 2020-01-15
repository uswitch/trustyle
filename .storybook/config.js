/** @jsx jsx */
import React from 'react'
import { addDecorator, configure, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { Styled, jsx, ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'
import theme from '../src/utils/theme-selector'
import { GlobalStyles } from '../src/elements/global-styles/src';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /stories\.tsx$/)
const loadStories = () => req.keys().forEach(filename => req(filename))

const withTheme = story => (
  <ThemeProvider theme={theme()}>
    <GlobalStyles />
    <Styled.root>
      <Global
        styles={{
          body: {
            margin: 10
          }
        }}
      />
      {story()}
    </Styled.root>
  </ThemeProvider>
)

addDecorator(withTheme)
addDecorator(withA11y)
addDecorator(withKnobs)

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
