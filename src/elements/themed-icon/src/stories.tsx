/** @jsx jsx */
import { jsx } from 'theme-ui'
import { number, select } from '@storybook/addon-knobs'

import theme from '../../../utils/theme-selector'

import ThemedIcon, { Direction } from './'

export default {
  title: 'Elements/Themed Icon'
}

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
  const iconNames = getIconNames()
  return (
    <div>
      {iconNames.map(icon => (
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
