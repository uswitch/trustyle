/** @jsx jsx */
import * as React from 'react'
import { jsx, ThemeProvider } from 'theme-ui'
import { boolean, select, text } from '@storybook/addon-knobs'

import CallOut from './'

export default {
  title: 'Elements|Call Out'
}

export const Example = () => {
  const titleText = text(`Call out title`, `This is a call out`)
  const textText = text(
    `Call out text`,
    `Tempor incididunt ut labore et dolore magna aliqua. Sint id est dolor laborum. Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolores est unt.`
  )
  const showIcon = boolean('Show icon?', true)
  const iconGlyph = select(
    'Icon',
    ['arrow', 'caret', 'close', 'edit', 'email'],
    'close'
  )

  return (
    <CallOut
      title={titleText}
      text={textText}
      icon={showIcon ? iconGlyph : undefined}
    />
  )
}

interface PaletteProps extends React.HTMLAttributes<HTMLDivElement> {
  palette: any
}

const PaletteProvider: React.FC<PaletteProps> = ({ palette, children }) => {
  const generatedVariantThemeMapping = {
    // @/src/call-out/theme/uswitch-variants.json
    callOut: {
      main: {
        backgroundColor: palette.backgroundLight
      }
    },
    // @/src/cta/theme/uswitch-variants.json
    cta2: {
      base: {
        main: {
          backgroundColor: palette.backgroundLight
        }
      }
    }
  }

  return (
    <ThemeProvider theme={generatedVariantThemeMapping}>
      {children}
    </ThemeProvider>
  )
}

export const Palette = () => {
  const titleText = text(`Call out title`, `This is a call out`)
  const textText = text(
    `Call out text`,
    `Tempor incididunt ut labore et dolore magna aliqua. Sint id est dolor laborum. Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolores est unt.`
  )

  return (
    <React.Fragment>
      <PaletteProvider
        palette={{
          backgroundLight: 'hsl(0, 60%, 90%)'
        }}
      >
        <CallOut title={titleText} text={textText} />
      </PaletteProvider>
      <PaletteProvider
        palette={{
          backgroundLight: 'hsl(60, 60%, 90%)'
        }}
      >
        <CallOut title={titleText} text={textText} />
      </PaletteProvider>
      <PaletteProvider
        palette={{
          backgroundLight: 'hsl(120, 60%, 90%)'
        }}
      >
        <CallOut title={titleText} text={textText} />
      </PaletteProvider>
      <PaletteProvider
        palette={{
          backgroundLight: 'hsl(180, 60%, 90%)'
        }}
      >
        <CallOut title={titleText} text={textText} />
      </PaletteProvider>
      <PaletteProvider
        palette={{
          backgroundLight: 'hsl(240, 60%, 90%)'
        }}
      >
        <CallOut title={titleText} text={textText} />
      </PaletteProvider>
      <PaletteProvider
        palette={{
          backgroundLight: 'hsl(300, 60%, 90%)'
        }}
      >
        <CallOut title={titleText} text={textText} />
      </PaletteProvider>
    </React.Fragment>
  )
}
