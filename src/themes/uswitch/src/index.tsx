// export default {
//   colors: {
//     primary: '#d64226'
//   }
// }

import { buildTheme, Theme } from '@uswitch/trustyle.theme-utils'

const theme = {
  variables: {
    colors: {
      copper: '#d64226',
      white: '#FFFFFF'
    }
  },
  button: {
    base: {
      color: 'colors.white',
      background: 'colors.copper'
    },
    primary: {
    }
  }
};

console.log('uswitch', buildTheme(theme))

export default buildTheme(theme);
