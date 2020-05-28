import { select } from '@storybook/addon-knobs'

// themes
const reqThemes = (require as any).context('../themes', true, /theme\.json$/)
const themes: any = reqThemes
  .keys()
  .filter((key: any) => key.indexOf('theme-utils') === -1)
  .reduce(
    (themes: any, filename: any) => ({
      ...themes,
      [filename]: reqThemes(filename)
    }),
    {}
  )

export default () => {
  const theme = select(
    'Trustyle Theme',
    Object.keys(themes),
    './uswitch/theme.json'
  )

  return themes[theme]
}
