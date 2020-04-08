var fs = require('file-system');
var moneyTheme = require('@uswitch/trustyle.money-theme')
const { exec } = require('child_process');

const themeKeyToComponentMap = {
  'accordion': '@uswitch/trustyle.accordion',
  'author': '@uswitch/trustyle.author',
  'authorProfile': '@uswitch/trustyle.author-profile',
  'badge': '@uswitch/trustyle.badge',               
  'breadcrumbs2': '@uswitch/trustyle.breadcrumbs',
  'buttons': '@uswitch/trustyle.button',             
  'callOut': '@uswitch/trustyle.call-out',
  'card': '@uswitch/trustyle.card',
  'categoryTitle': '@uswitch/trustyle.category',
  'cta2': '@uswitch/trustyle.cta',
  'funnelProgress': '@uswitch/trustyle.funnel-progress',
  'grid': '@uswitch/trustyle.flex-grid',
  'hero': '@uswitch/trustyle.hero',                
  'input': '@uswitch/trustyle.input',               
  'list': '@uswitch/trustyle.list',
  'pagination': '@uswitch/trustyle.pagination',
  'toggleSwitch': '@uswitch/trustyle.toggle-switch',
  'articleIntro': '@uswitch/trustyle.article-intro',
  'sideNav': '@uswitch/trustyle.side-nav'
}

const compounds = [
  'article-intro',
  'side-nav'
]

const layouts = [
  'flex-grid'
]

const deleteKeys = (obj, keys) => {
  const obj2 = { ...obj }
  keys.map(key => delete obj2[key])
  return obj2;
}

const themes = {
  money: moneyTheme
}

const getComponentPath = dirName => {
  if(compounds.includes(dirName)) return  'compounds';
  if(layouts.includes(dirName)) return  'layout';
  return 'elements'
}

function migrate(brand, themes, inputDir, outputDir) {
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

  Object.keys(componentThemes).map(key => {
    const packageName = themeKeyToComponentMap[key];
    if (packageName) {
      const dirName = packageName.replace('@uswitch/trustyle.', '')
      const readPath = `./${inputDir}/${getComponentPath(dirName)}/${dirName}/src`
      const writePath = `./${outputDir}/${getComponentPath(dirName)}/${dirName}/src`
      console.log('readPath', readPath+'/index.tsx')
      fs.writeFile(`${writePath}/themes/${brand}.json`, JSON.stringify(componentThemes[key]), (e) => console.log(`${writePath}/${brand}.json`, e) )
      const jsFile = fs.readFile(`${readPath}/index.tsx`, (e, data) => {
        if (!data) {
          return console.error(`${readPath}/index.tsx could not be read`)
        }
        const newFile = `${data.toString().split('\n').map((line, index) => {
          if (index === 2) {
            return `import getThemeComposerConfig from '@uswitch/trustyle-utils.get-theme-composer-config'\n${line}`
          }
          return `${line}`
        }).join('\n')}
export const themeConfig = getThemeComposerConfig({
  name: '${key}',
  themes: []
})
`
        // console.log(`\n\n${newFile}\n\n`)
        fs.writeFile(`${writePath}/index.tsx`, newFile, () => {
          exec(`cd ${writePath}/..; npm install @uswitch/trustyle-utils.get-theme-composer-config;`)
        })
      }) 
    }
  })

}

migrate('money', themes, 'src', 'migration_test/src')