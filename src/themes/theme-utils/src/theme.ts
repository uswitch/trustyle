// Base Theme

// export default {
//   colors: {
//     primary: '#d64226'
//   }
// }

const baseTheme = {
  variables: {
    colors: {
      primary: '#ff0000', // red
      secondary: '#0000ff'
    }
  },
  button: {
    base: {
      color: 'colors.primary'
    },
    primary: {
      color: 'colors.secondary'
    },
    secondary: {
      color: 'colors.secondary'
    },
    tertiary: {
      color: 'colors.secondary'
    },
  }
};

export default baseTheme;
