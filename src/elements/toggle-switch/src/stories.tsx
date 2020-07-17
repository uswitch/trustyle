/** @jsx jsx */
import { Fragment, useState } from 'react'
import { jsx } from 'theme-ui'
import { action } from '@storybook/addon-actions'
import { boolean, color } from '@storybook/addon-knobs'
import { PaletteProvider } from '@uswitch/trustyle-utils.palette'

import theme from '../../../utils/theme-selector'
import AllThemes, { permutationsGenerator } from '../../../utils/all-themes'

import { checkedIcon, uncheckedIcon } from './assets'

import ToggleSwitch from './'

export default {
  title: 'Elements|Toggle Switch'
}

export const ExampleWithState = () => {
  const [toggleState, setToggleState] = useState(true)
  const compact = boolean('Compact', false)

  const handleOnChange = () => {
    const newState = !toggleState
    setToggleState(newState)
    action('Toggle changed')(newState)
  }

  const icons = {
    checked: checkedIcon(compact),
    unchecked: uncheckedIcon
  }

  const themeNode =
    (theme().elemments && theme().elemments['toggle-switch']) || {}
  const applyPalette = boolean('Apply palette?', false, 'Palette')

  return (
    <Fragment>
      <PaletteProvider
        value={{
          featureColor: applyPalette
            ? color(
                'featureColor',
                themeNode?.checked?.backgroundColor,
                'Palette'
              )
            : null
        }}
      >
        <ToggleSwitch
          aria-label="toggle-1"
          checked={toggleState}
          compact={compact}
          onChange={handleOnChange}
          icons={icons}
        />
        <label sx={{ marginLeft: 10 }} htmlFor="toggle-1">
          {toggleState ? 'On' : 'Off'}
        </label>
      </PaletteProvider>
    </Fragment>
  )
}

ExampleWithState.story = {
  parameters: {
    percy: { skip: true }
  }
}

const Spacer = () => <div sx={{ minHeight: 20 }} />

export const AutomatedTests = () => {
  const permutations = permutationsGenerator({
    compact: [false, true],
    featureColor: [null, '#ffced3'],
    checked: [true, false],
    icons: [true, false]
  })

  return (
    <AllThemes themes={['uswitch', 'money', 'save-on-energy', 'bankrate']}>
      {permutations.map((p, i) => (
        <Fragment key={i}>
          <PaletteProvider value={{ featureColor: p.featureColor }}>
            <ToggleSwitch
              aria-label="toggle-1"
              checked={p.checked}
              compact={p.compact}
              icons={
                p.icons
                  ? {
                      checked: checkedIcon(p.compact),
                      unchecked: uncheckedIcon
                    }
                  : undefined
              }
            />
            <label sx={{ marginLeft: 10 }} htmlFor="toggle-1">
              {p.compact && 'compact'} {p.checked ? 'checked' : 'unchecked'}
              {p.icons && ' with icons'} {p.featureColor && 'with palette'}
            </label>
          </PaletteProvider>
          <Spacer />
        </Fragment>
      ))}
    </AllThemes>
  )
}
