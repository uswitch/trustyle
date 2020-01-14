/** @jsx jsx */

import * as React from 'react'
// This ignore should be removed when types PR is merged
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/41567
// @ts-ignore
import { css, jsx, useThemeUI } from 'theme-ui'
import { Global } from '@emotion/core'
import 'normalize.css/normalize.css'

export const GlobalStyles: React.FC = () => {
  const { theme }: any = useThemeUI()

  return <Global styles={css(theme.styles)(theme)} />
}
