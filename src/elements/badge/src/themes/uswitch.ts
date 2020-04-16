export default {
  "base": {
    "paddingX": [
      14,
      23
    ],
    "paddingY": [
      3,
      7
    ],
    "fontSize": "xs",
    "fontWeight": "bold"
  },
  "variants": {
    "primary": {
      "variant": "badge.base",
      "backgroundColor": "uswitch-navy",
      "color": "white"
    },
    "sponsored": {
      "paddingX": 11,
      "paddingY": 6,
      "fontSize": "xxs",
      "fontWeight": 500,
      "fontFamily": "-apple-system, BlinkMacSystemFont, sans-serif",
      "backgroundColor": "uswitch-navy",
      "color": "white"
    },
    "inverse": {
      "variant": "badge.base",
      "paddingX": [
        "xxs",
        "xs"
      ],
      "paddingY": [
        "0",
        "0"
      ],
      "fontSize": "xxs",
      "color": "black",
      "fontWeight": "bold",
      "backgroundColor": "white",
      "border": "2px solid #ACAAFF",
      "borderRadius": "3px"
    }
  }
}