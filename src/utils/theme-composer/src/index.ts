// @ts-nocheck
/* eslint-disable @typescript-eslint/no-var-requires */

// Constants
const ELEMENT = 'ELEMENT'
const COMPOUND = 'COMPOUND'

// if we rename packages to include category we can remove these mappings
const ELEMENTS = [
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
const COMPOUNDS = [
  '@uswitch/trustyle.article-intro',
  '@uswitch/trustyle.side-nav'
]

const getPath = ({ brand, nodeModulesPath, packageName }) =>
  `${nodeModulesPath}/${packageName}/lib/themes/${brand}.js`

// if available require and map in themes from each component
const getThemePartials = options => {
  const { packageNames } = options

  return packageNames.reduce((obj, packageName) => {
    try {
      const module = require(getPath({
        ...options,
        packageName
      }))

      return {
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
  const {
    tokens = {},
    packageJson,
    dependencyType = 'dependencies',
    elements = [],
    compounds = []
  } = options
  // get list of dependencies
  const packages = packageJson[dependencyType]

  // get all trustyle package names
  const trustylePackageNames = Object.keys(packages)
    .filter(dep => dep.match('@uswitch/trustyle'))
    .filter(dep => !dep.includes('-utils'))

  const componentPackageNames = trustylePackageNames.filter(
    name => !name.includes('theme')
  )

  const elementPackageNames = componentPackageNames.filter(name =>
    ELEMENTS.includes(name)
  )

  const compoundPackageNames = componentPackageNames.filter(name =>
    COMPOUNDS.includes(name)
  )

  // build theme
  const theme = {
    ...tokens,
    '----------------------------- Variants':
      '--------------------------------',
    elements: {
      ...getThemePartials({
        ...options,
        type: ELEMENT,
        packageNames: elementPackageNames
      }),
      ...elements
    },
    compounds: {
      ...getThemePartials({
        ...options,
        type: COMPOUND,
        packageNames: compoundPackageNames
      }),
      ...compounds
    }
  }

  // return JSON
  return JSON.stringify(theme, undefined, 2)
}

export default composeTheme
