export default {
  "base": {
    "main": {
      "position": "relative",
      "borderWidth": 1,
      "borderStyle": "solid",
      "borderColor": "grey-10",
      "paddingRight": [
        "md",
        "lg"
      ],
      "paddingLeft": [
        34,
        42
      ],
      "paddingY": "md",
      "::before": {
        "position": "absolute",
        "top": "0",
        "left": "0",
        "content": "\" \"",
        "display": "block",
        "width": 8,
        "height": "100%",
        "backgroundColor": "blue-75"
      }
    },
    "button": {
      "buttonVariant": "primary",
      "width": "auto"
    }
  },
  "variants": {
    "hero": {
      "variant": "cta2.base.main",
      "borderWidth": 0,
      "backgroundColor": "none",
      "paddingLeft": [
        "md",
        "lg"
      ],
      "::before": {
        "display": "none"
      },
      "button": {
        "variant": "cta2.base.button"
      }
    },
    "hero-white-bg": {
      "main": {
        "variant": "cta2.variants.hero.main",
        "backgroundColor": "white"
      },
      "button": {
        "variant": "cta2.base.button"
      }
    }
  }
}