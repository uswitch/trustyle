/* eslint-disable  @typescript-eslint/no-var-requires */

const { exec } = require('child_process')

var fs = require('file-system')
var uswitchTheme = require('@uswitch/trustyle.uswitch-theme')
var moneyTheme = require('@uswitch/trustyle.money-theme')
var soeTheme = require('@uswitch/trustyle.save-on-energy-theme')
var journeyTheme = require('@uswitch/trustyle.journey-theme')
var bankrateTheme = require('@uswitch/trustyle.bankrate-theme')


const themeKeyToComponentMap = {
  accordion: '@uswitch/trustyle.accordion',
  author: '@uswitch/trustyle.author',
  authorProfile: '@uswitch/trustyle.author-profile',
  badge: '@uswitch/trustyle.badge',
  breadcrumbs2: '@uswitch/trustyle.breadcrumbs',
  buttons: '@uswitch/trustyle.button',
  callOut: '@uswitch/trustyle.call-out',
  card: '@uswitch/trustyle.card',
  categoryTitle: '@uswitch/trustyle.category',
  cta2: '@uswitch/trustyle.cta',
  funnelProgress: '@uswitch/trustyle.funnel-progress',
  grid: '@uswitch/trustyle.flex-grid',
  hero: '@uswitch/trustyle.hero',
  input: '@uswitch/trustyle.input',
  list: '@uswitch/trustyle.list',
  pagination: '@uswitch/trustyle.pagination',
  toggleSwitch: '@uswitch/trustyle.toggle-switch',
  articleIntro: '@uswitch/trustyle.article-intro',
  sideNav: '@uswitch/trustyle.side-nav'
}

const compounds = ['article-intro', 'side-nav']

const layouts = ['flex-grid']

const deleteKeys = (obj, keys) => {
  const obj2 = { ...obj }
  keys.map(key => delete obj2[key])
  return obj2
}

const themes = {
  money: moneyTheme,
  uswitch: uswitchTheme,
  seo: soeTheme,
  journey: journeyTheme,
  bankrate: bankrateTheme
}

const getComponentPath = dirName => {
  if (compounds.includes(dirName)) return 'compounds'
  if (layouts.includes(dirName)) return 'layout'
  return 'elements'
}

function migrate(brand, themes, inputDir, outputDir) {
  const theme = themes[brand]

  let componentThemes = deleteKeys(theme, [
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
    '----------------------------- Variants',
    'styles'
  ])

  componentThemes = {
    ...componentThemes,
    ...componentThemes.modules,
    ...componentThemes.compounds
  }

  componentThemes = deleteKeys(componentThemes, ['modules', 'compounds'])

  console.log(Object.keys(componentThemes))

  return Object.keys(componentThemes)

  Object.keys(componentThemes).map(key => {
    const packageName = themeKeyToComponentMap[key]
    if (packageName) {
      const dirName = packageName.replace('@uswitch/trustyle.', '')
      const readPath = `./${inputDir}/${getComponentPath(
        dirName
      )}/${dirName}/src`
      const writePath = `./${outputDir}/${getComponentPath(
        dirName
      )}/${dirName}/src`
      // console.log('readPath', readPath+'/index.tsx')
      fs.writeFile(
        `${writePath}/themes/${brand}.ts`,
        `export default ${JSON.stringify(componentThemes[key], undefined, 2)}`,
        e => console.log(`writing file: ${writePath}/${brand}.json`, e)
      )
      fs.readFile(`${readPath}/../tsconfig.json`, (e, data) => {
        let tsConfig = JSON.parse(data.toString())
        tsConfig.include = [...tsConfig.include, './src/themes/*.ts']
        fs.writeFile(
          `${writePath}/../tsconfig.json`,
          JSON.stringify(tsConfig, undefined, 2),
          () => {
            console.log('writing file', `${writePath}/../tsconfig.json`)
            exec(`cd ${writePath}/..; npm run build;`) //
          }
        )
      })
    }
  })
}

console.log('money')
const m = migrate('money', themes, 'src', 'src')

console.log('uswitch')
const u = migrate('uswitch', themes, 'src', 'src')

console.log('save on energy')
const s = migrate('seo', themes, 'src', 'src')

console.log('journey')
const j = migrate('journey', themes, 'src', 'src')

console.log('bankrate')
const b = migrate('bankrate', themes, 'src', 'src')

// console.log(s.filter(x => !m.includes(x)));
