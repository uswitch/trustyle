/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from 'theme-ui'

import theme from '../../../utils/theme-selector'

import { EmbeddedVideo } from './'

storiesOf('Elements|embedded-video', module)
  .addDecorator(Story => {
    return <ThemeProvider theme={theme()}>{Story()}</ThemeProvider>
  })
  .add('primary variant', () => (
    <EmbeddedVideo source="https://www.youtube.com/embed/QILiHiTD3uc" />
  ))
