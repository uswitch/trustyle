// @ts-nocheck

// Constants
const ELEMENT = 'ELEMENT'
const COMPOUND = 'COMPOUND'
// const THEME = 'THEME'

// if we rename packages to include category we can remove these mappings
const elements: any = ['@uswitch/trustyle.badge']
const compounds = []

const getPath = ({ brand, nodeModulesPath, packageName }) =>
  `${nodeModulesPath}/${packageName}/lib/themes/${brand}.js`

// if available require and map in themes from each component
const getThemePartials = options => {
  const { packageNames } = options

  return packageNames.reduce((obj, packageName) => {
    try {
      return {
        ...obj,
        [packageName.replace('@uswitch/trustyle.', '')]: require(getPath({
          ...options,
          packageName
        })).default
      }
    } catch (e) {
      console.error(e)
      return obj
    }
  }, {})
}

const composeTheme = options => {
  const { tokens, packageJson, dependencyType } = options
  // get list of dependencies
  const packages = packageJson[dependencyType]

  // get all trustyle package names
  const trustylePackageNames = Object.keys(packages)
    .filter(dep => dep.match('@uswitch/trustyle'))
    .filter(dep => !dep.includes('-utils'))

  // const themePackageNames = trustylePackageNames.filter(name => name.includes('theme'))
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
    ...tokens,
    '----------------------------- Variants':
      '--------------------------------',
    elements: getThemePartials({
      ...options,
      packageNames: elementPackageNames,
      type: ELEMENT
    }),
    compounds: getThemePartials({
      ...options,
      packageNames: compoundPackageNames,
      type: COMPOUND
    })
  }

  console.log(JSON.stringify(theme))

  // return JSON
  return JSON.stringify(theme)
}

export default composeTheme
