// @ts-nocheck
/* eslint-disable @typescript-eslint/no-var-requires */

// Constants
const ELEMENT = 'ELEMENT'
const COMPOUND = 'COMPOUND'
const TOKENS = 'TOKENS'

// if we rename packages to include category we can remove these mappings
const elements = [
  '@uswitch/trustyle.accordion',
  '@uswitch/trustyle.author',
  '@uswitch/trustyle.author-profile',
  '@uswitch/trustyle.badge',
  '@uswitch/trustyle.breadcrumbs',
  '@uswitch/trustyle.button',
  '@uswitch/trustyle.call-out',
  '@uswitch/trustyle.card',
  '@uswitch/trustyle.category',
  '@uswitch/trustyle.cta',
  '@uswitch/trustyle.funnel-progress',
  '@uswitch/trustyle.flex-grid',
  '@uswitch/trustyle.hero',
  '@uswitch/trustyle.input',
  '@uswitch/trustyle.list',
  '@uswitch/trustyle.pagination',
  '@uswitch/trustyle.toggle-switch'
]
const compounds = [
  '@uswitch/trustyle.article-intro',
  '@uswitch/trustyle.side-nav'
]

const getPath = ({ type, brand, nodeModulesPath, packageName }) =>
  type === TOKENS
    ? `${nodeModulesPath}/${packageName}/theme.json`
    : `${nodeModulesPath}/${packageName}/lib/themes/${brand}.js`

// if available require and map in themes from each component
const getThemePartials = options => {
  const { packageNames, type } = options

  return packageNames.reduce((obj, packageName) => {
    try {
      const module = require(getPath({
        ...options,
        packageName
      }))

      return type === TOKENS
        ? module
        : {
            ...obj,
            [packageName.replace('@uswitch/trustyle.', '')]: module.default
          }
    } catch (e) {
      console.error(e)
      return obj
    }
  }, {})
}

const composeTheme = options => {
  const { packageJson, dependencyType = 'dependencies' } = options
  // get list of dependencies
  const packages = packageJson[dependencyType]

  // get all trustyle package names
  const trustylePackageNames = Object.keys(packages)
    .filter(dep => dep.match('@uswitch/trustyle'))
    .filter(dep => !dep.includes('-utils'))

  const tokensPackageNames = trustylePackageNames.filter(name =>
    name.includes('theme')
  )

  const componentPackageNames = trustylePackageNames.filter(
    name => !name.includes('theme')
  )

  const elementPackageNames = componentPackageNames.filter(name =>
    elements.includes(name)
  )

  const compoundPackageNames = componentPackageNames.filter(name =>
    compounds.includes(name)
  )

  // build theme
  const theme = {
    ...getThemePartials({
      ...options,
      type: TOKENS,
      packageNames: tokensPackageNames
    }),
    '----------------------------- Variants':
      '--------------------------------',
    elements: getThemePartials({
      ...options,
      type: ELEMENT,
      packageNames: elementPackageNames
    }),
    compounds: getThemePartials({
      ...options,
      type: COMPOUND,
      packageNames: compoundPackageNames
    })
  }

  console.log(JSON.stringify(theme, undefined, 2))

  // return JSON
  return JSON.stringify(theme, undefined, 2)
}

export default composeTheme

export const getComponentThemeConfig = ({ name, themes }) =>
  !name || !themes || !themes.length
    ? new Error('name and themes required')
    : {
        name,
        themes
      }
