// export default {
//   colors: {
//     primary: '#d64226'
//   }
// }

import { buildTheme, Theme } from '@uswitch/trustyle.theme-utils'

const theme = {
  variables: {
    colors: {
      primary: '#ff0000', // red
      primaryText: '#fff',
      primaryGradient: 'linear-gradient(-153deg,#db4d75,#924a8b 95%)'
    },
  },
  button: {
    base: {
      color: 'colors.primary'
    },
    primary: {
      background: 'colors.primaryGradient',
      color: 'colors.primaryText'
    },
    secondary: {
      color: 'colors.secondary'
    },
    tertiary: {
      color: 'colors.secondary'
    },
  }
};

export default buildTheme(theme);
