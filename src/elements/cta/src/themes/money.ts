export default {
  "base": {
    "main": {
      "backgroundColor": "grey-10"
    },
    "title": {
      "color": "experimental-text",
      "fontWeight": "bold"
    },
    "text": {
      "marginBottom": [
        null,
        0
      ]
    },
    "button": {
      "marginLeft": [
        null,
        "md"
      ]
    }
  },
  "variants": {
    "hero": {
      "main": {
        "backgroundColor": "none",
        "color": "white"
      },
      "title": {
        "variant": "cta2.base.title",
        "color": "inherit"
      },
      "text": {
        "variant": "cta2.base.text"
      },
      "button": {
        "variant": "cta2.base.button"
      }
    },
    "hero-white-bg": {
      "main": {
        "backgroundColor": "white"
      },
      "title": {
        "variant": "cta2.base.title"
      },
      "text": {
        "variant": "cta2.base.text"
      },
      "button": {
        "variant": "cta2.base.button"
      }
    }
  }
}