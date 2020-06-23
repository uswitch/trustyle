/** @jsx jsx */
import { jsx } from 'theme-ui'
import { boolean, number, select } from '@storybook/addon-knobs'

// @ts-ignore
import * as uswitchIcons from '../themes/uswitch'
// @ts-ignore
import * as moneyIcons from '../themes/money'
// @ts-ignore
import * as journeyIcons from '../themes/journey'
import theme from '../../../utils/theme-selector'

import ThemedIcon, { Direction } from './'

export default {
  title: 'Elements|Themed Icon'
}

ThemedIcon.addIcons(uswitchIcons, moneyIcons, journeyIcons)

const getIconNames = (): string[] => {
  const themeName = theme().name.toLowerCase()

  return require
    .context('./icons', true, /\.svg$/)
    .keys()
    .filter((file: string) => file.includes(themeName))
    .map((file: string) => (/\/([^/]+)\.svg$/.exec(file) as string[])[1])
    .sort()
}

export const ExampleWithKnobs = () => {
  const showSecond = boolean('Show second set?', false)

  const iconNames = getIconNames()
  return (
    <div key={theme().name}>
      {iconNames.map(icon => (
        <p key={icon}>
          <ThemedIcon icon={icon} sx={{ color: 'red' }} /> {icon}
        </p>
      ))}
      {showSecond &&
        iconNames.map(icon => (
          <p key={icon}>
            <ThemedIcon icon={icon} sx={{ color: 'red' }} /> {icon}
          </p>
        ))}
      <p>
        If an icon isn&apos;t red, something has gone wrong - webpack should be
        replacing the stroke with <code>currentColor</code>.
      </p>
    </div>
  )
}

export const IconNotFound = () => {
  return <ThemedIcon icon="oiwq" />
}

export const OldSyntaxExampleWithKnobs = () => {
  const directionChoices = ['up', 'down', 'right', 'left']

  return (
    <ThemedIcon.OldSyntax
      glyph={select('glyph', getIconNames(), 'arrow')}
      color={select('color', theme().colors, 'link')}
      direction={select('direction', directionChoices, 'up') as Direction}
      size={number('Size', 0)}
    />
  )
}
