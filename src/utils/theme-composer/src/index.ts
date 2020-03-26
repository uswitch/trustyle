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
  'badge'
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

  const componentThemes = dependencyNames.map(dependancy => require(`${nodeModulesPath}/${dependancy}/lib/themes/${brand}.js`))

  const theme = {
    ...tokens[brand],
    '----------------------------- Variants': '----------------------------- ',
    elements: elements.reduce((variants, multibrandOptions) => {
      return {
        ...variants,
        ...(multibrandOptions.themes[brand] ? {[multibrandOptions.name]: multibrandOptions.themes[brand]} : {})
      }
    }, {}),
    compounds: {}
  }

  return JSON.stringify(theme)
}

export default composeTheme
