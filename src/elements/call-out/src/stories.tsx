/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@emotion/core'
import { boolean, color, select, text } from '@storybook/addon-knobs'
import { PaletteProvider } from '@uswitch/trustyle-utils.palette'

import theme from '../../../utils/theme-selector'
import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'

import CallOut from './'

export default {
  title: 'Elements|Call Out'
}

export const Example = () => {
  const titleText = text(`Call out title`, `This is a call out`)
  const textText = text(
    `Call out text`,
    `Tempor incididunt ut labore et dolore magna aliqua. Sint id est dolor laborum. Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolores est unt. `
  )
  const showIcon = boolean('Show icon?', true)
  const boldText = boolean('Bold text', false)
  const iconGlyph = select(
    'Icon',
    ['arrow', 'caret', 'close', 'edit', 'email'],
    'close'
  )

  const orientation = select('orientation', ['left', 'top'], 'left')

  return (
    <CallOut
      title={titleText}
      text={textText}
      orientation={orientation}
      icon={showIcon ? iconGlyph : undefined}
      bold={boldText}
    />
  )
}

Example.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const ExampleWithPalette = () => {
  const titleText = text(`Call out title`, `This is a call out`, 'CallOut')
  const textText = text(
    'Call out text',
    'Tempor incididunt ut labore et dolore magna aliqua. Sint id est dolor laborum. Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolores est unt.',
    'CallOut'
  )
  const showIcon = boolean('Show icon?', true, 'CallOut')
  const iconGlyph = select(
    'Icon',
    ['arrow', 'caret', 'close', 'edit', 'email'],
    'close',
    'CallOut'
  )

  const orientation = select('orientation', ['left', 'top'], 'left')

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
        <CallOut
          title={titleText}
          text={textText}
          orientation={orientation}
          icon={showIcon ? iconGlyph : undefined}
        />
      </PaletteProvider>
    </Fragment>
  )
}

ExampleWithPalette.story = {
  parameters: {
    percy: { skip: true }
  }
}

export const AutomatedTests = () => {
  const permutations = permutationsGenerator({
    title: ['Call out title', undefined],
    icon: [undefined, 'close'],
    accentColor: [null, '#ffced3']
  })

  return (
    <AllThemes themes={['uswitch', 'money', 'journey']}>
      {permutations.map((p, i) => (
        <PaletteProvider value={{ accentColor: p.accentColor }} key={i}>
          <CallOut title={p.title} text="Call out text" icon={p.icon} />
        </PaletteProvider>
      ))}
    </AllThemes>
  )
}
