export default {
  "base": {
    "marginTop": "sm",
    "marginBottom": "sm",
    "title": {
      "marginTop": "0",
      "marginBottom": "xs"
    },
    "content": {
      "marginBottom": "xs"
    },
    "button": {
      "padding": "0",
      "paddingTop": "xs",
      "paddingBottom": "xs",
      "bg": "transparent",
      "fontFamily": "base",
      "fontSize": "base",
      "fontWeight": "bold",
      "color": "textColor",
      "alignItems": "center",
      "borderWidth": "1px 0 0 0",
      "borderStyle": "solid",
      "borderColor": "grey-20",
      "display": "flex",
      "flexDirection": "row",
      "width": "100%"
    },
    "caret": {
      "color": "black"
    }
  },
  "variants": {
    "isActive": {
      "button": {
        "variant": "accordion.base.button"
      },
      "caret": {
        "variant": "accordion.base.caret"
      }
    }
  }
}