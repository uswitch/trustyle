/** @jsx jsx */

import * as React from 'react'
import { css, jsx, useThemeUI } from 'theme-ui'
import { Global } from '@emotion/core'
import 'normalize.css/normalize.css'

export const GlobalStyles: React.FC = () => {
  const { theme }: any = useThemeUI()

  return <Global styles={css(theme.styles)(theme)} />
}
