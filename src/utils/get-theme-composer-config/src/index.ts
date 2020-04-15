// @ts-nocheck
const getThemeComposerConfig = ({ name, themes }) =>
  !name || !themes || !themes.length
    ? new Error('name and themes required')
    : {
        name,
        themes
      }

export default getThemeComposerConfig
