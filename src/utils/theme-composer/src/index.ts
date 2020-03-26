// @ts-nocheck

// Tokens
import moneyTokens from '@uswitch/trustyle.money-theme'
import uswitchTokens from '@uswitch/trustyle.uswitch-theme'

// Elements
import { multibrandOptions as badge } from '@uswitch/trustyle.badge'

const tokens: any = {
  money: moneyTokens,
  uswitch: uswitchTokens
}

const elements: any = [
  '@uswitch/trustyle.badge'
]

const composeTheme = (
  brand: string,
  packageJson: object,
  nodeModulesPath: string = '../node_modules',
  dependencyType: string = 'dependencies'
) => {
  const dependencies = packageJson[dependencyType]

  const dependencyNames = 
    Object.keys(dependencies)
      .filter(dep => dep.match('@uswitch/trustyle'))
      .filter(dep => !dep.includes('theme'))

  const componentThemes = dependencyNames.reduce(
    (obj, dependancy) => ({ 
      ...obj, 
      [dependancy]: require(`${nodeModulesPath}/${dependancy}/lib/themes/${brand}.js`).default
    }),
    {}
  )


  const theme = {
    ...tokens[brand],
    '----------------------------- Variants': '----------------------------- ',
    elements: 
      Object.keys(componentThemes)
        .filter(name => elements.includes(name))
        .reduce((obj, packageName) => {
          return {
            ...obj,
            ...{ [console.log('name', packageName.replace('@uswitch/trustyle.', '')) || packageName.replace('@uswitch/trustyle.', '')]: componentThemes[packageName] }
          }
        }, {}),
    compounds: {}
  }

  return JSON.stringify(theme)
}

export default composeTheme
