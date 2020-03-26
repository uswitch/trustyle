import { themes as badgeThemes } from '@uswitch/trustyle.badge'

const elementThemes: any = {
  badge: badgeThemes
}

const getBrandTheme = (brand: any) => (themes: any) => themes[brand]

const composeTheme = (brand: string) => {
  const getTheme = getBrandTheme(brand)

  const theme = {
    ...{},
    elements: Object.keys(elementThemes).reduce(
      (variants, key) => ({ ...variants, [key]: getTheme(elementThemes[key]) }),
      {}
    ),
    compounds: {}
  }

  return JSON.stringify(theme)
}

export default composeTheme
