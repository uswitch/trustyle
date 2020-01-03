import { select } from '@storybook/addon-knobs'

// themes
const reqThemes = require.context('../themes', true, /theme\.json$/)
const themes: any = reqThemes
  .keys()
  .filter(key => key.indexOf('theme-utils') === -1)
  .reduce(
    (themes, filename) => ({
      ...themes,
      [filename]: reqThemes(filename)
    }),
    {}
  )

export default () => {
  const theme = select(
    'Trustyle Theme',
    Object.keys(themes),
    Object.keys(themes)[0]
  )

  return themes[theme];
}