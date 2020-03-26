import moneyTokens from '@uswitch/trustyle.money-theme'
import { multibrandOptions as badgeMultibrandOptions } from '@uswitch/trustyle.badge'

const tokens: any = {
  money: moneyTokens
}

const elements: any = {
  badge: badgeMultibrandOptions
}

const composeTheme = (brand: string) => {
  const theme = {
    ...tokens[brand],
    elements: Object.keys(elements).reduce((variants, key) => {
      const multibrandOptions = elements[key]
      return {
        ...variants,
        [multibrandOptions.name]: multibrandOptions.themes[brand]
      }
    }, {}),
    compounds: {}
  }

  return JSON.stringify(theme)
}

export default composeTheme
