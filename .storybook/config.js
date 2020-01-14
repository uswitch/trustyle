/** @jsx jsx */
import React from 'react'
import { Styled } from 'theme-ui'
import { Global, jsx } from '@emotion/core'
import { addDecorator, configure, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import selectTheme from '../src/utils/theme-selector'
import { ThemeProvider, css } from 'theme-ui'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /stories\.tsx$/)
const loadStories = () => req.keys().forEach(filename => req(filename))

const withTheme = story => (
  <ThemeProvider theme={selectTheme()}>
    <Styled.root>
      <Global styles={theme => css(theme.styles)(theme)} />
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
