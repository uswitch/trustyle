export default {
  "base": {
    "fontWeight": "bold",
    "border": "none",
    "fontFamily": "heading",
    "borderRadius": "4px",
    "lineHeight": 0,
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
      "color": "white",
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
      "color": "grey-70",
      "border": "#E0E1E4 1px solid",
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