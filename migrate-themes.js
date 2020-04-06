var fs = require('file-system');
var moneyTheme = require('@uswitch/trustyle.money-theme')

const themeKeyToComponentMap = {
  'accordion': '@uswitch/trustyle.accordion',
  'articleIntro': '@uswitch/trustyle.article-intro',
  'author': '@uswitch/trustyle.author',
  'authorProfile': '@uswitch/trustyle.author-profile',
  'breadcrumbs2': '@uswitch/trustyle.breadcrumbs',
  'callOut': '@uswitch/trustyle.call-out',
  'card': '@uswitch/trustyle.card',
  'categoryTitle': '@uswitch/trustyle.category',
  'cta2': '@uswitch/trustyle.cta',
  'grid': '@uswitch/trustyle.flex-grid',
  'list': '@uswitch/trustyle.list',
  'sideNav': '@uswitch/trustyle.side-nav',
  'toggleSwitch': '@uswitch/trustyle.toggle-switch',
}

const deleteKeys = (obj, keys) => {
  const obj2 = { ...obj }
  keys.map(key => delete obj2[key])
  return obj2;
}

const themes = {
  money: moneyTheme
}

function migrate(brand, themes) {
  const theme = themes[brand]

  let componentThemes = deleteKeys(
    theme, 
    [
      'name',
      'breakpoints',
      'zIndices',
      'shadows',
      'fonts',
      'lineHeights',
      'fontSizes',
      'fontWeights',
      'space',
      'sizes',
      'useCustomProperties',
      'useBodyStyles',
      'colors',
      'radii',
      'srOnly',
      'grid',
      '----------------------------- Variants',
      'styles'
    ]
  )

  componentThemes = {
    ...componentThemes,
    ...componentThemes.modules,
    ...componentThemes.compounds,
  }

  componentThemes = deleteKeys(
    componentThemes,
    ['modules', 'compounds']
  )

  console.log(Object.keys(componentThemes))
}

migrate('money', themes)