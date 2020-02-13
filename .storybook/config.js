/** @jsx jsx */
import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { Styled, jsx, ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'
import theme from '../src/utils/theme-selector'
import { GlobalStyles } from '../src/elements/global-styles/src'
import { colors } from '../src/themes/uswitch'

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
addDecorator(
  withKnobs({
    escapeHTML: false
  })
)

const newViewports = {
  tamagochi: {
    name: 'tamagochi',
    styles: {
      width: '300px',
      height: '667px'
    }
  },
  iPhone5: {
    name: 'iPhone 5/se', // iPhone 6/7/8 dimensions
    styles: {
      width: '320px',
      height: '568px'
    }
  },
  iPhone6: {
    name: 'iPhone 6/7/8', // iPhone 6/7/8 dimensions
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
    defaultViewport: 'iPhone6'
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

addParameters({
  backgrounds: [
    { name: 'White', value: colors.white, default: true },
    { name: 'Grey10', value: colors['grey-10'] },
    { name: 'Grey90', value: colors['grey-90'] },
    { name: 'Black', value: colors.black }
  ]
})
