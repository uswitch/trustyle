export default {
  "internalLinkList": {
    "listStyle": "none",
    "paddingLeft": 0,
    "paddingTop": "xxs",
    "paddingBottom": "xxs",
    "margin": 0
  },
  "internalLinkListItem": {
    "base": {
      "mb": 0,
      "position": "relative",
      ">a": {
        "transition": "all 0.2s ease-in-out",
        "display": "block",
        "color": "grey-70",
        "textDecoration": "none",
        "fontSize": "sm",
        "padding": "12px 16px",
        ":visited": {
          "color": "grey-70"
        }
      }
    },
    "isActive": {
      "variant": "sideNav.internalLinkListItem.base",
      "color": "primary",
      "bg": "rgb(247, 247, 248)",
      "::after": {
        "variant": "sideNav.internalLinkListItem.base.::after",
        "content": "\"\"",
        "position": "absolute",
        "top": "0",
        "left": "0",
        "display": "block",
        "width": 4,
        "height": "100%",
        "backgroundColor": "primary"
      },
      ">a": {
        "variant": "sideNav.internalLinkListItem.base.>a",
        "color": "primary",
        "fontWeight": "bold",
        "transform": "translateX(8px)",
        ":visited": {
          "color": "primary"
        }
      }
    }
  },
  "additionalLink": {
    "display": "block",
    "marginBottom": "xxs",
    "color": "grey-80",
    "paddingTop": "xxs",
    "paddingBottom": "xxs",
    "textDecoration": "none"
  }
}