export default {
  "base": {
    "fontWeight": "bold",
    "border": "none",
    "borderRadius": "50vh",
    ":disabled": {
      "opacity": "0.3",
      "cursor": "not-allowed"
    },
    "btnSize": {
      "large": {
        "paddingX": "xl",
        "paddingY": "base",
        "fontSize": "md",
        "height": 56
      },
      "small": {
        "paddingX": 40,
        "paddingY": 13,
        "fontSize": "sm",
        "height": "xl"
      }
    }
  },
  "variants": {
    "primary": {
      "variant": "buttons.base",
      "color": "experimental-text",
      "backgroundColor": "primary",
      ":hover:not(:disabled)": {
        "backgroundColor": "primary--dark"
      },
      ":focus": {
        "backgroundColor": "primary--dark"
      },
      ":active": {
        "backgroundColor": "primary--dark"
      }
    },
    "secondary": {
      "variant": "buttons.base",
      "color": "grey-0",
      "backgroundColor": "button-secondary",
      ":hover:not(:disabled)": {
        "backgroundColor": "button-secondary--hover"
      },
      ":focus": {
        "backgroundColor": "button-secondary--hover"
      },
      ":active": {
        "backgroundColor": "button-secondary--hover"
      }
    }
  }
}