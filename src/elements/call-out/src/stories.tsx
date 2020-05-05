/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@emotion/core'
import { boolean, color, text } from '@storybook/addon-knobs'
import { PaletteProvider } from '@uswitch/trustyle-utils.palette'

import theme from '../../../utils/theme-selector'

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

  return <CallOut title={titleText} text={textText} />
}

export const ExampleWithPalette = () => {
  const titleText = text(`Call out title`, `This is a call out`, 'CallOut')
  const textText = text(
    'Call out text',
    'Tempor incididunt ut labore et dolore magna aliqua. Sint id est dolor laborum. Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolores est unt.',
    'CallOut'
  )

  const applyPalette = boolean('Apply palette?', false, 'Palette')
  const accentColor = color(
    'accentColor',
    theme().callOut?.main?.backgroundColor,
    'Palette'
  )

  return (
    <Fragment>
      <PaletteProvider
        value={{
          accentColor: applyPalette ? accentColor : null
        }}
      >
        <CallOut title={titleText} text={textText} />
      </PaletteProvider>
    </Fragment>
  )
}
